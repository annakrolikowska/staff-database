import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../../redux/actions/pagination.action";
import '../../styles/components/Pagination.css';

const Pagination = () => {
    const currentPage = useSelector(state => state.paginationReducer.currentPage);
    const maxPageNum = useSelector(state => state.paginationReducer.maxPageNum);

    const dispatch = useDispatch();

    const handleChangePage = (columnNumber) => {
        dispatch(setCurrentPage(columnNumber));
    };

    const renderPaginationButtons = () => {
        const paginationButtons = [];

        for (let i = 1; i <= maxPageNum; i++) {
            const isActive = i === currentPage;
            const buttonClass = isActive ? 'pagination__button pagination__button--active' : 'pagination__button';

            paginationButtons.push(
                <button
                    key={i}
                    className={buttonClass}
                    onClick={()=>handleChangePage(i)}
                >
                    {i}
                </button>
            );
        }
        return paginationButtons;
    };

    return (
        <div className="pagination">

            {renderPaginationButtons()}
        </div>
    );
}

export default Pagination;