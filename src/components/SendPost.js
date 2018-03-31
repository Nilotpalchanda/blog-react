import React, {Component} from 'react'
// import axios from 'axios'

class SendPost extends Component{
	render(){
		return(
			<form>
				  <div className="form-group">
				    <label for="exampleInputEmail1">Title</label>
				    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
				    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
				  </div>
				   <div className="form-group">
				    <label for="exampleFormControlTextarea1">Body</label>
				    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
				  </div>
				  <div className="form-group">
				    <label for="exampleFormControlSelect1">Author</label>
				    <select className="form-control" id="exampleFormControlSelect1">
				      <option>Nilotpal</option>
				      <option>Neel</option>
				    </select>
				  </div>
				  <button type="submit" className="btn btn-primary">Submit</button>
			</form>


			)
	}
}

export default SendPost
