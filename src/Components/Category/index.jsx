import React from "react";
import styles from './styles.module.css'
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn } from "mdbreact";

class Category extends React.Component{

    render(){        
        return (
  
    <MDBRow>
        <MDBCol md="12" className="mb-lg-0 my-4">
            <MDBCard collection className="z-depth-1-half">
                <div className="view zoom">
                <MDBCardImage
                    cascade
                    src={this.props.imageURL}
                    top
                    alt={this.props.title}
                    width="100"
                    height="350"
                    />
                
                <div className={styles.stripe}>
                    <a href="#!" class="dark-grey-text">
                    <p>
                        {this.props.title} <MDBIcon icon="angle-right" />
                    </p>
                    </a>
                </div>
                </div>
            </MDBCard>
        </MDBCol>
    </MDBRow>
  );
}
}
export default Category;