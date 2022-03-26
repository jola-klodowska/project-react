import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import shortid from 'shortid';


const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_COLUMN', newColumn: {id:shortId(), title, icon} });
        setTitle('');
        setIcon('');
    };



    return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <span className={styles.input}>Title</span><TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <span className={styles.input}>Icon:</span><TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
    );
};

export default ColumnForm;
