import "./Card.css"
import Products from "./Products";



function Card(){
    return <div className="card">
        <h1>Card</h1>
        <h2>Hello World</h2>
        <Products name="Nirma"></Products>
        <Products name="Surf Excel"></Products>
        <Products name="Airel"></Products>
        <Products name="Tide"></Products>
    </div>
}

export default Card;