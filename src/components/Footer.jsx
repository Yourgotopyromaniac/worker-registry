import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import LogoImage from '../images/SpcUniLogo-12.svg'

const Footer = ()=>{

    return (
        <div className={styles.footer} id="footer">
                <div>
                    <ul className={styles.verticalList}>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                    </ul>
                    <span>© 2023 Space Universe Africa | All rights reserved.</span>
                </div>

                <div>
                   <Image
                   src={LogoImage}
                   alt="company logo"
                   />
                </div>
        </div>
    )

}

export default Footer;