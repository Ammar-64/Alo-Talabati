import React from 'react';
import { MDBBtn, MDBRow, MDBCol, MDBInput, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter,  MDBTooltip , MDBContainer} from "mdbreact";

class CommentForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
    
          comment: {fields:{
            name: "",
            message: ""
          }
          },
          error:false,
          commentsList:null     
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
      }

     
    
      
    //   handleFieldChange = event => {
    //       debugger
    //     const { value, id } = event.target;
    
    //     this.setState({
    //       ...this.state,
    //       comment: {
    //         ...this.state.comment.fields,
    //         [id]: value
    //       }
    //     });
    // };

    handleNameChange = event => {
      
      const value = event.target.value
      this.setState(prevState => ({
        comment: {
          ...prevState.comment,           // copy all other key-value pairs of food object
          fields: {                     // specific object of food object
            ...prevState.comment.fields,   // copy all pizza key-value pairs
            name: value       // update value of specific key
          }
        }
      }))
    }

    handleMessageChange = event => {
          const value = event.target.value
      this.setState(prevState => ({
        comment: {
          ...prevState.comment,           // copy all other key-value pairs of food object
          fields: {                     // specific object of food object
            ...prevState.comment.fields,   // copy all pizza key-value pairs
            message: value       // update value of specific key
          }
        }
      }))
    };

    isFormValid() {
        return this.state.comment.fields.name !== "" && this.state.comment.fields.message !== "";
      }

    CreateComment = () => {
        
        if (!this.isFormValid()) {
            this.setState({ error: true });
            return;
          }
        const updateURL =  `https://firestore.googleapis.com/v1/projects/alo-talabati/databases/(default)/documents/comment`;
          fetch(updateURL, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            fields: {
              "name": {stringValue: JSON.stringify(this.state.comment.fields.name)},
              "message": {stringValue: JSON.stringify(this.state.comment.fields.message)},
              }
          })
      });
      
      let { comment } = this.state;
      this.props.addComment(comment);
      this.setState({
        comment: { ...comment, fields:{ name: "" ,message: "" } }
      });

     }

    render(){ 

        return (
  
    <MDBRow>
        <MDBCol md="6" className="mb-lg-0 my-4">
        <MDBInput id="name" label="Name" outline size="md" onChange={this.handleNameChange}/>
        <MDBInput id="message" label="Comment" outline size="md" onChange={this.handleMessageChange} />
{this.state.error && <p>All fields are required</p>}
        <MDBBtn onClick={this.CreateComment}>Submit</MDBBtn>
        </MDBCol>
    </MDBRow>
  );
}
}
export default CommentForm;