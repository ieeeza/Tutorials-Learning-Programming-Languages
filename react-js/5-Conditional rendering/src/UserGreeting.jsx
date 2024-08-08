import PropTypes from "prop-types"

function UserGreeting(props) {
    const welcomeMessage =  <h2 className="welcome-message">Bem vindo {props.username}</h2>

    const loginPrompt =  <h2 className="login-prompt">Por favor entre na sua conta!</h2>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt)

    // return(props.isLoggedIn ? <h2 className="welcome-message">Bem vindo {props.username}</h2> : 
    //                             <h2 className="login-prompt">Por favor entre na sua conta!</h2>)
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Visitante"
}

export default UserGreeting