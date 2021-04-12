
import './Cart.css';

export default function Cart(props) {
  
  return (
    <div className="cart-container">
      <img className="cart-image" src="https://picsum.photos/200" alt=""/>
      <div className="cart-inhalt-text">
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, deleniti! Repellat numquam in voluptatibus eius optio quibusdam recusandae ducimus veritatis.</p>
        <button>Lern More!</button>
      </div>
    </div>
  );
}