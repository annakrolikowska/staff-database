import React from 'react';

const SearchInput = props => {
    const {name, type, label,onChange} = props;
    return (
        <label>
            <input name={name} onChange={onChange} type={type} placeholder='&nbsp;'/>
            <span className="header__search-label">{label}</span>
        </label>
    );
}

export default SearchInput;