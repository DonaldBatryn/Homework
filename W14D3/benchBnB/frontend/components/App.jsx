import React from 'react';
import GreetingContainer from './greeting/greeting_container'
// import SessionForm from './sessionForm/session_form'
import { Route } from 'react-router-dom'
import LoginFormContainer from './sessionForm/login_form_container'
import SignupFormContainer from './sessionForm/signup_form_container'
// import BenchIndexContainer from './benches/bench_index_container'
import SearchContainer from './map/search_container'
import { AuthRoute } from '../util/route_util';

const App = () => {
    

    return (
        <div>
            <header>
                <h1>Bench BnB</h1>
                <GreetingContainer />
                
            </header>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={SearchContainer} />
        </div>
    )
}

export default App;


// API KEY
// AIzaSyDsuyPZmHGaaYNGhhF7CBGwQVs1d960IT8