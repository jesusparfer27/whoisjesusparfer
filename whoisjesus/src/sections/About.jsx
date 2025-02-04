import React, { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('jesusparfer@alumnos.cei.es');
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000);
    };

    return (
        <section className="c-space my-20" id="sobreMi">
            <div className="grid xl:grid-cols-3 xl:grid-rows-4 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                
                {/* Perfil Profesional */}
                <div className="col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Jesús Pareja</p>
                            <p className="grid-subtext">
                                Con dos años de experiencia creando interfaces modernas y funcionales. Especializado en el Stack MERN.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Tecnologías */}
                <div className="col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid2.png" alt="grid-2" className="sm:w-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Tecnologías</p>
                            <p className="grid-subtext">
                                Manejo de HTML, CSS, JavaScript y TypeScript. Experiencia con frameworks y librerías como React.js, Next.js, Node.js, Express.js y bases de datos como MongoDB.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Trabajo Remoto */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                        </div>
                        <p className="grid-headtext">Trabajo en remoto</p>
                        <p className="grid-subtext">
                            Basado en Valencia, España, pero disponible para colaborar en proyectos de cualquier parte del mundo.
                        </p>
                        <a href="#contacto">
                        <Button name="Contáctame" isBeam containerClass="w-full mt-10" />
                        </a>
                    </div>
                </div>

                {/* Motivación y Pasión */}
                <div className="xl:col-span-2 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Mi pasión por la tecnología</p>
                            <p className="grid-subtext">
                                Me encanta desarrollar soluciones creativas que hagan que los productos digitales sean más atractivos y funcionales. Disfruto resolver problemas y construir experiencias interactivas para los usuarios.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contacto */}
                <div className="xl:col-span-1 xl:row-span-1">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top" />
                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Escríbeme un correo</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                                    jesusparfer@alumnos.cei.es
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default About;
