import React,{Component} from 'react'
import axios from 'axios'
class FullPost extends Component{

  state={
    loadedPost : null
  }

  componentDidUpdate(){
    if ( this.props.id ) {
    if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost === this.props.id)){
    axios.get('/posts/' + this.props.id)
    .then(response=>{
      this.setState({loadedPost: response.data})
      //console.log(response)
    })
    }
  }

  }


	render(){
       let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
       if(this.props.id){
          post = <p style={{ textAlign: 'center' }}>Loading.......</p>;

       }
      if(this.state.loadedPost){
        post = (
          <div className="col-lg-12 col-md-12 col-sm-12 portfolio-item">
          <div className="card h-100">
            <div className="card-body">
              <h4 className="card-title">
                <p>{this.state.loadedPost.title}</p>
                <p style={{fontWeight:600}}>{this.state.loadedPost.author}</p>
              </h4>
              <p className="card-text">{this.state.loadedPost.body}</p>
            </div>
          </div>
        </div>
          )

      }
  return post
	}
}

export default FullPost