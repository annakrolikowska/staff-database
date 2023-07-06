import React from 'react';
import '../../styles/components/Table.css';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import Pagination from "./Pagination";

const Table = () => {

    return (
        <section className="table"> 
            <div className="table__container">
                <table>
                    <TableHeader/>
                    <TableBody/>
                </table>
            </div>
            <Pagination/>
        </section>
    );
}

export default Table;