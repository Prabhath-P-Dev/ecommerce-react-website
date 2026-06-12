import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../contexts/CartContext"
export default function ProductCard({product}){
  const {addToCart, cartItems} = useContext(CartContext);
  const productInCart = cartItems.find((item)=> item.id === product.id );
  const productQuantityLabel = productInCart ? `(${productInCart.quantity})`:"";
    return(
      <div className="product-card" >
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
        />
            <div className="product-card-content">
                <h3 className="product-card-name">{product.name}</h3>
                 <p className="product-card-price">${product.price}</p>
            <div className="product-card-actions">
                 <Link to={`/products/${product.id}`} className="btn btn-secondary">View Details</Link>
                <button className="btn btn-primary" onClick={()=>addToCart(product.id)}>Add to cart {productQuantityLabel} </button>
            </div>
            </div>
    </div>  
    )
}