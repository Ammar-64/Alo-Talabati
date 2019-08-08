import React, { Component } from "react";

import { MDBMask, MDBRow,  MDBContainer,MDBIcon } from "mdbreact";



class About extends Component {
  render() {
    return (
      <div id="apppage">
        

          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <div className="darken-grey-text text-md-left col-md-8  mb-5">
                  <h1 className="orange-text h1-responsive font-weight-bold mt-sm-5">
                   Why Alo-Talabti ? {" "}
                  </h1>
                  <hr className="hr-light" />
                  <h5 className="mb-4">
               <p> Alo-Talabati  is an local service and goods delivery company that operates in Turkey, Gaziantep . Alo-Talabati is a Turkish/Syrian brand that offers its customers high-quality services and goods.</p>

                <p> With a team of locally qualified clients, we strongly believe that services and goods  can create a special experience and we dedicated ourselves to ensure that you enjoy our service every time you order from Alo-Talabati. </p>

               <p> We understand the importance of why you choose us for this very special experience and we promise to do our best to make it unforgettable for you and your loved ones.</p>
                  </h5>
                  <h1 className="orange-text h1-responsive font-weight-bold mt-sm-2">
                   Why to choose us  ? {" "}
                  </h1>
                  <hr className="hr-light" />
                  <div className="d-flex justify-content-between">
                  <div> <span > <MDBIcon icon="credit-card" size="5x" color="orange" className="mb-3"/></span><br />  <span> safe & Secure </span></div>
                  <div> <span> <MDBIcon far icon="smile" size="5x" className="mb-3" /></span><br /> <span> 100% Happines Guarantee </span></div>
                  <div><span> <MDBIcon  icon="gifts" size="5x" className="mb-3" /></span><br /> <span> Personalised Gifts </span></div>
                  </div>
                </div>
                
              </MDBRow>
            </MDBContainer>
          </MDBMask>

      </div>
    );
  }
}

export default About;