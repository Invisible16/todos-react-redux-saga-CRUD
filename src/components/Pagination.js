import React from 'react'

export default function Pagination(props) {
    let { curPage, totalPage } = props
    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous"
                            onClick={() => { props.changePage(1) }}
                        >
                            <span aria-hidden="true">«</span>
                        </a>
                    </li>
                    {[...Array(totalPage)].map((item, index) => {

                        return <li className="page-item" key={index}>
                            <a className="page-link" 
                                onClick={(e) => { props.changePage(parseInt(e.target.textContent)) }}
                                href='#'>{index + 1}</a></li>
                    })}
                    <li className="page-item">
                        <a className="page-link" href='#' aria-label="Next"
                            onClick={() => { props.changePage(totalPage) }}
                            >
                            <span aria-hidden="true">»</span>
                        </a>
                    </li>
                    {/* <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                        </a>
                    </li>

                    <li className="page-item"><a className="page-link" href="?_page=2"> {curPage} </a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                   */}
                </ul>
            </nav>
        </div>
    )
}
