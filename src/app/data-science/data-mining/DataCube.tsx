"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const DataCube = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    
    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    
    // Add renderer to the DOM
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
      renderer.domElement.classList.add('data-cube-canvas');
    }
    
    // Create data cube with nodes
    const cubeSize = 3;
    const nodeGeometry = new THREE.SphereGeometry(0.05, 16, 16);
    
    // Create points
    const points: THREE.Vector3[] = [];
    type NodeObject = {
      mesh: THREE.Mesh;
      baseScale: number;
      pulseSpeed: number;
      pulsePhase: number;
    };
    const nodeObjects: NodeObject[] = [];
    
    // Generate grid of points
    const nodesPerDimension = 6;
    const spacing = cubeSize / (nodesPerDimension - 1);
    
    for (let x = 0; x < nodesPerDimension; x++) {
      for (let y = 0; y < nodesPerDimension; y++) {
        for (let z = 0; z < nodesPerDimension; z++) {
          // Position each node within the cube
          const xPos = (x * spacing) - cubeSize / 2;
          const yPos = (y * spacing) - cubeSize / 2;
          const zPos = (z * spacing) - cubeSize / 2;
          
          // Create node with random color from gradient
          const t = Math.random(); // Value from 0 to 1 for gradient interpolation
          const color = new THREE.Color(0x01AEEE).lerp(new THREE.Color(0x5B36D9), t);
          
          const nodeMaterial = new THREE.MeshBasicMaterial({ 
            color: color,
            transparent: true,
            opacity: 0.7 + Math.random() * 0.3
          });
          
          const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
          node.position.set(xPos, yPos, zPos);
          
          // Store positions for lines
          points.push(new THREE.Vector3(xPos, yPos, zPos));
          nodeObjects.push({
            mesh: node,
            baseScale: 1.0,
            pulseSpeed: 0.5 + Math.random() * 1.5,
            pulsePhase: Math.random() * Math.PI * 2
          });
          
          scene.add(node);
        }
      }
    }
    
    // Create some connections between nearby nodes
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0x4D22D9,
      transparent: true,
      opacity: 0.3
    });
    
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const distance = points[i].distanceTo(points[j]);
        
        // Connect only if nodes are close enough
        if (distance < spacing * 1.5) {
          const lineGeometry = new THREE.BufferGeometry().setFromPoints([points[i], points[j]]);
          const line = new THREE.Line(lineGeometry, lineMaterial);
          scene.add(line);
        }
      }
    }
    
    // Add light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      
      // Rotate the entire scene slowly
      scene.rotation.y += 0.002;
      scene.rotation.x += 0.001;
      
      // Pulse the nodes
      const time = Date.now() * 0.001;
      nodeObjects.forEach(node => {
        const pulse = Math.sin(time * node.pulseSpeed + node.pulsePhase) * 0.2 + 1;
        node.mesh.scale.set(pulse, pulse, pulse);
      });
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      scene.clear();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 overflow-hidden"></div>;
};

export default DataCube;
