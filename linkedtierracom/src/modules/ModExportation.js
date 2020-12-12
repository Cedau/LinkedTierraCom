import React from 'react';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';


function FuncExportation(props) {
    return (


        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Exportation</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Exportation services</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-sm-6">
                    <h3>Dummy Text</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cu</p>
                </div>
            </div>
        </div>
    )
}

export default FuncExportation