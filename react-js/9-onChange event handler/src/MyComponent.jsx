// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";

function MyComponent() {
    
    const [name, setName] = useState("Convidado")
    const [quantity, setQuantity] = useState(1)
    const [comment, setComment] = useState()
    const [payment, setPayment] = useState()
    const [shipping, setShipping] = useState("Delivery")

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleQuantityChange(e) {
        setQuantity(e.target.value)
    }

    function handleCommentChange(e) {
        setComment(e.target.value)
    }

    function handlePaymentChange(e) {
        setPayment(e.target.value)
    }

    function handleShippingChange(e) {
        setShipping(e.target.value)
    }

    return(
        <div>
            <input value={name} type="text" onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input value={quantity} type="number" onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>`
            
            <textarea value={comment} onChange={handleCommentChange} placeholder="Diga alguma coisa"/>
            <p>Comentário: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Selecione uma opção</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Pagamento: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
                Pick up
            </label>
            <label>
                <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Entrega: {shipping}</p>
        </div>
    )
}

export default MyComponent