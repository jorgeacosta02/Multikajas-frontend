import styles from './_MessageComp.module.scss'
import { useSelector } from 'react-redux'
import { selectMoonState } from '../../redux/slices/moonSlice'
import { useDispatch } from 'react-redux'
import { toggleMessage } from '../../redux/slices/messageSlice'
import { selectLangState } from '../../redux/slices/langSlice'


const MessageComp = (props:any) => {

    const langState = useSelector(selectLangState).lang

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch( toggleMessage() );
      };

    const moonState = useSelector(selectMoonState).moon;
    const containerColor = `${styles.container} ${moonState ? styles.containerWhite : ''}`;

    const message = props.data;

    return (
        <div className={containerColor}>
            <div className={styles.dataContainer}>
                <p className={styles.text}>
                    {message}
                </p>
                <button
                    className={styles.accept}
                    onClick={handleClick}
                >
                    {langState === 'es' ? 'Aceptar' : 'Accept'}
                </button>
            </div>
        </div>
    )
}

export default MessageComp
