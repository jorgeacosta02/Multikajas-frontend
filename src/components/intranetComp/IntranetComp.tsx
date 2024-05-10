import styles from './_IntranetComp.module.scss'
import { NavLink } from 'react-router-dom'

const IntranetComp = () => {
  return (
    <div className={styles.container}>
        <div className={styles.backImgContainer}></div>
        <div className={styles.backImgCover}></div>
        <h3 className={styles.mainTitle}>
            Intranet
        </h3>
        <div className={styles.dataContainer}>
            <h4 className={styles.blockTitle}>
                Generar formulario de:
            </h4>
            <div className={styles.linksContainer}>
                <NavLink 
                    to='/article-up-form'
                    className={styles.link}
                >
                    Alta de artículo
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default IntranetComp