import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import LogoImage1 from '../images/SpcUniLogo-13.svg'
const Logo = ()=>
{
    return (
        <span className={styles.logo}>

            <Image  
             className={styles.logoStroke}
             src={LogoImage1}
             />
            
        </span>
    )
}

export default Logo;