import React from "react";
import Comment from "../Comment";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


class CommentsList extends React.Component{

  render(){
    const {comments} = this.props;
     return (
          <MDBContainer className="px-n5" >  
          <MDBRow className ="justify-content-md-center"> 
           
            {
            comments.map(comment => (
                 <MDBCol md="3">
                  <Comment
                  name={comment.fields.name.stringValue}
                  message={comment.fields.message.stringValue} 
                  />
                </MDBCol>)
              )
            }
          </MDBRow>
          </MDBContainer>
        )
    }
  }

export default CommentsList;
