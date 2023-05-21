import React from 'react'

const LeftAside = () => {
    return (
        <aside className="col-3 col-sm-4 col-md-3 v_tbdr">
            <ul className="nav flex-column mt-3 fs-5">
                <li className="nav-item mb-2 mt-1">
                    <a className="nav-link active btn btn-info bg-info text-white rounded-0" aria-current="page" href="#">The
                        Flight</a>
                </li>
                <li className="nav-item mb-2">
                    <a className="nav-link btn btn-info bg-info text-white rounded-0" href="#">The City</a>
                </li>
                <li className="nav-item mb-2">
                    <a className="nav-link btn btn-info bg-info text-white rounded-0" href="#">The Island </a>
                </li>
                <li className="nav-item mb-2">
                    <a className="nav-link btn btn-info bg-info text-white rounded-0" href="#">The Food</a>
                </li>
            </ul>
        </aside>
    )
}

export default LeftAside