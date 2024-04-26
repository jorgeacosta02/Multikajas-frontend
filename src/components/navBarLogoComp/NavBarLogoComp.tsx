import styles from './_NavBarLogoComp.module.scss';
import { useState } from 'react';
import { selectLangState } from '../../redux/slices/langSlice';
import { useSelector } from 'react-redux';


const NavBarLogoComp = () => {

    const [animationComplete, setAnimationComplete] = useState(false);

    const onAnimationEnd = () => {
        setAnimationComplete(true);
    };

    const langState = useSelector(selectLangState).lang;

    return (
        <div className={styles.container}>
            <h3 className={`${styles.logo} ${animationComplete && styles.animationComplete}`} onAnimationEnd={onAnimationEnd}>
            {langState === 'es' ? 'Portafolio' : 'Portfolio'}
            </h3>
        </div>
    );
}

export default NavBarLogoComp;