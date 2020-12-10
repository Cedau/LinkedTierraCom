import React, { Component } from 'react';
import FuncConsulting from './ModConsulting';
import CompHeader from './ModHeader';
import FuncFooter from './ModFooter';
import FuncHome from './ModHome';
import CompExportation from './ModExportation';
import FuncAbout from './ModAbout';
import { Switch, Route, Redirect } from 'react-router-dom';
import FuncInfo from './ModInfo';
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

class CompMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS
        };
    }

    render() {

        const HomePage = () => {
            return (
                <FuncHome
                campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
                promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                partner={this.state.partners.filter(partner => partner.featured)[0]}
            />

            );
        }

        const CampsiteWithId = ({match}) => {
            return (
                <FuncInfo 
                    campsite={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                    comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
                />
            );
        }  

        return (
            <div>
                <CompHeader />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/consulting' render={() => <FuncConsulting campsites={this.state.campsites} />} />
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