import { Canvas, useThree } from "@react-three/fiber";
import { Environment, ScrollControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import Model from "./Model";
import React from "react";

function Background() {
    const { scene } = useThree();
    
    scene.background = new THREE.Color("#000000");

    return null;
}

export default function Scene() {
    return (
        <Canvas>
            <directionalLight position={[-5, -5, 5]} intensity={4} />
            <ScrollControls pages={3} damping={0.25}> 
                <Model />
            </ScrollControls>
            <Background />
        </Canvas>
    );
}
