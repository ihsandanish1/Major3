import React, { useState } from 'react';
import GLBViewer from './GLBViewer';
// import padlock from '../public/padlock.png';
import logoFull from '../public/logo-full.png';
// import set1 from '../public/set1.glb';
// import set2 from '../public/set2.glb';
// import set3 from '../public/set3.glb';
import PowerIcon from './Icons/PowerIcon';
import ShopIcon from './Icons/ShopIcon';
import MenuIcon from './Icons/MenuIcon';

const Restricted = () => {
    const [password, setPassword] = useState('');
    const [isAuthenticated,
        setIsAuthenticated] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [isCollectionHovered, setIsCollectionHovered] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Handle password submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === 'Majorszn') {
            setIsAuthenticated(true);
            setErrorMessage('');
        } else {
            setErrorMessage('Invalid password. Please try again.');
        }
    };

    return (

        // <div className="min-h-screen z-0 overflow-hidden relative bg-[#181818] text-[#F0F0F0] flex flex-col items-center justify-center">
        <div className="min-h-screen z-0 overflow-hidden relative bg-white text-[#F0F0F0] flex flex-col items-center justify-center">

            {!isAuthenticated ? (
                <div className="w-full max-w-md p-8 space-y-8 bg-[#242424] border-[#3F3F3F] rounded-lg shadow-lg">
                    <div className="flex flex-col items-center justify-center">
                        <div className="relative mb-6">
                            {/* <img src={padlock} alt='lock' className='w-[175px] h-[175px]' /> */}
                            <img src="/padlock.png" alt="padlock" />

                        </div>
                        <h1 className="text-2xl font-bold text-center mb-8">YOU DO NOT HAVE THE XP</h1>
                        <form onSubmit={handleSubmit} className="w-full space-y-4">
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium mb-2">Enter Access Code</label>
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2 bg-[#181818] border border-[#B0B0B0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#DF3844]"
                                    placeholder="Enter access code"
                                />
                            </div>
                            {errorMessage && (
                                <span className="text-red-400 text-sm">{errorMessage}</span>
                            )}
                            <button type="submit" className="w-full px-4 py-2 bg-[#E63946] hover:bg-[#DF3844] rounded-md transition-colors duration-300 cursor-pointer">
                                Unlock Access
                            </button>
                        </form>
                    </div>
                </div>
            ) : (
                <>
                    <div className="absolute inset-0 z-[-1] opacity-10 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url('major-world.png')` }}></div>
                    {/* <div className="absolute inset-0 z-[-1] opacity-10 bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url('major-world.png')` }}></div> */}



                    <nav className="shadow-md sticky top-0 bg-white w-full border-b border-gray-200 z-50">
                        <div className="w-full px-4">
                            <div className="flex justify-between">
                                <div className="flex space-x-4 justify-between w-full">

                                    <div className="hidden md:flex items-center justify-start space-x-1 w-1/3">
                                        <a href="#" className="py-5 px-3 text-black font-medium hover:text-[#e63946] border-b-2 border-[#e63946]">
                                            <MenuIcon width={24} height={24} fill="none" className="cursor-pointer hover:text-[#e63946]" stroke="currentColor" />
                                        </a>
                                        <div className="relative inline-block">
                                            <a href="#" onMouseEnter={() => setIsCollectionHovered(true)}
                                                onMouseLeave={() => setIsCollectionHovered(false)} className="py-5 px-3 text-black font-bold hover:text-[#e63946]">Collections</a>
                                            {isCollectionHovered && (
                                                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50"
                                                    onMouseEnter={() => setIsCollectionHovered(true)}
                                                    onMouseLeave={() => setIsCollectionHovered(false)}
                                                >
                                                    <a href="#" className="block px-4 py-2 text-black hover:text-[#e63946]">
                                                        Championship Icy Silver
                                                    </a>
                                                    <a href="#" className="block px-4 py-2 text-black hover:text-[#e63946]">
                                                        Championship Icy Blue
                                                    </a>
                                                    <a href="#" className="block px-4 py-2 text-black hover:text-[#e63946]">
                                                        Championship Royal Gold
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="w-full flex justify-start">
                                        <img src={logoFull} alt="major" className='w-[75px]' />
                                    </div>
                                    <div className="w-1/3 hidden md:flex items-center justify-end space-x-4">
                                        <PowerIcon onClick={() => setIsAuthenticated(false)} width={24} height={24} fill="none" className="cursor-pointer text-black hover:text-[#e63946]" stroke="currentColor" />
                                        <ShopIcon width={24} height={24} fill="none" className="cursor-pointer text-black hover:text-[#e63946]" stroke="currentColor" />
                                    </div>
                                </div>

                                <div className="md:hidden flex items-center">
                                    <button onClick={toggleMobileMenu} className="p-2 rounded-md hover:bg-gray-200 transition duration-200">
                                        <svg className="h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className={`mobile-menu md:hidden ${isMobileMenuOpen ? "" : "hidden"}`}>
                            <div className="py-2 px-4 border-t border-gray-200">
                                <button onClick={() => setIsAuthenticated(false)} className="block my-2 w-full px-4 py-2 bg-[#E63946] hover:bg-[#DF3844] rounded-md transition-colors duration-300 cursor-pointer text-white">Logout</button>
                            </div>
                        </div>
                    </nav>


                    {/* <div className='w-full'>
                        <header className="flex justify-center items-center mb-12 p-6">
                            <span>
                                <img src={logoFull} alt="major" className='w-[150px]' />
                            </span>
                        </header>
                    </div> */}
                    <div className="w-full flex justify-start">
                        <img src={logoFull} alt="major" className='w-[75px]' />
                    </div>


                    <div className="w-full p-6 mt-12 min-h-[85vh]">
                        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-[90%] mx-auto  ">
                            <div className="bg-[#242424] p-6 mb-6 rounded-lg shadow-lg">
                                <div className="w-full aspect-square bg-[#B0B0B0] rounded-lg flex items-center justify-center mb-4">
                                    <div className="w-3/4 h-3/4 rounded-md flex items-center justify-center text-lg font-bold">
                                        <GLBViewer modelPath={set1} scale={4}/>
                                    </div>
                                </div>
                                <h2 className="text-xl font-bold mb-2">Limited Edition Set</h2>
                                <p className="text-gray-400">Exclusive rotating collection item.</p>
                            </div>
                            <div className="bg-[#242424] p-6 mb-6 rounded-lg shadow-lg">
                                <div className="w-full aspect-square bg-[#B0B0B0] rounded-lg flex items-center justify-center mb-4">
                                    <div className="w-3/4 h-3/4  rounded-md flex items-center justify-center text-lg font-bold">
                                    <GLBViewer modelPath={set2} scale={4}/>
                                    </div>
                                </div>
                                <h2 className="text-xl font-bold mb-2">Premium Collection</h2>
                                <p className="text-gray-400">Limited availability rotating item.</p>
                            </div>

                            <div className="bg-[#242424] p-6 mb-6 rounded-lg shadow-lg">
                                <div className="w-full aspect-square bg-[#B0B0B0] rounded-lg flex items-center relative justify-center mb-4">
                                    <div className="w-3/4 h-3/4  rounded-md flex items-center justify-center text-lg font-bold ">
                                    <GLBViewer modelPath={set3} scale={4}/>
                                    </div>
                                    <div className='absolute top-0 left-0 w-full  rounded-md flex items-center justify-center bg-light'>
                                            <img src={padlock} className='w-full'/>
                                        </div>
                                </div>
                                <h2 className="text-xl font-bold mb-2">Premium Collection</h2>
                                <p className="text-gray-400">Limited availability rotating item.</p>
                            </div>
                        </div> */}
                    </div>
                </>
            )}
        </div>
    );
};

export default Restricted;