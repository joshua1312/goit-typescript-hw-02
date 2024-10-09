import toast, { Toaster } from 'react-hot-toast';
import { IoMdSearch } from 'react-icons/io';
import css from './SearchBar.module.css';
import React, { FormEvent } from 'react';
import { HandleSearch } from '../App/App.types';

interface SearchBarProps {
    onSubmit: HandleSearch;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const searchBar = (
            form.elements.namedItem('query') as HTMLInputElement
        ).value.trim();

        if (searchBar === '') {
            toast.error('Please add a query.');
            return;
        }
        onSubmit(searchBar);
        form.reset();
    };

    return (
        <header className={css.header}>
            <form className={css.formSearchBar} onSubmit={handleSubmit}>
                <input
                    className={css.formSearchInput}
                    type="text"
                    name="query"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button className={css.formSearchBtn} type="submit">
                    <IoMdSearch size="20" />
                </button>
                <Toaster position="top-right" reverseOrder={false} />
            </form>
        </header>
    );
};

export default SearchBar;