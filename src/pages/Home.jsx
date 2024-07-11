import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState, useEffect, useCallback } from 'react';
import Loader from '../components/Loader';
import Girl from '../models/Girl';
import HomeInfo from '../components/HomeInfo';


const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [girlScale, setGirlScale] = useState([1, 1, 1]);
    const [girlPosition, setGirlPosition] = useState([-1, 0.25, 2.75]);
    const [currentStage, setCurrentStage] = useState(1);


    /* const adjustGirlForScreenSize = useCallback(() => {
         if (window.innerWidth < 768) {
             setGirlScale([15, 15, 15]);
         } else {
             setGirlScale([1, 1, 1]);
         }
     }, []); */

    const adjustGirlForScreenSize = useCallback(() => {
        if (window.innerWidth < 768) {
            setGirlScale([1, 1, 1]);
            setGirlPosition([-1, -0.20, 1.75]);
        } else {
            setGirlScale([1, 1, 1]);
            setGirlPosition([-1, 0.20, 2.75]);
        }
    }, []);

    useEffect(() => {
        adjustGirlForScreenSize();
        window.addEventListener('resize', adjustGirlForScreenSize);

        return () => {
            window.removeEventListener('resize', adjustGirlForScreenSize);
        };
    }, [adjustGirlForScreenSize]);

    /* const handleRotationChange = (rotation) => {
         const newStage = Math.floor((rotation + 45) / 90) % 4 + 1; // Calculate the stage based on rotation
         console.log('Current Stage:', newStage)
         setCurrentStage(newStage);
     }; */

    return (
        <section className='w-full h-screen relative'>

            <Canvas
                className={`w-full h-screen bg-black ${isRotating ? 'cursor-grabbing' : 'cursor-grab'} `}
                camera={{ near: 0.1, far: 1000 }}
                onCreated={({ gl }) => {
                    gl.domElement.addEventListener('webglcontextlost', (e) => {
                        e.preventDefault();
                        console.log('WebGL context lost');
                    });

                    gl.domElement.addEventListener('webglcontextrestored', () => {
                        console.log('WebGL context restored');
                    });
                }}
            >
                <Suspense fallback={<Loader />}>

                    <directionalLight castShadow position={[0, 1.7, 1.2]} intensity={0.7} color={'white'} />
                    <directionalLight castShadow position={[0, -1, 1.2]} intensity={0.5} color={'lightblue'} />
                    <directionalLight castShadow position={[0, -1, 2.5]} intensity={1} color={'blue'} />
                    <pointLight castShadow position={[0, -0.5, -1.5]} intensity={1} color={'darkgreen'} />
                    <ambientLight intensity={0.1} color={'green'} />
                    <hemisphereLight skyColor={'black'} groundColor={'darkblue'} intensity={0.5} />
                    <Girl

                        position={girlPosition}
                        scale={girlScale}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage} // Correctly pass the setCurrentStage function

                    />

                </Suspense>
            </Canvas>


            {currentStage === 1 && (
                <div className=" absolute top-16 left-0 right-0 z-10 flex items-center justify-center">
                    <div className="stage-1 items-center justify-center flex">
                        <HomeInfo currentStage={currentStage} />
                    </div>
                </div>
            )}
            {currentStage === 2 && (
                <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                    <div className="popup">
                        <HomeInfo currentStage={currentStage} />
                    </div>
                </div>
            )}
            {currentStage === 3 && (
                <div className="absolute top-48 left-40  right-0 z-10 flex items-center justify-center">
                    <div className="popup">
                        <HomeInfo currentStage={currentStage} />
                    </div>
                </div>
            )}
            {currentStage === 4 && (
                <div className="absolute top-28 left-32 right-0 z-10 flex items-center justify-center">
                    <div className="popup">
                        <HomeInfo currentStage={currentStage} />
                    </div>
                </div>
            )}






        </section>
    );
};

export default Home;
