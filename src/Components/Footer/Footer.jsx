import React from 'react'
import styles from './Footer.module.scss';
import { AiOutlineTwitter, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';
import { BiLogoFacebook, BiLogoTelegram } from 'react-icons/bi';
import { SlSocialVkontakte } from 'react-icons/sl';

import { IconContext } from "react-icons";
const Footer = () => {
    return (
        <footer className='container m-auto  px-[1.0625rem] mt-[10.375rem]'>
            <div className=" flex sm:justify-around sm:flex-row flex-col gap-y-[1.25rem]">
                <div className="sm:self-end">
                    <ul className={styles.menuFooter}>
                        <li><a href="t">Terms & Conditions</a></li>
                        <li><a href="t">Cookies</a></li>
                        <li><a href="t">Contacts</a></li>
                        <li><a href="t">Careers</a></li>
                        <li><a href="t">Brand Guide</a></li>

                    </ul>
                </div>
                <div className="flex flex-col gap-y-[.875rem]">
                    <p className={styles.text}>Our social media:</p>
                    <div className={styles.iconItems}>
                        <div className={styles.footerItem}>< AiOutlineTwitter /></div>
                        <div className={styles.footerItem}><BiLogoFacebook /></div>
                        <div className={styles.footerItem}><AiOutlineInstagram /></div>
                        <div className={styles.footerItem}><AiFillYoutube /></div>
                        <div className={styles.footerItem}><BiLogoTelegram /></div>
                        <div className={styles.footerItem}><SlSocialVkontakte /></div>

                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer