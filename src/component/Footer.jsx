import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
    <footer className='footer'>
        <span>All Right Reserved &copy; {new Date().getFullYear()}</span>
    </footer>
</div>
  )
}
{/* <>
   <div className="card-header fs-3 text-center">
  <div class="fs-4 text-center" >
    <div
     style={{color: 'green',backgroundColor: 'gray'}}>Thanh ok1</div>
  </div>
  </div>
    </> */}
export default Footer