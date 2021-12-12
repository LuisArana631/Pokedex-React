import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { uiChangePage } from '../../actions/ui';
import './Pagination.css';

export const Pagination = () => {
    const { actualPage, totalPages } = useSelector( state => state.ui );
    const dispatch = useDispatch();

    const prevPage = (page_change) => {
        const prevPage = Math.max(actualPage - page_change, 0);
        dispatch( uiChangePage(prevPage) );        
    }

    const nextPage = (page_change) => {
        const nextPage = Math.min(actualPage + page_change, totalPages -1);
        dispatch( uiChangePage(nextPage) );
    }

    return (
        <div className="justify-content-center">
            <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item"><button className="page-link" onClick={() => {prevPage(1)}}>
                <span aria-hidden="true">&laquo;</span>
        <span className="sr-only">Previous</span></button></li>
                { actualPage > 3 ? ( <li className="page-item"><button className="page-link" onClick={() => {prevPage(4)}}>{actualPage-3}</button></li> ) : (<div></div>) }
                { actualPage > 2 ? ( <li className="page-item"><button className="page-link" onClick={() => {prevPage(3)}}>{actualPage-2}</button></li> ) : (<div></div>) }
                { actualPage > 1 ? ( <li className="page-item"><button className="page-link" onClick={() => {prevPage(2)}}>{actualPage-1}</button></li>) : (<div></div>) }
                { actualPage > 0 ? ( <li className="page-item"><button className="page-link" onClick={() => {prevPage(1)}}>{actualPage}</button></li> ) : (<div></div>) }
                <li className="page-item active"><button className="page-link">{actualPage+1}</button></li>
                { actualPage < totalPages -1 ? ( <li className="page-item"><button className="page-link" onClick={() => {nextPage(1)}}>{actualPage+2}</button></li> ) : (<div></div>) }
                { actualPage < totalPages -2 ? ( <li className="page-item"><button className="page-link" onClick={() => {nextPage(2)}}>{actualPage+3}</button></li> ) : (<div></div>) }
                { actualPage < totalPages -3 ? ( <li className="page-item"><button className="page-link" onClick={() => {nextPage(3)}}>{actualPage+4}</button></li> ) : (<div></div>) }
                { actualPage < totalPages -4 ? ( <li className="page-item"><button className="page-link" onClick={() => {nextPage(4)}}>{actualPage+5}</button></li> ) : (<div></div>) }
                <li className="page-item"><button className="page-link" onClick={() => {nextPage(1)}}>
                <span aria-hidden="true">&raquo;</span>
        <span className="sr-only">Next</span></button></li>
            </ul>
            </nav>
        </div>
    )
}
