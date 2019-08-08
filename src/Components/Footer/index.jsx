import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="amber" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
          <MDBRow>
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
          </MDBCol>
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