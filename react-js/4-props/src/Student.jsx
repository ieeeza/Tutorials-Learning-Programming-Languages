import PropTypes from "prop-types"

function Student(props) {
    return(
        <div className="student">
            <p>Nome: {props.name}</p>
            <p>Idade: {props.age}</p>
            <p>Estudante: {props.isStudent ? "Sim" : "Não"}</p>
        </div>
    )
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

Student.defaultProps = {
    name: "Visitante",
    age: 0,
    isStudent: false
}

export default Student