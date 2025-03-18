import React, { useEffect, useRef } from "react"
import { useGLTF, useScroll } from "@react-three/drei"
import { Box3, Vector3, Group } from "three"
import { useFrame } from "@react-three/fiber"

useGLTF.preload("/uxr.zone_linear_stair.glb")

export default function Model() {
    const group = useRef<Group>(null)
    const { scene } = useGLTF("/uxr.zone_linear_stair.glb")
    const scroll = useScroll()
    
    useFrame(() => {
        if (group.current) {
            const progress = scroll.offset
            group.current.position.z = -progress * 10
            group.current.position.y = progress * 2.5
        }
    })

    useEffect(() => {
        if (scene) {
            const box = new Box3().setFromObject(scene)
            const center = new Vector3()
            box.getCenter(center)
            scene.position.sub(center)
        }
    }, [scene])

    return (
        <group ref={group} rotation={[0.2,1.56,0]}>
            <primitive object={scene} />
        </group>
    )
}
