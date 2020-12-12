import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderSystemItem({system}) {
    return (
        <Card>
            <Link to={`/systems/${system.id}`}>
                <CardImg width="100%" src={system.image} alt={system.name} />
                <CardImgOverlay>
                    <CardTitle>{system.name}</CardTitle>
                </CardImgOverlay>
            </Link> 
        </Card>
    );
}



// <link> creates the link and gives it the id so it can add  the #3 in the browser  

function FuncSystems (props){
   
    //const directory = this.props.campsites.map(campsite => {     Before    this is not use
    const arrsystem = props.systems.map(system => {
        return (
            <div key={system.id} className="col-md-5 m-1">
                <RenderSystemItem system={system} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Systems</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Systems</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {arrsystem}
            </div>
        </div>
    );
}

export default FuncSystems;
/*
Replace it all with the CampsiteInfo component.
Pass the this.state.selectedCampsite object as props to this Campsite component, using the attribute name of "campsite". 
Make sure to import the CampsiteInfo component into DirectoryComponent.js.*/