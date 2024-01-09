import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context';
import { getLimitPosts } from '../service';
import $ from 'jquery';


function PaginatedItems({ itemsPerPage }) {
    const { setData,data} = useContext(AppContext);
    const [activePage, setActivePage] = useState(1);
    const items = [];
    for(let i = 1; i <= itemsPerPage; i++) {
        items.push(i);
    }
    const clickPagination = (item) => {
        data.length % 10==0 ? getLimitPosts(item).then(data => {
            setData(data);
            setActivePage(item);
        }) : 
        setData(data.slice(item * 10 - 10, item * 10));
    };

    useEffect(() => {
        $('.page-link').removeClass('active');
        $(`.page-link[data-page="${activePage}"]`).addClass('active');
    }, [activePage]);

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination">
                <li className="page-item disabled">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {items.map((item, idx) => (
                    <li key={item} className="page-item">
                        <NavLink
                            onClick={() => clickPagination(item)}
                            className={`page-link${activePage === item ? ' active' : ''}`}
                            data-page={item}
                        >
                            {item}
                        </NavLink>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default PaginatedItems;
