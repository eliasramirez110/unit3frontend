import Sneaker from '../components/Sneaker'
import {useState, useEffect} from 'react'
import axios from 'axios'
export default function Store() {
  const [sneakers, setSneakers] = useState(null)
  const getSneakers = async () => {
    const res = await axios.get('http://localhost:3001/purchases/getsneaker/')
    console.log(res.data)
    setSneakers(res.data.sneakers)
  }
  useEffect(()=>{
    getSneakers()
  },[])
  return (
    <div className="grid-container">
      
          <div className="row center">
            <h1>Store</h1>
            { sneakers && sneakers.map((sneaker) => (
              <Sneaker key={sneaker._id} sneaker={sneaker}/>
            ))}
          </div>
        
    </div>
  )
}