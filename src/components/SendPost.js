import React, {Component} from 'react'
import axios from 'axios'

class SendPost extends Component{

    state = {
        title: '',
        content: '',
        author: 'Max'
    }

    sendPostRequest = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post('/posts', data)
            .then(response => {
                console.log(response);
            });
    }

	render(){
		return(
			<div>
				  <div className="form-group">
				    <label >Title</label>
				    <input type="text" value= {this.state.title} className="form-control" placeholder="Enter Title" onChange={(event) => this.setState({title: event.target.value})}/>
				    <label>Body</label>
				    <textarea className="form-control" value= {this.state.content} rows="3" placeholder="Enter Content" onChange={(event) => this.setState({content: event.target.value})}></textarea>
				    <label >Author</label>
				    <select className="form-control" value= {this.state.author} id="exampleFormControlSelect1" onChange={(event) => this.setState({author: event.target.value})}>
				      <option value="Nilotpal">Nilotpal</option>
				      <option value="Neel">Neel</option>
				    </select>
				  </div>

				  <button className="btn btn-primary" 
				  onClick={this.sendPostRequest }>Submit</button>
			</div>	             
			

			)
	}
}

export default SendPost
