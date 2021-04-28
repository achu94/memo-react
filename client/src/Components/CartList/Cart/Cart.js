
import './Cart.css';

export default function Cart(props) {
  
  return (
    <div className="cart-container">
      <img className="cart-image" src="https://picsum.photos/200" alt=""/>
      <div className="cart-inhalt-text">
        <h3>{props.header ? props.header : 'HEADER FEHLT'}</h3>
        <p>{props.body ? props.body : 'BODY FEHLT'}</p>
        {/* <button>Lern More!</button> */}
      </div>
    </div>
  );
}