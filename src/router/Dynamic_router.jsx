import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Mydata } from '../Data';
import { Link } from 'react-router-dom';

function Dynamic_router() {
    const [openTrailer, setOpenTrailer] = useState(false); // <-- ADD THIS

    const { id } = useParams();
    const items = Mydata.find((item) => item.id === parseInt(id));
    if (!items) return <h1>Not found</h1>

    return (
        <div className='w-full'>
            <div className='bg-black'>
                <Link to={`/${items.id}`}>
                    <section
                        className="relative bg-cover bg-center bg-no-repeat text-white opacity-70 w-full h-[90vh]"
                        style={{ backgroundImage: `url(${items.img})` }}
                    >
                        <img src="" className="w-full h-full object-cover opacity-70" />

                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent flex flex-col justify-center px-10">
                            <h1 className="text-2xl md:text-5xl font-bold max-w-xl leading-tight">
                                {items.title}
                            </h1>

                            <p className="mt-4 text-lg max-w-md opacity-80">
                                {items.desc}
                            </p>

                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTrailer(true);
                                }}
                                className="mt-6 bg-red-600 cursor-pointer md:w-[200px] px-4 py-2 w-[140px] rounded-lg text-lg font-semibold hover:bg-red-700 transition"
                            >
                                Play Now
                            </button>
                        </div>
                    </section>


                    {/* ---------------- Trailer Modal ---------------- */}
                    {openTrailer && (
                        <div>

                            <div className="fixed inset-0 bg-black/70 bg-opacity-80 flex justify-center items-center z-50">
                                <div className="bg-black p-4 rounded-lg w-[90%] md:w-[60%]">

                                    <iframe
                                        className="w-full h-[300px] md:h-[400px]"
                                        src={items.video}
                                        title="Trailer"
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen
                                    ></iframe>

                                    <button
                                        onClick={() => setOpenTrailer(false)}
                                        className="mt-4 bg-red-600 w-full py-2 rounded-lg text-lg font-semibold hover:bg-red-700"
                                    >
                                        Close Trailer
                                    </button>
                                </div>
                            </div>

                        </div>
                    )}
                </Link>
            </div>
        </div>
    )
}

export default Dynamic_router;
