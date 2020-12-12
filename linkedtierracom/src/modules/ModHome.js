import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderCard({item}) {
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function FuncHome(props) {
    return (
        <div className="container">
                  
            <div className="row">
                 <video src="/assets/videos/earth.mp4" type="video/mp4" width="900"></video>     
             </div> 
       
            <div className="row row2">   
                <div className="col-12"> 
                        <h1>&lt;Linked Countries&gt; </h1> 
                </div>
                <div className="col-6"> 
                    <button type="button">USA</button>
                </div>
                <div className="col-6"> 
                    <button type="button">Colombia</button>
                </div>
            </div>

            <div className="row row3 mt-4">   
                <div className="col-6"> 
                    <h2>Consulting</h2>
                    <p>unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="col-6"> 
                    <img src="/assets/images/consulting.jpg" width="300"></img>
                </div>

            </div>

            <div className="row mt-4 mb-4">
                <div className="col"> 
                <button className="button2" type="button">Request info</button>
                </div>
            </div>

            <div className="row">   
                <RenderCard item={props.pass4system} />
            </div>
        </div>
    );
}

export default FuncHome;  


/*                <div className="col-md m-1">
                    <RenderCard item={props.partner} />
                </div>
                this is to show the feasure partner, which is no going to be use 

*/