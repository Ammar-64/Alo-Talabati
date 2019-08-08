import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput, MDBContainer } from "mdbreact";

const ContactPage = () => {
  return (
    <MDBContainer className="my-5">
      
  
      <MDBRow>
        <MDBCol lg="4" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div className="form-header orange-text accent-1">
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Write to us:
                </h3>
              </div>
              <p className="dark-grey-text-bold">
                Do not worry , we going to reply soon <MDBIcon far icon="smile-beam" />
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Icon Prefix"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="orange">Submit</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24660.772971063678!2d37.36552295160848!3d37.059335844595736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e13fcaae3333%3A0xaea378c98547280!2z2LPYp9mG2YPZiCDYqNin2LHZgyDZhdmI2YQg2YTZhNiq2LPZiNmC!5e0!3m2!1sar!2str!4v1565278433424!5m2!1sar!2str"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="orange" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p>Gaziantep, 45700</p>
              <p className="mb-md-0">Turkey</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="orange" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>+ 58379992838</p>
              <p className="mb-md-0">24 Hours , 7 Days </p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="orange" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              
              <p className="mb-md-0">info@alo-talabati.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ContactPage;