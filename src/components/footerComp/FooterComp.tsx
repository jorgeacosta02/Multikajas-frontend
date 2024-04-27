import styles from './_FooterComp.module.scss';

const FooterComp = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        {/* Exploservice &reg; | Todos los derechos reservados | */}
        Diseño Web Jorge Acosta
      </p>
    </div>
  )
}

export default FooterComp
