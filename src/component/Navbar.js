import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }

  const handleMouseLeave = () => {
    setIsHovered(false);
  }
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Product Manager</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item" onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ fontStyle: isHovered ? 'italic' : ''       
                }}
                 >
                <Link to="/" class="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li class="nav-item" onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ backgroundColor: isHovered ? 'yellow' : '' }} >
                <Link to="/add" class="nav-link active" aria-current="page" href="#">Add</Link>
              </li>
              <li className="nav-item" onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ backgroundColor: isHovered ? 'red' : '' }} >
                <Link to="/login" class="nav-link active" aria-current="page" href="#">Login</Link>
              </li>
              <li className="nav-item" onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{ backgroundColor: isHovered ? 'green' : '' }} >
                <Link to="/login1" class="nav-link active" aria-current="page" href="#">Login1</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar