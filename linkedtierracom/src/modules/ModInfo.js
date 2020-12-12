import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


    



function RenderCampsite({system}){
        return(
          
                    <div className="col-md-5 m-1">
                        <Card>
                            <CardImg top src={system.image} alt={system.name} />
                            <CardBody>
                                <CardTitle>{system.name}</CardTitle>
                                <CardText>{system.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
      
        );
    }




function RenderComments({comments}){
        if (comments) {
           return (
                    <div className="col-md-5 m-1">
                        <h4>
                            Comments
                        </h4>
                        {comments.map(comment => {
                            return(
                                <div key={comment.id}>
                                    <p>{comment.text}<br />
                                    {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} 
                                    </p>
                                </div>
                            );
                        })}
                    </div>
           );
        } 
        return <div />
    }
                   
                   


        


    

   
    
    function FuncInfo(props) {
        
     if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.system.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.system.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderCampsite system={props.system} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
        }  

        return <div />;


    }

/* REMOVED   <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedCampsite(this.state.selectedCampsite)}
                    </div>
                </div>*/

export default FuncInfo;