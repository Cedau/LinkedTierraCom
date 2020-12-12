import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';


function FuncAbout(props) {

    const arrcountries = props.passcountry.map(icountry => {
        return (          
          //  <h5>{partner.name}</h5>
          <Media tag="li" key={icountry.id}>
            <Rendercountry pass2country={icountry}/>
          </Media>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>


            <div className="row row3 mt-4">   
                <div className="col-6"> 
                    <h2>Who are we</h2>
                    <p>unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="col-6"> 
                    <img src="/assets/images/knowledgebank.jpg" width="300"></img>
                </div>

            </div>

            <div className="row row3 mt-4">   
                <div className="col-12"> 
                    <h2>Strategic Planning</h2>
                </div>
                <div className="col-6">
                    <h2>Mission</h2> 
                    <p>on ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="col-6">
                    <h2>Vision</h2> 
                    <p>iquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

            </div>
         
            <div className="row">
                <div className="col-12">
                    <h3>Countries linked:</h3>
                </div>
                <div className="col mt-4">
                    <Media list>
                        {arrcountries}
                    </Media>
                </div>
            </div>
        </div>
    );
}



function Rendercountry({pass2country}) {
    if ({pass2country}){
        return (
            <React.Fragment>
                <Media object src={pass2country.image} alt={pass2country.name} width="150"/>
                <Media body className="col-5 mb-5">
                    <Media heading>
                        {pass2country.name}

                    </Media>
                  

                </Media>
            </React.Fragment>

        
        );
    }
        return <div />;






}







export default FuncAbout;