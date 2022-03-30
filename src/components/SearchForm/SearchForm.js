import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { toUpdateSearchPhrase } from '../../redux/searchPhraseRedux';

const SearchForm = () => {

    useEffect(() => {
        dispatch(toUpdateSearchPhrase(''));
    },[]);

    const [searchPhrase, setSearchPhrase] = useState('');

    const dispatch = useDispatch();

    const updateSearchPhrase = e => {
        e.preventDefault();
        dispatch(toUpdateSearchPhrase(searchPhrase));
    };

    return (
        <form className={styles.searchForm}>
            <TextInput placeholder="Search..." onChange={e => setSearchPhrase(e.target.value)}/>
            <Button onClick={updateSearchPhrase}>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;