function Button() {
    // const handleClick = () => console.log("Eita!!")
    // const handleClick2 = () => console.log(`${name} pare de apertar em mim!!`)

    // let count = 0

    // const handleClick = (name) => {
    //     if (count < 3) {
    //         count++
    //         console.log(`${name} você clicou em mim ${count} vezes`)
    //     } else {
    //         console.log(`${name} pare de clicar em mim!!!`)
    //     }
    // }

    const handleClick = (e) => e.target.textContent = "Ouch!!"


    return(<Button onClick={(e) => handleClick(e)}>Click me</Button>)
    // return(<Button onDoubleClick={(e) => handleClick(e)}>Click me</Button>)
}

export default Button