import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowForward from '@mui/icons-material/ArrowForward';
import './PaginationControl.css';

const PaginationControl = ({ onPageChange, onPreviousPageClick, onNextPageClick, pageIndex, selectedPageSize, disablePrevious, disableNext }) => {
    return <div className="table-pagination">
        <select onChange={onPageChange} defaultValue={selectedPageSize}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
            <option value={25}>25</option>
        </select>
        <div>
            <button onClick={onPreviousPageClick} disabled={disablePrevious}>
                <ArrowBack />
            </button>
            <span>{pageIndex}</span>
            <button onClick={onNextPageClick} disabled={disableNext}>
                <ArrowForward />
            </button>
        </div>
    </div>;
}

export default PaginationControl; 