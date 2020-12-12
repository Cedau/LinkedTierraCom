import React from 'react';
import { Link } from 'react-router-dom';

function FuncFooter(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/aboutus'>About</Link></li>
                            <li><Link to='/exportation'>Exportation</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+18325882158"><i className="fa fa-phone" /> 1-832-588-2158</a><br />
                        <a role="button" className="btn btn-link" href="mailto:linkedtierra@gmail.com"><i className="fa fa-envelope-o" /> linkedtierra@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FuncFooter;