import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState, useEffect, useCallback } from 'react';
import Loader from '../components/Loader';
import Computer from '../models/Computer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [computerScale, setComputerScale] = useState([1, 1, 1]);
    const [computerPosition, setComputerPosition] = useState([-1, 0.25, 2.75]);


    const adjustComputerForScreenSize = useCallback(() => {
        if (window.innerWidth < 768) {
            setComputerScale([0.5, 0.5, 0.5]);
            setComputerPosition([0, -0.25, -1.5]);
        } else {
            setComputerScale([0.55, 0.55, 0.55]);
            setComputerPosition([2.5, 0, -2.5]);
        }
    }, []);

    useEffect(() => {
        adjustComputerForScreenSize();
        window.addEventListener('resize', adjustComputerForScreenSize);

        return () => {
            window.removeEventListener('resize', adjustComputerForScreenSize);
        };
    }, [adjustComputerForScreenSize]);



    return (
        <section className='w-full h-screen relative'>

            <div className='absolute top-36 left-50 right-36 z-10 flex items-center justify-center'>
                <p className='glow-text text-blush-pink sm:text-3xl '>
                    hi,
                    <br />
                    send me a message.
                    <br />
                    lets get in touch!
                    <br /> -love shareen
                </p>

            </div>

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
                    <directionalLight castShadow position={[3, 4, -5]} intensity={0.7} color={'pink'} />
                    <directionalLight castShadow position={[0, -1, 1.2]} intensity={1.7} color={'magenta'} />
                    <directionalLight castShadow position={[0, -1, 2.5]} intensity={2} color={'pink'} />
                    <pointLight castShadow position={[0, -0.5, -1.5]} intensity={1} color={'pink'} />
                    <pointLight intensity={7} position={[3, 0.5, -2.5]} color={'green'} />
                    <pointLight intensity={1} position={[3, 0, -2.2]} color={'magenta'} />
                    <hemisphereLight skyColor={'black'} groundColor={'pink'} intensity={0.4} />
                    <Computer

                        position={computerPosition}
                        scale={computerScale}
                        rotation={[-0.12, - 0.85, 0]}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}

                    />

                </Suspense>
            </Canvas>

            <div className='absolute top-28 left-24 right-70 z-10 flex items-center justify-center'>
                <ContactForm />

            </div>
            


        </section>
    );
};

export default Contact;
