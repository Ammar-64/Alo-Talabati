import React, { Component } from "react";

import { MDBMask, MDBRow, MDBCol,   MDBView, MDBContainer } from "mdbreact";


class Aboutus extends Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id="apppage">
        
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                   Why Alo-Talabti ? {" "}
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                Alo-Talabati  is an local service and goods delivery company that operates in Turkey, Gaziantep . Alo-Talabati is a Turkish/Syrian brand that offers its customers high-quality services and goods.

                With a team of locally qualified clients, we strongly believe that services and goods  can create a special experience and we dedicated ourselves to ensure that you enjoy our service every time you order from Alo-Talabati.

                We understand the importance of why you choose us for this very special experience and we promise to do our best to make it unforgettable for you and your loved ones.
                  </h6>
                </div>
                
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}

export default Aboutus;