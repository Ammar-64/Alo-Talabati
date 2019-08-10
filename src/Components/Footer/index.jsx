import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="amber" className="font-small pt-2 mt-4">
      <MDBContainer fluid >
          <MDBRow className ="justify-content-md-center"> 
            <h5 className="title">Follow us on social media:</h5>
            <ul className="d-flex">
              <li className="list-unstyled mx-3">
                <a href="#!"><MDBIcon className="fa-2x" fab icon="facebook-square" /></a>
              </li>
              <li className="list-unstyled mx-3">
                <a href="#!"><MDBIcon className="fa-2x" fab icon="instagram" /></a>
              </li>
              <li className="list-unstyled mx-3">
                <a href="#!"><MDBIcon className="fa-2x" fab icon="twitter-square" /></a>
              </li>
            </ul>
            </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.Alo-Talabati.com"> Alo-Talabati.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;