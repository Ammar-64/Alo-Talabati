import React from 'react';
import CommentForm from '../../Components/CommentForm';
import CommentsList from '../../Components/CommentsList';
import {MDBRow, MDBCol, MDBContainer} from "mdbreact";

const BASE_URL = 'https://firestore.googleapis.com/v1';

class Feedback extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          comments: [],
          loading: false
        };
    
        this.addComment = this.addComment.bind(this);
      }
    componentDidMount() {
    this.fetchComments();
  }

  fetchComments = async () => {
    const url = `${BASE_URL}/projects/alo-talabati/databases/(default)/documents/comment/`;
    const response = await fetch(url);
    const json = await response.json();
    this.setState({ comments: json.documents });
    debugger
  }
  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    });
  }

  render() {
    if (this.state.comments === null) {
      return (<h1>Loading ...</h1>);
    }
    else{
        let views = this.state.comments === 0 ? <h1>Be the first</h1> :<CommentsList
        comments={this.state.comments}
        />;
        return(
            
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                    <CommentForm addComment={this.addComment} />                    </MDBCol>
                   
                    <MDBCol>
                        {views}
                    </MDBCol>
                </MDBRow> 
            </MDBContainer>
        )
        
    } 
  }
}


export default Feedback;