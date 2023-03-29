import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import LogoImage from '../images/SpcUniLogo-12.svg'

const Footer = ()=>{

    return (
        <div className={styles.footer} id="footer">
                <div>
                    <ul className={styles.verticalList}>
                    <li><a href="https://twitter.com/SpaceUni_Africa">Twitter</a></li>
                    <li><a href="https://www.instagram.com/spaceuniverse.africa">Instagram</a></li>
                    <li><a href="https://linkedin.com/company/spaceuniverse-africa">LinkedIn</a></li>
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