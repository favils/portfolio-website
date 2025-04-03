import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import Model from "./Model.jsx";
import { EffectComposer, Bloom, DepthOfField } from "@react-three/postprocessing";

function Background() {
    return <color attach="background" args={["#000"]} />;
}

export default function Scene() {
    return (
        <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
            <Canvas>
                <directionalLight position={[-5, -5, 5]} intensity={4} />
                <ScrollControls pages={4} damping={0.25}>
                    <Model />
                </ScrollControls>
                <Background />
                <EffectComposer>
                    <DepthOfField focusDistance={0} focalLength={0.2} bokehScale={4} height={1}/>
                    <Bloom radius={100} opacity={0.4} intensity={2} luminanceThreshold={0.2} luminanceSmoothing={1} height={480}/>
                </EffectComposer>
            </Canvas>
            <div className="absolute bottom-20 w-full text-center text-white text-xs">
                [ Scroll Out ]
                <p><i>in progress</i></p>
            </div>
            <div className="absolute mt-[-1%] border-white border-1 inset-[5%] pointer-events-none"></div>
        </div>
    );
}