import React, { Component } from 'react';
import FuncSystems from './ModSystems';
import CompHeader from './ModHeader';
import FuncFooter from './ModFooter';
import FuncHome from './ModHome';
import CompContact from './ModContact';
import FuncAbout from './ModAbout';
import FuncExportation from './ModExportation';
import { Switch, Route, Redirect } from 'react-router-dom';
import FuncInfo from './ModInfo';
import { SYSTEMSARRAY } from '../shared/systemsarray';
import { COMMENTS } from '../shared/comments';
import { COUNTRIESARRAY } from '../shared/countriesarray';
//import { PROMOTIONS } from '../shared/promotions';

class CompMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            systems: SYSTEMSARRAY,
            comments: COMMENTS,
            countries: COUNTRIESARRAY
  
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
                pass4system={this.state.systems.filter(system => system.featured)[0]}
                
            />

            );
        }

        const SystemWithId = ({match}) => {
            return (
                <FuncInfo 
                    pass5system={this.state.systems.filter(system => system.id === +match.params.system.Id)[0]}
                    comments={this.state.comments.filter(comment => comment.systemId === +match.params.systemId)}
                />
            );
        }  

        return (
            <div>
                <CompHeader />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/systems' render={() => <FuncSystems systems={this.state.systems} />} />
                    <Route path='/consulting/:systemId' component={SystemWithId} />
                    <Route exact path='/contact' component={CompContact} />
                    <Route exact path='/aboutus' render={() => <FuncAbout passcountry={this.state.countries} />} />
                    <Route exact path='/exportation' render={() => <FuncExportation passcountry={this.state.countries} />} />
            
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