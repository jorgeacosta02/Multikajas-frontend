import styles from './_NavBarLogoComp.module.scss';
import { useState } from 'react';
import brand from '../../assets/images/logos&Brands/Multikajas-brand.png'


const NavBarLogoComp = () => {

    const [animationComplete, setAnimationComplete] = useState(false);

    const onAnimationEnd = () => {
        setAnimationComplete(true);
    };



    return (
        <div className={styles.container}>
            <img
                src={brand}
                alt="brand"
                className={`${styles.logo} ${animationComplete && styles.animationComplete}`} 
                onAnimationEnd={onAnimationEnd}>
            
            </img>
        </div>
    );
}

export default NavBarLogoComp;