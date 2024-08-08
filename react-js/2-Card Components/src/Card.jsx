import profilePic from './assets/download.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="foto de perfil"></img>
            <h2 className="card-tittle">César Pereira</h2>
            <p className="card-text">Eu estou estudando React</p>
        </div>
    )
}

export default Card