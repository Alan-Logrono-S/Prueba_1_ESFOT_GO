import { Link } from "react-router-dom"

export const Home = () => {
    const scrollToMap = () => {
        const mapSection = document.getElementById('map-section');
        if (mapSection) {
            mapSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-16 flex justify-between items-center px-6">
                <div className="flex items-center gap-2">
                    <h1 className="font-bold text-2xl text-red-700">ESFOT<span className='text-black'>go</span></h1>
                </div>
                <ul className="flex gap-5 justify-center my-4 flex-wrap">
                    <li><a href="#" className='font-bold hover:text-sky-500 hover:underline text-blue-800'>HOGAR</a></li>
                    <li><button onClick={scrollToMap} className='font-bold hover:text-sky-500 hover:underline text-blue-800'>MAPA</button></li>
                    <li><a href="#" className='font-bold hover:text-sky-500 hover:underline text-blue-800'>CONTACTO</a></li>
                </ul>
                <ul className="flex justify-center items-center gap-4 my-4">
                    <li><Link to="/Login" className="bg-red-700 text-white px-6 py-2 rounded-xl shadow-md hover:bg-red-800 hover:scale-105 transition-transform duration-200">Iniciar Sesión</Link></li>
                    <li><Link to="/Register" className="bg-red-700 text-white px-6 py-2 rounded-xl shadow-md hover:bg-red-800 hover:scale-105 transition-transform duration-200">Registrarse</Link></li>
                </ul>
            </header>

            <body className="pt-20">
                <div className="relative w-[1000px] h-[450px] rounded-2xl overflow-hidden mx-auto mt-5">
                    <img src="https://esfot.epn.edu.ec/images/paginas/entradaesfot.jpg" alt="Campus Esfot" className="w-full h-[500px] object-cover"/>
                    
                    <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-4 text-center mx-auto rounded-2xl w-[800px] h-[300px] mt-20">
                        <br />
                        <p className="text-white text-4xl md:text-5xl font-extrabold ">Explora el campus de la Esfot</p>
                        <p className="text-white text-2xl md:text-1xl">"Descubre la Esfot a un clic y recuerda el campus como un experto."</p>
                        <button 
                            onClick={scrollToMap}
                            className="bg-red-700 text-white px-6 py-2 rounded-2xl shadow-md hover:bg-red-800 hover:scale-105 transition-transform duration-200"
                        >
                            Comienza ahora
                        </button>
                    </div>
                </div>

                {/* Sección del Mapa */}
                <section id="map-section" className="container mx-auto px-4 my-10">
                    <div className="container mx-auto relative mt-6">
                        <div className='text-red-800 border-2' />
                        <br />
                        <h1 className="text-blue-950 text-3xl relative w-50 text-center mx-auto font-semibold">EXPLORA EL CAMPUS</h1>
                        <p className="text-center text-gray-600 mt-4 text-lg">Descubre todas las ubicaciones importantes de la ESFOT</p>
                    </div>
                    
                    {/* Aquí va el mapa */}
                    <div className="my-8">
                        <Link to="/map">
                            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:shadow-3xl transition-shadow duration-300 group">
                                {/* Imagen de fondo del mapa */}
                                <img 
                                    src="https://esfot.epn.edu.ec/images/paginas/entradaesfot.jpg" 
                                    alt="Mapa Campus" 
                                    className="w-full h-full object-cover blur-sm group-hover:blur-none transition-all duration-300"
                                />
                                
                                {/* Overlay con texto */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-center">
                                    <div className="text-center space-y-4">
                                        <div className="text-white text-6xl mb-4 animate-bounce">
                                            🗺️
                                        </div>
                                        <h2 className="text-white text-4xl font-bold">Ver Mapa Interactivo</h2>
                                        <p className="text-white text-xl">Haz clic para explorar el campus completo</p>
                                        <div className="flex gap-4 justify-center text-white text-sm mt-6">
                                            <span className="flex items-center gap-2">
                                                <span className="text-2xl">📍</span>
                                                Ubicaciones
                                            </span>
                                            <span className="flex items-center gap-2">
                                                <span className="text-2xl">🚍</span>
                                                Rutas
                                            </span>
                                        </div>
                                        <button className="bg-red-700 text-white px-8 py-3 rounded-2xl shadow-lg hover:bg-red-800 hover:scale-110 transition-transform duration-200 mt-4">
                                            Abrir Mapa Completo
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Cards de características */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-3 text-center">🏫</div>
                            <h3 className="text-xl font-bold text-blue-950 text-center mb-2">Edificios y Aulas</h3>
                            <p className="text-gray-600 text-center">Encuentra fácilmente todas las aulas y edificios del campus</p>
                        </div>
                        
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-3 text-center">📍</div>
                            <h3 className="text-xl font-bold text-blue-950 text-center mb-2">Tu Ubicación</h3>
                            <p className="text-gray-600 text-center">Navega desde tu posición actual hacia cualquier destino</p>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-4">
                    <div className="container mx-auto relative mt-6">
                        <div className='text-red-800 border-2' />
                        <br />
                        <h1 className="text-blue-950 text-3xl relative w-50 text-center mx-auto font-semibold">SOBRE NOSOTROS</h1> 
                    </div>
                    <div className="my-5 flex flex-col items-center sm:flex-row sm:justify-around sm:items-center">
                        <div className="font-serif text-[20px]">
                            <p>ESFOTgo es una aplicación de geolocalización creada por y para estudiantes de la ESFOT. <br />
                        Que brinda ayuda en la ubicación de aulas, laboratorios, oficinas y otros puntos clave del campus, <br />
                        facilitando la movilidad con información útil y actualizada.</p>
                        </div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-H9Cj8K_FHrmlPd1p99NGxIGnvOg09zRnw&s" alt="esfot_dragon" className="w-[200px] h-[200px]"/>
                    </div>
                </section>
                <section>
                    <div className="container mx-auto relative mt-8">
                        <div className='text-red-800 border-2' />
                        <br />
                        <h1 className="text-blue-950 text-3xl relative w-50 text-center mx-auto font-semibold">EVENTOS</h1> 
                    </div>
                </section>
            </body>
        </>
    )
}