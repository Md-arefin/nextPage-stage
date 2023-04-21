import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { Player, Controls } from '@lottiefiles/react-lottie-player';



const Home = () => {
    return (
        <div className='lg:flex gap my-8 px-6 py-6 lg:px-8 sm:max-w-xl md:max-w-full lg:max:w-screen-xl'>
            <div className='mx-auto max-w-lg'>
                <div className="badge badge-secondary my-3">On sale!</div>

                <div>
                    <h1 className='text-4xl font-bold'>A reader lives a <br />
                        thousand lives
                        <span className='text-blue-400'> before he dies</span>
                    </h1>

                    <p className='my-5 text-gray-700 '>
                        Books are a uniquely portable magic. Books serve to show a man that those original thoughts of his aren’t very new after all. The man who does not read good books is no better than the man who can’t.
                    </p>
                </div>
                <div className='flex flex-col items-center md:flex-row'>
                    <Link to='/books' className='btn md:w-auto md:mr-4'>
                        <div className='inline-flex items-center justify-center w-full h-full'>
                            <p className="mr-3">Visit Store</p>
                            <ShoppingCartIcon className='w-5 text-gray-500' />
                        </div>
                    </Link>

                    <Link to='/about' className='inline-flex items-center just font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700'>
                        Learn More
                    </Link >
                </div>
            </div>
            {/* Lottie Animation */}
            <div className='relative lg:w-1/2'>
            <div className='w-full lg:w-4/5 lg:ml-auto h-56 sm:h-96'>
                <Player
                    autoplay
                    loop
                    src="https://assets1.lottiefiles.com/packages/lf20_4rq0nvpt.json"
                >
                    <Controls visible={!true} buttons={['play', 'repeat', 'frame', 'debug']} />
                </Player>
            </div>
            </div>
        </div>
    );
};

export default Home;