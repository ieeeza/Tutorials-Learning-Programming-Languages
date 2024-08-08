function ProfilePicture() {
    const ImageUrl = "./assets/download.jpg"

    const handleClick = (e) => e.target.style.display = "none"

    return(<img  onClick={(e) => handleClick(e)} src={ImageUrl}></img>)
}

export default ProfilePicture