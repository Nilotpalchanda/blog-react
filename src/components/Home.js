import React, {Component}  from 'react';
import axios from 'axios'
import '../App.css'
import HomeStyle from './HomeStyle'
import PageStr from './PageStr'
class Home extends Component {
    //create State
    state ={
        posts: []
    }
    //get all post
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
                this.setState({
                    posts: response.data
                })
            console.log(response)
        })
    }
    // end 
    render(){
        //Map use for Rendering
        const posts = this.state.posts.map(post =>{
            return <HomeStyle key= {post.id} body={post.body} title={post.title}/> 
        })

        return(
            <PageStr>
   				 <div className="container posts">

     				 <div className="row">
                {posts}
            </div>
            </div>
            </PageStr>
        );
    }
}

export default Home

