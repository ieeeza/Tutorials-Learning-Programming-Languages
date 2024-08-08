// import styles from "./Button.module.css"

function Button() {
    const styles = {
        backgroundColor: "black",
        color: "white",
        padding: "10px 20px",
        border: "none",
        cursor: "pointer", 
    }
    
    return(
        <>
        {/* <button className={styles.button}>Click Me</button> */}
        <button style={styles}>Click Me</button>
        </>
    )
}

export default Button