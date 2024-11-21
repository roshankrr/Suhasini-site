import React from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function Pamplate() {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, ref.current!.clientWidth / ref.current!.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: ref.current!,
      antialias: true
    });

    const geometry = new THREE.PlaneGeometry(5, 5);
    const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    const controls = new OrbitControls(camera, renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();

  }, [ref]);

  return (
    <div ref={ref} style={{ width: '100vw', height: '100vh' }} />
  );
}
