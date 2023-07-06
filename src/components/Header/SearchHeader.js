import React from 'react';
import '../../styles/components/SearchHeader.css';
import SearchInput from './SearchInput';
import {useDispatch} from "react-redux";
import {
    setDateOfBirthFilter,
    setExperienceFilter,
    setFirstNameFilter,
    setFunctionFilter,
    setLastNameFilter
} from "../../redux/actions/filters.action";

const SearchHeader = () => {
    const dispatch = useDispatch();

    const handleInputChange = (filterAction) => (e) => {
        e.preventDefault()
        dispatch(filterAction(e.target.value));
    };

    return (
        <header className='header'>
            <h1>The <span>Beauty and the Beast</span> castle employees</h1>
            <div className='header__search-container'>
                <SearchInput label={"First Name"} onChange={handleInputChange(setFirstNameFilter)}/>
                <SearchInput label={"Last Name"} onChange={handleInputChange(setLastNameFilter)}/>
                <SearchInput label={"Date of birth"} type='date' onChange={handleInputChange(setDateOfBirthFilter)}/>
                <SearchInput label={"Function"} onChange={handleInputChange(setFunctionFilter)}/>
                <SearchInput label={"Experience"} type='number' onChange={handleInputChange(setExperienceFilter)}/>
            </div>
        </header>
    );
}

export default SearchHeader;


