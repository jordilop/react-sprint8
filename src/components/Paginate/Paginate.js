import "./styles.css";

function Paginate({ itemsPerPage, totalItems, paginate, currentPage, prevPage, nextPage }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className="pagination">
            <li onClick={prevPage} className="page-number">
                Prev
            </li>
            {pageNumbers.map(number =>
                <li key={number} onClick={() => paginate(number)} className={"page-number " + (number === currentPage ? "active" : "")}>
                    {number}
                </li>)}
            <li onClick={nextPage} className="page-number">
                Next
            </li>
        </ul>
    );
}

export default Paginate;