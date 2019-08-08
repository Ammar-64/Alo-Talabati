import React from "react";
import styles from './styles.module.css'
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBIcon } from "mdbreact";
import { NavLink } from 'react-router-dom';

class Category extends React.Component{

    render(){    
        const { title, imageURL } = this.props    
        return (
  
    <MDBRow>
        <MDBCol md="12" className="mb-lg-0 my-4">
            <MDBCard collection className="z-depth-1-half">
                <div className="view zoom">
                <MDBCardImage
                    cascade
                    src={imageURL}
                    top
                    alt={title}
                    width="100"
                    height="350"
                    />
                
                <div className={styles.stripe}>
                    <NavLink to={title} exact class="dark-grey-text">
                    <p>
                        {title} <MDBIcon icon="angle-right" />
                    </p>
                    </NavLink>
                </div>
                </div>
            </MDBCard>
        </MDBCol>
    </MDBRow>
  );
}
}
export default Category;