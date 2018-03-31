import React, {Component}  from 'react';
import axios from 'axios'
import '../App.css'
import HomeStyle from './HomeStyle'
import PageStr from './PageStr'
import FullPost from './FullPost'
import SendPost from './SendPost'
class Home extends Component {
    //create State
    state ={
        posts: [],
        selectDiv: null
    }
    //get all post
    componentDidMount(){
        axios.get('/posts')
        .then(response =>{
                const data = response.data.slice(0,4);
                const somthing = data.map(datas=>{
                    return{
                        ...datas,
                        author:'Neel'
                        }
                })


                this.setState({
                    posts: somthing
                })
            //console.log(response)
        })
    }
    // end 
    divclicked=(id)=>{
        this.setState({selectDiv:id})
        //console.log(id)

    }

    render(){
        //Map use for Rendering
        const posts = this.state.posts.map(post =>{
            return <HomeStyle 
            key= {post.id} 
            body={post.body} 
            clicked={()=>this.divclicked(post.id)}
            author={post.author} 
            title={post.title}/> 
        })

        return(
            <PageStr>
   				 <div className="container posts">

     				 <div className="row">
                          {posts}

                      </div>

                          <FullPost id ={this.state.selectDiv}/>
                       <div>
                        <SendPost/>
                       </div>
                 </div>
            </PageStr>
        );
    }
}

export default Home

