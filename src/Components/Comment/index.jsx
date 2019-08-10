import React from "react";


class Comment extends React.Component{

 

    render(){     
      const { name , message } = this.props   
        return (
            <div className="media mb-3">
            <img
              className="mr-3 bg-light rounded"
              width="48"
              height="48"
              src={`https://png.pngtree.com/png-clipart/20190612/original/pngtree-yellow-rectangle-title-box-png-image_3292563.jpg`}
              alt={name}
            />
      
            <div className="media-body p-2 shadow-sm rounded bg-light border">
              <h6 className="mt-0 mb-1 text-muted">{name}</h6>
              {message}
            </div>
          </div>
  );
}
}
export default Comment;