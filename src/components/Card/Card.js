import clsx from 'clsx'
import styles from './Card.module.scss'
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';

const Card = props => {

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const cardId = props.id;
        const cardFavorite = props.isFavorite
        dispatch(toggleCardFavorite( cardId, cardFavorite))
    }

    return (
        <li className={styles.card}>{props.title}
            <button onClick={handleSubmit} className={clsx(props.isFavorite === true && styles.active)}>
                <i className={styles.icon + " fa fa-star-o"}></i>
            </button>
        </li>
    );
};

export default Card