import './App.css'
import Header from './components/Header'
import ProductList from './components/ProductList'
import { useState } from 'react'
import Cartlist from './components/Cartlist'

function App() {

  const [product,setProduct] = useState([
    {
      url: 'https://leaguex.s3.ap-south-1.amazonaws.com/task/shopping/hoodie-tshirts.png',
      name: 'Hoodie',
      category: 'Clothes',
      seller: 'Polo',
      price: 2599
    },
    {
      url: 'https://leaguex.s3.ap-south-1.amazonaws.com/task/shopping/round-neck-tshirts.png',
      name: 'Blue Polo',
      category: 'Clothes',
      seller: 'Polo',
      price: 2599
    },
    {
      url: 'https://leaguex.s3.ap-south-1.amazonaws.com/task/shopping/polo-tshirts.png',
      name: 'Blue Polo',
      category: 'Clothes',
      seller: 'Polo',
      price: 2599
    },
    {
      url: 'https://leaguex.s3.ap-south-1.amazonaws.com/task/shopping/hoodie-tshirts.png',
      name: 'Hoodie',
      category: 'Clothes',
      seller: 'Polo',
      price: 2599
    },
    {
      url: 'https://leaguex.s3.ap-south-1.amazonaws.com/task/shopping/round-neck-tshirts.png',
      name: 'Blue Polo',
      category: 'Clothes',
      seller: 'Polo',
      price: 2599
    },
    {
      url: 'https://leaguex.s3.ap-south-1.amazonaws.com/task/shopping/polo-tshirts.png',
      name: 'Blue Polo',
      category: 'Clothes',
      seller: 'Polo',
      price: 2599

    }
  ])

  const [cart, setCart] = useState([])
  const [showCart,setShowCart]=useState(false)
  const addToCart = (data) =>{

setCart([...cart , {...data, quantity : 1}])
  }
  const handleShow=(value)=>{
setShowCart(value)
  }
  return (
    <div>
      <Header count={cart.length} 
      handleShow={handleShow}/>
       {
        showCart ?
        <Cartlist cart={cart}/>:
  <ProductList product={product} addToCart={addToCart}/>
       }
  
      </div>
  )
}

export default App
