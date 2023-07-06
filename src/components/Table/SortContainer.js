import React from 'react';
import '../../styles/components/SortContainer.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFilter} from '@fortawesome/free-solid-svg-icons'
import {faAngleUp} from '@fortawesome/free-solid-svg-icons'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from "react-redux";
import {setSorting} from "../../redux/actions/sorting.actions";

const SortContainer = (props) => {

    const activeColumn = useSelector(state => state.sortingReducer.column);
    const sortDirection = useSelector(state => state.sortingReducer.direction);

    const dispatch = useDispatch();

    const handleSort = (column) => {
        dispatch(setSorting(column));
    };

    return (
        <>
            {activeColumn === props.name && <div className="sort">
                <button onClick={() => handleSort(props.name)} className='sort__button sort__button--arrow'>
                    {sortDirection === 'asc' && <FontAwesomeIcon icon={faAngleUp}/>}
                    {sortDirection === 'desc' && <FontAwesomeIcon icon={faAngleDown}/>}
                </button>
            </div>}
            {(activeColumn === null || activeColumn !== props.name) && <div className="sort">
                <button onClick={() => handleSort(props.name)} className='sort__button sort__button--filter'>
                    <FontAwesomeIcon icon={faFilter}/>
                </button>
            </div>}
        </>
    );
}

export default SortContainer;