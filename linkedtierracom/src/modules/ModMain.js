import React, { Component } from 'react';
import FuncSystems from './ModSystems';
import CompHeader from './ModHeader';
import FuncFooter from './ModFooter';
import FuncHome from './ModHome';
import CompExportation from './ModExportation';
import FuncAbout from './ModAbout';
import { Switch, Route, Redirect } from 'react-router-dom';
import FuncInfo from './ModInfo';
import { SYSTEMSARRAY } from '../shared/systemsarray';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
//import { PROMOTIONS } from '../shared/promotions';

class CompMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            systems: SYSTEMSARRAY,
            comments: COMMENTS,
            partners: PARTNERS
           // promotions: PROMOTIONS
        };
    }


/* SYSTEMSARRAY is the actual array where all info is stored
   arrsystem is the variable being crated ro show
   systems is the total variable being taggled (passed) around
   system are variables created within small fiunctins to act as place holder of information
*/

    render() {

        const HomePage = () => {
            return (
                <FuncHome
                system={this.state.systems.filter(system => system.featured)[0]}
                //promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                partner={this.state.partners.filter(partner => partner.featured)[0]}
            />

            );
        }

        const CampsiteWithId = ({match}) => {
            return (
                <FuncInfo 
                    system={this.state.systems.filter(system => system.id === +match.params.systemId)[0]}
                    comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
                />
            );
        }  

        return (
            <div>
                <CompHeader />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/systems' render={() => <FuncSystems systems={this.state.systems} />} />
                    <Route path='/consulting/:campsiteId' component={CampsiteWithId} />
                    <Route exact path='/exportation' component={CompExportation} />
                    <Route exact path='/aboutus' render={() => <FuncAbout partners={this.state.partners} />} />
                    <Redirect to='/home' />
                </Switch>
                <FuncFooter />
            </div>
        );
    }
}

/* the : is very important, It tells the browser that what it folows the : is going to be a paramerter
and it takes what ever that is and puts it inside the campsiteId property
Then the route it self  stoores an object named match in its state which have as its  property an object named params
campsiteId gets store as a property of that params object
*/
export default CompMain;