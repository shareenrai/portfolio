/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef, useEffect, useCallback } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { a } from '@react-spring/three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

import girlScene from '../assets/3d/girl.glb';

const Girl = ({ isRotating, setIsRotating, setCurrentStage, ...props }) => {
    const girlRef = useRef();
    const { gl, viewport } = useThree();

    const { nodes, materials } = useGLTF(girlScene, true, (loader) => {
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/path/to/draco/');
        loader.setDRACOLoader(dracoLoader);
    });

    const lastX = useRef(0);
    const rotationSpeed = useRef(0);
    const dampingFactor = 0.95;

    const handlePointerDown = useCallback((e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        lastX.current = clientX;
    }, [setIsRotating]);

    const handlePointerUp = useCallback((e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);
    }, [setIsRotating]);

    const handlePointerMove = useCallback((e) => {
        e.stopPropagation();
        e.preventDefault();
        if (isRotating) {
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const delta = (clientX - lastX.current) / viewport.width;
            girlRef.current.rotation.y += delta * 0.01 * Math.PI;
            lastX.current = clientX;
            rotationSpeed.current = delta * 0.01 * Math.PI;
        }
    }, [isRotating, viewport.width]);

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'ArrowLeft') {
            if (!isRotating) setIsRotating(true);
            girlRef.current.rotation.y += 0.01 * Math.PI;
        } else if (e.key === 'ArrowRight') {
            if (!isRotating) setIsRotating(true);
            girlRef.current.rotation.y -= 0.01 * Math.PI;
        }
    }, [isRotating, setIsRotating]);

    const handleKeyUp = useCallback((e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            setIsRotating(false);
        }
    }, [setIsRotating]);


    useFrame(() => {
        if (!isRotating) {
            rotationSpeed.current *= dampingFactor;
            if (Math.abs(rotationSpeed.current) < 0.01) {
                rotationSpeed.current = 0;
            }
        }

        // Check current stage based on rotation
        const rotation = girlRef.current.rotation.y;
        const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

        // Check stage using console.log:
        //console.log('Normalized Rotation:', normalizedRotation);

        const stage = normalizedRotation === 0
            ? 1
            : (4 - Math.floor(normalizedRotation / (Math.PI / 2)) % 4) % 4 + 1

        if (setCurrentStage) { // Ensure setCurrentStage is defined
            setCurrentStage(stage);
        }

        /* switch (true) {
             case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
                 setCurrentStage(4);
                 break;
             case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
                 setCurrentStage(3);
                 break;
             case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
                 setCurrentStage(2);
                 break;
             case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
                 setCurrentStage(1);
                 break;
             default:
                 setCurrentStage(null);
         } */


    });

    useEffect(() => {
        if (!gl) return;
        const canvas = gl.domElement;
        canvas.addEventListener('pointerdown', handlePointerDown);
        canvas.addEventListener('pointerup', handlePointerUp);
        canvas.addEventListener('pointermove', handlePointerMove);
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            canvas.removeEventListener('pointerdown', handlePointerDown);
            canvas.removeEventListener('pointerup', handlePointerUp);
            canvas.removeEventListener('pointermove', handlePointerMove);
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, [gl, handlePointerDown, handlePointerUp, handlePointerMove, handleKeyDown, handleKeyUp]);

    return (
        <a.group ref={girlRef}
            object={girlScene}
            onPointerDown={(e) => setIsRotating(true)}
            onPointerUp={(e) => setIsRotating(false)}
            setCurrentStage={setCurrentStage}

            {...props}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder.geometry}
                material={nodes.Cylinder.material}
                position={[1.024, -1.086, -0.093]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[1.982, 0.187, 2.042]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Face.geometry}
                material={nodes.Face.material}
                position={[1.006, -0.027, 0.279]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Bangs_4.geometry}
                    material={nodes.Bangs_4.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mirror_7.geometry}
                    material={nodes.Mirror_7.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere_4.geometry}
                    material={nodes.Sphere_4.material}
                    position={[-0.226, -0.179, 0.31]}
                    scale={0.019}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus_4.geometry}
                    material={nodes.Torus_4.material}
                    position={[-0.305, -0.218, -0.11]}
                    rotation={[-0.702, -0.239, 0.881]}
                    scale={0.056}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_9.geometry}
                    material={nodes.Mesh_9.material}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Right.geometry}
                material={nodes.Right.material}
                position={[1.413, -0.013, -0.069]}
                rotation={[-2.23, 1.56, 2.231]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mirror_1.geometry}
                    material={nodes.Mirror_1.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_1.geometry}
                    material={nodes.Mesh_1.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere.geometry}
                    material={nodes.Sphere.material}
                    position={[-0.226, -0.179, 0.31]}
                    scale={0.019}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Bangs.geometry}
                    material={nodes.Bangs.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus.geometry}
                    material={nodes.Torus.material}
                    position={[-0.305, -0.218, -0.11]}
                    rotation={[-0.702, -0.239, 0.881]}
                    scale={0.056}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Back.geometry}
                material={nodes.Back.material}
                position={[0.976, -0.013, -0.461]}
                rotation={[-3.133, -0.007, -3.141]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mirror_6.geometry}
                    material={nodes.Mirror_6.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_8.geometry}
                    material={nodes.Mesh_8.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere_3.geometry}
                    material={nodes.Sphere_3.material}
                    position={[-0.226, -0.179, 0.31]}
                    scale={0.019}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Bangs_3.geometry}
                    material={nodes.Bangs_3.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus_3.geometry}
                    material={nodes.Torus_3.material}
                    position={[-0.305, -0.218, -0.11]}
                    rotation={[-0.702, -0.239, 0.881]}
                    scale={0.056}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Left.geometry}
                material={nodes.Left.material}
                position={[0.634, 0, -0.071]}
                rotation={[0, -Math.PI / 2, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Bangs_2.geometry}
                    material={nodes.Bangs_2.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mirror_5.geometry}
                    material={nodes.Mirror_5.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Sphere_2.geometry}
                    material={nodes.Sphere_2.material}
                    position={[-0.226, -0.179, 0.31]}
                    scale={0.019}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus_1.geometry}
                    material={nodes.Torus_1.material}
                    position={[-0.305, -0.218, -0.11]}
                    rotation={[-0.702, -0.239, 0.881]}
                    scale={0.056}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Torus_1.geometry}
                    material={nodes.Torus_1.material}
                    position={[0.174, -0.187, 0.373]}
                    rotation={[-0.955, Math.PI / 6, 2.186]}
                    scale={0.051}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mesh_2.geometry}
                    material={nodes.Mesh_2.material}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Glasses.geometry}
                    material={nodes.Glasses.material}
                    position={[0.167, -0.136, 0.382]}
                    rotation={[-0.005, -0.003, 0]}
                    scale={[0.195, 0.11, 0.012]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Mesh_6.geometry}
                        material={nodes.Mesh_6.material}
                        position={[-1.672, 0, 0.093]}
                    />
                    <group
                        position={[-1.672, 0, 0.137]}
                        rotation={[0.575, 0.596, 2.285]}
                        scale={[1.036, 1, 0.965]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Mesh_5.geometry}
                            material={nodes.Mesh_5.material}
                            rotation={[0, 0.767, -2.466]}
                        />
                    </group>
                    <group
                        position={[0, 0, 0.044]}
                        rotation={[0.575, 0.596, 2.285]}
                        scale={[1.036, 1, 0.965]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Mesh_7.geometry}
                            material={nodes.Mesh_7.material}
                            rotation={[0, 0.767, -2.466]}
                        />
                    </group>
                </mesh>
            </mesh>

        </a.group>
    )
}

export default Girl
