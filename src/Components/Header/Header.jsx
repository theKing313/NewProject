import React, { useState } from 'react'
import planet from '../../images/iconLan.svg'
import styles from './Header.module.scss'
const Header = ({ menuActive, setMenuActive }) => {

    const [languages, setLanguages] = useState('RU')
    const handleClickLan = () => {
        setLanguages((prev) => prev === 'RU' ? 'EN' : 'RU')
    }
    return (
        <>
            <header className="absolute left-0 top-0 w-full">
                <div className="header__wrapper">
                    <div className="absolute left-0 top-0 w-full ">
                        {/* <img src={main} alt="" className='w-full h-full object-cover' />  */}
                    </div>
                    <div className="container m-auto px-[1.0625rem] relative z-50 ">
                        <div className="mt-4 sm:min-h-[6rem] min-h-[3.5rem] rounded-full bg-[#110A1D] border-solid  border-2 border-[#9dadf2] px-[.875rem] sm:px-12 relative text-white flex items-center sm:justify-between justify-end  ">
                            <a href="Home" className=' uppercase font-normal text-xl sm:block hidden'>Logo</a>
                            <nav className={menuActive ? "menu flex justify-center sm:items-center" : 'menu active flex justify-center  '}>
                                <ul className={menuActive ? 'flex flex-col sm:flex-row w-full  sm:gap-10 sm:flex-wrap sm:py-5 gap-y-[.3125rem]' : 'flex flex-col gap-y-[.3125rem] w-full'}>
                                    <li><a href="/Aboutus" className={styles.itemLink} >About us</a></li>
                                    <li><a href="/Brands" className={styles.itemLink}>Brands</a></li>
                                    <li><a href="/Commissions" className={styles.itemLink}>Commissions</a></li>
                                    <li><a href="/News" className={styles.itemLink}>News</a></li>
                                    <li><a href="/Contactus" className={styles.itemLink}>Contact us</a></li>
                                    <li><a href="/Careers" className={styles.itemLink}>Careers</a></li>
                                    <div className="sm:hidden flex flex-col gap-y-[.3125rem] mt-[1.875rem]">
                                        <button className='flex items-center justify-center rounded-full border-solid w-full h-[3rem]  border-2 text-[#F0F0F0]  border-[#9dadf2] font-sans uppercase font-normal text-sm'> LOG IN</button>
                                        <button className='flex items-center w-full h-[3rem] bg-[#478BF9] justify-center  rounded-full font-sans uppercase font-normal text-sm'> SIGN UP</button>
                                    </div>
                                </ul>

                            </nav>

                            <div className="relative z-50">
                                <div className="sm:flex hidden  flex-wrap gap-x-[.875rem]">
                                    <button className='flex items-center justify-center gap-x-2 rounded-full border-solid w-[4.6875rem] h-[3rem]  border-2 text-[#F0F0F0]  border-[#9dadf2] font-sans uppercase font-normal text-sm' onClick={handleClickLan}><img src={planet} alt="icon" />  {languages}</button>
                                    <button className='flex items-center justify-center rounded-full border-solid w-[4.6875rem] h-[3rem]  border-2 text-[#F0F0F0]  border-[#9dadf2] font-sans uppercase font-normal text-sm'> LOG IN</button>
                                    <button className='flex items-center w-[6.0625rem] bg-[#478BF9] justify-center  rounded-full font-sans uppercase font-normal text-sm'> SIGN UP</button>
                                </div>
                                <button className='sm:hidden  flex items-center justify-center  rounded-full border-solid w-[2.25rem] h-[2.25rem]  border-2 text-[#F0F0F0]  border-[#9dadf2] font-sans uppercase font-normal text-sm'><img src={planet} alt="icon" /> </button>
                            </div>
                            <div className="relative z-50 h-[.875rem] p-1 w-[1.375rem] flex flex-col items-center text-center ml-[.5rem] sm:hidden" onClick={() => setMenuActive(!menuActive)}>
                                <span className='h-0.5 bg-white w-full absolute left-0 top-0'></span>
                                <span className='h-0.5 bg-white w-full absolute left-0 top-1/2 translate-y-[-50%]'></span>
                                <span className='h-0.5 bg-white w-full absolute left-0 bottom-0'></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <div className={menuActive ? 'main relative mt-[9.8125rem] z-40' : 'main relative active'}>
                <div className="container m-0">
                    <div className="body text-white flex ">
                        <div className="lg:flex-[0_1_40rem] flex flex-col gap-14">
                            <h1 className=" body__title font-sans uppercase text-7xl font-normal">
                                Leaving the earth
                            </h1>
                            <p className='body__text text-3xl font-normal font-sans'>
                                Ecape Earth's Dangers and Start Anew: Launch Your Own Space Rocket for a Chance at a Thrilling Life Beyond Our Atmosphere
                            </p>
                            <button className='body__button rounded-[6.875rem] border-solid border-white border-[.0625rem] flex-[0_1_75px] w-[31.125rem] bg-[#ED751E] self-start font-bold text-3xl font-sans'>Buy your apace rocket now</button>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Header