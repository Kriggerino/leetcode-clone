import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
type authPageProps = {
    
};

const index:React.FC<authPageProps> = () => {
    
    return <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
                <div className='max-w-7xl mx-auto'>
                    <Navbar/>
                    <div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none'>
                        <img src='/hero.png' alt='hero img' />
                    </div>
                </div>
        </div>
}
export default index;