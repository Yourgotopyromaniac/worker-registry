import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import Rocket from '../images/rocket.gif'
import Rocket2 from '../images/rocket2.gif'




const Hero = ()=>{

    return (
        <>
        <div className={styles.hero}>   
            <h1>Looking for someone from <span style={{color : "#0171bb"}}>Space Universe?</span> You&apos;ve come to the right place!</h1>
        </div>
        
        <Image
        className={styles.rocket}
        width={80}
        height={80}
        src={Rocket}
        alt="rocket spinning"
        />

        <Image
        className={styles.rocket2}
        width={80}
        height={80}
        src={Rocket2}
        alt="rocket flying"
        />
        </>
    )

}

export default Hero;