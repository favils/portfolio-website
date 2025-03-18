import React, { useEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { Box3, Vector3, Group } from "three";
import { useFrame } from "@react-three/fiber";

useGLTF.preload("/untitled.glb");

export default function Model() {
    const group = useRef(null);
    const { scene } = useGLTF("/untitled.glb");
    const scroll = useScroll();
    
    useEffect(() => {
        if (scene) {
            const box = new Box3().setFromObject(scene);
            const center = new Vector3();
            box.getCenter(center);
            const newScene = scene.clone();
            newScene.position.sub(center);
            group.current.add(newScene);
        }
    }, [scene]);

    useFrame(() => {
        if (group.current) {
            const progress = scroll.offset;
            group.current.position.z = -progress * 10;
            group.current.position.y = progress * 2.5;
        }
    });

    return (
        <group ref={group} rotation={[0.2, 1.575, 0]} />
    );
}
