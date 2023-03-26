import styles from '@/styles/Home.module.css'
import Logo from './Logo';

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
                   <Logo/>
                </div>
        </div>
    )

}

export default Footer;