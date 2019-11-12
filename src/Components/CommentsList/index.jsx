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
            comments.map(comment => {
              let name = ''
              let message = ''

              if (typeof comment.fields.name === 'string') {
                name = comment.fields.name
              } else {
                name = comment.fields.name.stringValue
              }

              if (typeof comment.fields.message === 'string') {
                message = comment.fields.message
              } else {
                message = comment.fields.message.stringValue
              }

              return (
                 <MDBCol md="6">
                  <Comment
                  name={name}
                  message={message} 
                  />
                </MDBCol>
              )
            })
            }
          </MDBRow>
          </MDBContainer>
        )
    }
  }

export default CommentsList;
