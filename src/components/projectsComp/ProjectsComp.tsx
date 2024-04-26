import styles from './_ProjectsComp.module.scss'
import { useSelector } from 'react-redux';
import { selectMoonState } from '../../redux/slices/moonSlice';
import { selectLangState } from '../../redux/slices/langSlice';
// import { NavLink } from 'react-router-dom';
import triarLogo from '../../assets/images/logos&Brands/TriarLogo.png'
import exploserviceLogoBrandWhite from '../../assets/images/projects/Exploservice-Logo-Brand-white.png'
import exploserviceLogoBrandBlack from '../../assets/images/projects/Exploservice-Logo-Brand-black.png'
import craftBeerLogo from '../../assets/images/logos&Brands/craftBeerLogo.jpg'
import videogamesImage from '../../assets/images/logos&Brands/Videogames.png'
import SliderComp from '../sliderComp/SliderComp';


const ProjectsComp = () => {

  const moonState = useSelector(selectMoonState).moon;

  const containerColor = `${styles.container} ${moonState ? styles.containerWhite : ''}`;

  const projectWhite = `${styles.project} ${moonState ? styles.projectWhite : ''}`;

  const langState = useSelector(selectLangState).lang;

  return (
    <div className={containerColor}>
        <SliderComp/>
           {/* Projects */}
        <ul className={styles.projectsContainer}>
            <li
              key="1"
              className={projectWhite}
            >
              <img
                src={triarLogo}
                alt="Triar Logo"
              />
              <div className={styles.projectTitleContainer}>
                <h5 className={styles.projectTitle}>
                    {langState === 'es' ?
                    'Clínica Kinesiológica Triar' :
                    'Triar Kinesiology Clinic'}
                </h5>
                <h5 className={styles.projectTitle}>
                    {langState === 'es' ?
                    '(En proceso)' :
                    '(In progress)'}
                </h5>
              </div>
              <p
                className={styles.projectDescription}
              >
                {langState === 'es' ?
                'Aplicación para una clínica kinesiológica, desarrollada de forma individual en modo freelance, la que debe mostrar aspectos de ésta como instalaciones, especialidades, personal, etc., y funcionalidades como el manejo del sistema de turnos, registro de historias clínicas y chats privados entre profesionales y pacientes.' :
                'Application for a kinesiology clinic, developed individually in freelance mode, which must show aspects of it such as facilities, specialties, staff, etc., and functionalities such as management of the shift system, registration of clinical histories and private chats between professionals and patients.'}
              </p>
              <div className={styles.linksContainer}>
                <a
                  className={styles.link}
                  href="https://triar.netlify.app/"
                  target="_blank"
                >
                  {langState === 'es' ?
                  'Ir al sitio web':
                  'Go to the web site'}
                </a>
                {/* <NavLink
                  className={styles.link}
                  to="/triar"
                >
                  {langState === 'es' ?
                  'Más sobre el sitio':
                  'More about the site'}
                </NavLink> */}
              </div>
            </li>
            <li
              key="2"
              className={projectWhite}
            >
              <img
                src={moonState ? exploserviceLogoBrandBlack : exploserviceLogoBrandWhite}
                alt="Exploservice Logo"
              />
              <div className={styles.projectTitleContainer}>
                <h5 className={styles.projectTitle}>
                    {langState === 'es' ?
                    'Empresa de servicios de perforación y voladura' :
                    'Drilling and blasting services company'}
                </h5>
                <h5 className={styles.projectTitle}>
                    {langState === 'es' ?
                    '(En proceso)' :
                    '(In progress)'}
                </h5>
              </div>
              <p
                className={styles.projectDescription}
              >
                {langState === 'es' ?
                'Aplicación para una empresa que presta servicios de perforación y voladura, desarrollada de forma individual en modo freelance,  la cual muestra aspectos de la empresa como instalaciones, servicios, equipos, algunos trabajos, y como funciones actualmente brinda menejo de almacenes, permitiendo el ingreso de artículos, locaciones y movimientos de artículos entre locaciones, próximamente brindará informes sobre inventarios y movimientos. Además va a permietir el registro de partes diarios de producción, con los informes correspondientes.' :
                'Application for a company that provides drilling and blasting services, developed individually in freelance mode, which shows aspects of the company such as facilities, services, equipment, some jobs, and as functions it currently provides warehouse management, allowing the entry of items, locations and movements of items between locations, will soon provide reports on inventories and movements. It will also allow the registration of daily production reports, with the corresponding reports.'}
              </p>
              <div className={styles.linksContainer}>
                <a
                  className={styles.link}
                  href="https://page-in-progress.netlify.app/"
                  target="_blank"
                >
                  {langState === 'es' ?
                  'Ir al sitio web':
                  'Go to the web site'}
                </a>
                {/* <NavLink
                  className={styles.link}
                  to="/exploservice-detail"
                >
                  {langState === 'es' ?
                  'Más sobre el sitio':
                  'More about the site'}
                </NavLink> */}
              </div>
            </li> 
            <li
              key="3"
              className={projectWhite}
            >
              <img
                src={craftBeerLogo}
                alt="CraftBeer Logo"
              />
              <div className={styles.projectTitleContainer}>
                <h5 className={styles.projectTitle}>
                    {langState === 'es' ?
                    'Ecommerce de cervezas artesanales' :
                    'Craft beer ecommerce'}
                </h5>
                <h5 className={styles.projectTitle}>
                    {langState === 'es' ?
                    '(Aplicación académica de equipo)' :
                    '(Academic team application)'}
                </h5>
              </div>
              <p
                className={styles.projectDescription}
              >
                {langState === 'es' ?
                'Ecommerce de cervezas artesanales en el que puden registrarse tanto vendedores como compradores, incluye realizar operaciones de compra venta, pasarela de pagos, filtros de búsqueda, carrito de compras, manejo de stocks de productos, consultas de historiales de compra y venta, además de autenticación y autorización de roles.' :
                'Craft beer ecommerce in which both sellers and buyers can register, includes carrying out purchase and sale operations, payment gateway, search filters, shopping cart, product stock management, purchase and sale history queries, as well as authentication and role authorization.'}
              </p>
              <div className={styles.linksContainer}>
                <a
                  className={styles.link}
                  href="https://craftbeershop.vercel.app/"
                  target="_blank"
                >
                  {langState === 'es' ?
                  'Ir al sitio web':
                  'Go to the web site'}
                </a>
                {/* <NavLink
                  className={styles.link}
                  to="/craftbeer-detail"
                >
                  {langState === 'es' ?
                  'Más sobre el sitio':
                  'More about the site'}
                </NavLink> */}
              </div>
            </li>
            <li
              key="4"
              className={projectWhite}
            >
              <img
                src={videogamesImage}
                alt="Videogames Logo"
              />
              <div className={styles.projectTitleContainer}>
                <h5 className={styles.projectTitle}>
                    {langState === 'es' ?
                    'Aplicación de carga y búsqueda de videojuegos' :
                    'Video game loading and searching application'}
                </h5>
                <h5 className={styles.projectTitle}>
                    {langState === 'es' ?
                    '(Aplicación académica individual)' :
                    '(Individual academic application)'}
                </h5>
              </div>
              <p
                className={styles.projectDescription}
              >
                {langState === 'es' ?
                'Aplicación individual integradora del bootcamp SoyHenry, la que trabaja con una base de datos local y con datos de una API externa, permite filtrar y ordenar los videogames y cargar nuevos a la base de datos.' :
                'Individual application integrating the SoyHenry bootcamp, which works with a local database and with data from an external API, allows you to filter and sort the video games and upload new ones to the database.'}
              </p>
              <div className={styles.linksContainer}>
                <a
                  className={styles.link}
                  href="https://videogames-pi.netlify.app/"
                  target="_blank"
                >
                  {langState === 'es' ?
                  'Ir al sitio web':
                  'Go to the web site'}
                </a>
                {/* <NavLink
                  className={styles.link}
                  to="/videogames-detail"
                >
                  {langState === 'es' ?
                  'Más sobre el sitio':
                  'More about the site'}
                </NavLink> */}
              </div>
            </li>
        </ul>
    </div>
  )
}

export default ProjectsComp
