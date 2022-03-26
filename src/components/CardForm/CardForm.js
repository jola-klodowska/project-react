import styles from './CardForm.module.scss'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const CardForm = props => {
    const [title, setTitle] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const columnId = props.columnId;
        dispatch({ type: 'ADD_CARD', payload: { title, columnId } });
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit} className={styles.cardForm}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
    );
};

export default CardForm;