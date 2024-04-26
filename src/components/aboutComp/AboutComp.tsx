import styles from './_AboutComp.module.scss'
import { useSelector } from 'react-redux';
import { selectMoonState } from '../../redux/slices/moonSlice';
import { selectLangState } from '../../redux/slices/langSlice';
import ProfileImg from '../../assets/images/profile/Profile.jpg'
import SliderComp from '../sliderComp/SliderComp';


const AboutComp = () => {
  
  const moonState = useSelector(selectMoonState);

  const containerColor = `${styles.container} ${moonState.moon ? styles.containerWhite : ''}`;

  const langState = useSelector(selectLangState).lang;

  return (
    <div className={containerColor}>
        <SliderComp/>
        {/* Comment */}
        <div className={styles.commentContainer}>
          <p className={styles.comment}>
            {langState === 'es' ?
            'Dedicación, compromiso, esfuerzo, responsabilidad, comunicación y colaboración pienso que son cualidades indispensables para alcanzar cualquier objetivo.' :
            'Dedication, commitment, effort, responsibility, communication and collaboration I think are essential qualities to achieve any goal.'
          }
            </p>
            </div>

        {/* Main data container */}
        <div className={styles.dataContainer}>
          <img
              src={ProfileImg}
              className={styles.profileImg}
          />
          <div className={styles.data}>
            <h4 className={styles.about}>
              {langState === 'es' ? "Sobre mí" : "About me"}
            </h4>
            <p
              className={styles.text}
            >
              {langState === 'es' ? 
                'Mi nombre es Jorge Acosta, vivo en la Provincia de San Juan, Argentina, tengo 50 años. En cuanto a lo laboral, comencé a buscar una alternativa con la que me sintiera más a gusto, me hablaron sobre programación y me interesó mucho, ya que siempre me sentí cómodo trabajando con una computadora. Empecé de forma autodidacta, hasta que decidí inscribirme en el bootcamp de SoyHenry que consta de 800 horas de trabajo teórico-práctico, en el cual realicé un proyecto individual y participé de uno grupal. Las tecnologías usadas incluyen HTML, CSS, Javascript, Typescript, React, Redux, NodeJS, Express, Sequelize y Postgres.' 
                : 'My name is Jorge Acosta, I live in the Province of San Juan, Argentina, I am 50 years old. As for work, I started looking for an alternative that I felt more comfortable with, they talked to me about programming and I was very interested, since I always felt comfortable working with a computer. I started self-taught, until I decided to enroll in the SoyHenry bootcamp, which consists of 800 hours of theoretical-practical work, in which I carried out an individual project and participated in a group project. The technologies used include HTML, CSS, Javascript, Typescript, React, Redux, NodeJS, Express, Sequelize and Postgres.'}
            </p>
            <p
              className={styles.text}
            >
              {langState === 'es' ? 
                'En mi juventud cursé la carrera de Lic. administración de empresas, llegando a aprobar las materias de tercer año.' 
                : 'In my youth I studied a degree in business administration, passing the third year subjects.'}
            </p>
            <p
              className={styles.text}
            >
              {langState === 'es' ? 
                'Mi objetivo a corto plazo es encontrar la posibilidad de aplicar mis conocimientos como aporte a una empresa, me gustaría formar parte de un equipo de trabajo con el cual interactuar y crecer en el desarrollo de mis conocimientos y habilidades.' 
                : 'My short-term goal is to find the possibility of applying my knowledge as a contribution to a company. I would like to be part of a work team with which I can interact and grow in the development of my knowledge and skills.'}
            </p>
            <p
              className={styles.text}
            >
              {langState === 'es' ? 
                'En lo personal, soy divorciado, con dos hijos adolescentes, siempre me gustó la actividad física, y la música como hobby.' 
                : 'Personally, I am divorced, with two teenage children, I always liked physical activity, and music as a hobby.'}
            </p>
          </div>
        </div>
    </div>
  );
}

export default AboutComp;