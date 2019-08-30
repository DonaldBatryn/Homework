import { connect } from 'react-redux';
import Greeting from './greeting';
import {logout, login, createNewUser } from '../../actions/session_actions'

const msp = (state) => {
    let userId = state.session.id
    return {
        currentUser: state.entities.users[userId]
    }
}

const mdp = (dispatch) => {

    return {
        logout: () => dispatch(logout()),
        login: (user) => dispatch(login(user)),
        signup: (user) => dispatch(createNewUser(user))
    }
}

export default connect(msp, mdp)(Greeting);