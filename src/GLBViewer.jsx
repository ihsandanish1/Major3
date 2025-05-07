import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";

const Model = ({ url, scale }) => {
    const { scene } = useGLTF(url);
    const modelRef = useRef();

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.01;
        }
    });

    return <primitive ref={modelRef} object={scene} scale={[scale, scale, scale]} />;
};

export default function GLBViewer({ modelPath, scale }) {
    return (
        <Canvas camera={{ position: [0, 3, 7] }}>
            <Suspense fallback={null}>
                <ambientLight intensity={0.8} />
                <Environment preset="sunset" />
                <Model url={modelPath} scale={scale}/>
                <OrbitControls enableZoom={false} />
            </Suspense>
        </Canvas>
    );
}
