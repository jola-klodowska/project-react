import clsx from 'clsx'
import styles from './Card.module.scss'
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = props => {
    const cardId = props.id;
    const cardFavorite = props.isFavorite

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(cardId, cardFavorite))
    }

    const remove = e => {
        e.preventDefault();
        dispatch(removeCard(cardId))
    }

    return (
        <li className={styles.card}>{props.title}
            <div>
                <button onClick={handleSubmit} className={clsx(props.isFavorite === true && styles.active)}>
                    <i className={styles.icon + " fa fa-star-o"}></i>
                </button>
                <button onClick={remove}>
                    <i className={styles.icon + " fa fa-trash"}></i>
                </button>
            </div>
        </li>
    );
};

export default Card