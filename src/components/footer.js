

import React from 'react'
import Container from 'react-bootstrap/Container';

const AppFooter = () => {
  return (
    <Container fluid>
        <div className='copyright' >&copy; 2022 Corporate. All Right Reserved.</div>
        <div className='socials'>
            <ul>
                <li><a href="https://www.google.com" ><i class="fab fa-facebook-f" ></i></a></li>
                <li><a href="https://www.google.com"><i class="fab fa-twitter" ></i></a></li>
                <li><a href="https://www.google.com"><i class="fab fa-linkedin-in" ></i></a></li>
            </ul>
        </div>
    </Container>
  )
}

export default AppFooter