import React from 'react';
import Category from '../Category';
import styles from '../../styles.module.css';
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";



    function Categories ({categories}){
        return (
          <MDBAnimation type="tada" reveal> 
          <MDBContainer className={styles.body_container}>
            <MDBRow>
            {
              categories.map(categorie => (                  
                  <MDBCol md="4">      
                  <MDBAnimation type={categorie.fields.type.stringValue} reveal>
                  <Category 
                  imageURL={categorie.fields.imageURL.stringValue}
                  title={categorie.fields.title.stringValue} 
                  />
                  </MDBAnimation>            
                </MDBCol>)             
              )
            }
          </MDBRow>
          </MDBContainer>
          </MDBAnimation>
        )
    }


export default Categories;