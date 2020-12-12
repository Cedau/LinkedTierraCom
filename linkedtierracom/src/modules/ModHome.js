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
                <div className="col-md m-1">
                    <RenderCard item={props.system} />
                </div>
                

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