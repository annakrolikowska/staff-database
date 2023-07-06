import React from 'react';
import SortContainer from './SortContainer';

const TableHeader = () => {

    const headers = [
        {column_name: "First name", field_name: "firstName"},
        {column_name: "Last name", field_name: "lastName"},
        {column_name: "Date of Birth", field_name: "dateOfBirth"},
        {column_name: "Function", field_name: "function"},
        {column_name: "Experience", field_name: "experience"}]
    return (
    <thead>
        <tr>
            {headers.map((item) => (

                <th key={item.column_name}>
                    <div className='table__th-container'>{item.column_name}<SortContainer name={item.field_name}/></div>
                </th>

            ))}
        </tr>
    </thead>);
};

export default TableHeader;