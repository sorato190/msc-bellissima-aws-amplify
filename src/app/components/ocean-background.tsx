"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function OceanBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const fogColor = new THREE.Color(0xe0f2fe);

    const scene = new THREE.Scene();
    scene.background = fogColor;
    scene.fog = new THREE.Fog(fogColor, 4, 19);

    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    const lookTarget = new THREE.Vector3(0, -1, -3);
    camera.position.set(0, 3.4, 8.5);
    camera.lookAt(lookTarget);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const hemiLight = new THREE.HemisphereLight(0xf0f9ff, 0x0e6ba8, 1.1);
    scene.add(hemiLight);
    const sunLight = new THREE.DirectionalLight(0xfff4e0, 1.15);
    sunLight.position.set(-6, 10, 4);
    scene.add(sunLight);

    // 海面(ローポリ調にして波面をはっきり見せる)
    const waveSize = 60;
    const segments = 26;
    const geometry = new THREE.PlaneGeometry(
      waveSize,
      waveSize,
      segments,
      segments
    );
    geometry.rotateX(-Math.PI / 2);
    const basePositions = Float32Array.from(
      geometry.attributes.position.array
    );
    const vertexCount = geometry.attributes.position.count;
    const colorAttribute = new THREE.BufferAttribute(
      new Float32Array(vertexCount * 3),
      3
    );
    geometry.setAttribute("color", colorAttribute);

    // 波の谷→中間→泡立つ波頭の3色
    const deep = { r: 0x0f / 255, g: 0x5e / 255, b: 0x8c / 255 };
    const mid = { r: 0x5c / 255, g: 0xc4 / 255, b: 0xe8 / 255 };
    const foam = { r: 0xf2 / 255, g: 0xfc / 255, b: 0xff / 255 };
    const maxAmp = 2.7;
    const foamStart = 0.52;

    const material = new THREE.MeshPhongMaterial({
      vertexColors: true,
      emissive: 0x08334a,
      emissiveIntensity: 0.1,
      shininess: 170,
      specular: 0xffffff,
      flatShading: true,
    });

    const ocean = new THREE.Mesh(geometry, material);
    ocean.position.y = -0.6;
    scene.add(ocean);

    // 波の格子線を重ねて波面の輪郭をはっきり見せる
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const oceanWire = new THREE.Mesh(geometry, wireMaterial);
    oceanWire.position.y = -0.6;
    scene.add(oceanWire);

    const spriteCanvas = document.createElement("canvas");
    spriteCanvas.width = 64;
    spriteCanvas.height = 64;
    const ctx = spriteCanvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, "rgba(255,255,255,0.95)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(spriteCanvas);

    // 風に舞う光の粒子(高い位置を漂うミスト)
    const particleCount = 230;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSpeed = new Float32Array(particleCount);
    const particlePhase = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * waveSize;
      particlePositions[i * 3 + 1] = Math.random() * 7 - 1;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * waveSize;
      particleSpeed[i] = 0.012 + Math.random() * 0.025;
      particlePhase[i] = Math.random() * Math.PI * 2;
    }
    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.5,
      map: particleTexture,
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 波間に舞う白い泡のかたまり(水面付近を漂う)
    const foamCount = 150;
    const foamGeometry = new THREE.BufferGeometry();
    const foamPositions = new Float32Array(foamCount * 3);
    const foamSpeed = new Float32Array(foamCount);
    const foamPhase = new Float32Array(foamCount);
    const foamSway = new Float32Array(foamCount);
    for (let i = 0; i < foamCount; i++) {
      foamPositions[i * 3] = (Math.random() - 0.5) * waveSize;
      foamPositions[i * 3 + 1] = Math.random() * 1.6 - 1.2;
      foamPositions[i * 3 + 2] = (Math.random() - 0.5) * waveSize;
      foamSpeed[i] = 0.015 + Math.random() * 0.03;
      foamPhase[i] = Math.random() * Math.PI * 2;
      foamSway[i] = 0.3 + Math.random() * 0.7;
    }
    foamGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(foamPositions, 3)
    );

    const foamMaterial = new THREE.PointsMaterial({
      size: 0.7,
      map: particleTexture,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
    });
    const foamParticles = new THREE.Points(foamGeometry, foamMaterial);
    scene.add(foamParticles);

    const clock = new THREE.Clock();
    let frameId = 0;

    const renderFrame = (t: number) => {
      const pos = geometry.attributes.position;
      const colors = colorAttribute.array as Float32Array;
      for (let i = 0; i < pos.count; i++) {
        const x = basePositions[i * 3];
        const z = basePositions[i * 3 + 2];
        const y =
          Math.sin(x * 0.3 + t * 0.72) * 1.05 +
          Math.cos(z * 0.25 + t * 0.6) * 1.05 +
          Math.sin((x + z) * 0.15 + t * 0.42) * 0.6;
        pos.setY(i, y);

        // 高さに応じて谷(濃い青)→中間→泡立つ波頭(白)へグラデーション
        const h = Math.min(Math.max((y + maxAmp) / (maxAmp * 2), 0), 1);
        let r: number, g: number, b: number;
        if (h < foamStart) {
          const k = h / foamStart;
          r = deep.r + (mid.r - deep.r) * k;
          g = deep.g + (mid.g - deep.g) * k;
          b = deep.b + (mid.b - deep.b) * k;
        } else {
          const k = (h - foamStart) / (1 - foamStart);
          r = mid.r + (foam.r - mid.r) * k;
          g = mid.g + (foam.g - mid.g) * k;
          b = mid.b + (foam.b - mid.b) * k;
        }
        const idx = i * 3;
        colors[idx] = r;
        colors[idx + 1] = g;
        colors[idx + 2] = b;
      }
      pos.needsUpdate = true;
      colorAttribute.needsUpdate = true;
      geometry.computeVertexNormals();

      const particlePos = particleGeometry.attributes
        .position as THREE.BufferAttribute;
      for (let i = 0; i < particleCount; i++) {
        const idx = i * 3;
        particlePos.array[idx] += particleSpeed[i];
        particlePos.array[idx + 2] +=
          Math.sin(t * 0.25 + particlePhase[i]) * 0.007;
        if (particlePos.array[idx] > waveSize / 2) {
          particlePos.array[idx] = -waveSize / 2;
        }
        if (particlePos.array[idx + 2] > waveSize / 2) {
          particlePos.array[idx + 2] = -waveSize / 2;
        } else if (particlePos.array[idx + 2] < -waveSize / 2) {
          particlePos.array[idx + 2] = waveSize / 2;
        }
        particlePos.array[idx + 1] +=
          Math.sin(t * 0.5 + particlePhase[i]) * 0.002;
      }
      particlePos.needsUpdate = true;

      const foamPos = foamGeometry.attributes
        .position as THREE.BufferAttribute;
      for (let i = 0; i < foamCount; i++) {
        const idx = i * 3;
        foamPos.array[idx] += foamSpeed[i];
        foamPos.array[idx + 2] +=
          Math.sin(t * 0.55 + foamPhase[i]) * foamSway[i] * 0.012;
        foamPos.array[idx + 1] =
          -1.2 + Math.abs(Math.sin(t * 0.8 + foamPhase[i])) * foamSway[i];
        if (foamPos.array[idx] > waveSize / 2) {
          foamPos.array[idx] = -waveSize / 2;
        }
        if (foamPos.array[idx + 2] > waveSize / 2) {
          foamPos.array[idx + 2] = -waveSize / 2;
        } else if (foamPos.array[idx + 2] < -waveSize / 2) {
          foamPos.array[idx + 2] = waveSize / 2;
        }
      }
      foamPos.needsUpdate = true;

      camera.position.x = Math.sin(t * 0.065) * 2.85;
      camera.lookAt(lookTarget);

      renderer.render(scene, camera);
    };

    const animate = () => {
      renderFrame(clock.getElapsedTime());
      frameId = requestAnimationFrame(animate);
    };

    if (prefersReducedMotion) {
      renderFrame(0);
    } else {
      animate();
    }

    const handleResize = () => {
      const { clientWidth, clientHeight } = container;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (frameId) cancelAnimationFrame(frameId);
      geometry.dispose();
      material.dispose();
      wireMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      foamGeometry.dispose();
      foamMaterial.dispose();
      particleTexture.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 h-screen w-screen overflow-hidden"
    />
  );
}
