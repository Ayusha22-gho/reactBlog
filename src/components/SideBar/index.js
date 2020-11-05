import React, {useState, useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

const SideBar = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        
        const posts = blogPost.data;
        setPosts(posts);
    },[posts]);//hooks replacement to componentDidMount and componentDidUpdate


    return (
        <div className = "sidebarContainer">
        <Card style = {{marginBottom :'20px', padding:'20px', boxSizing : 'border-box'}}>
            {/* <Card style = {{width:"27%", borderRadius:'20px'}}> */}
            <div className="cardHeader">
                <span>About US</span>
            </div>
            <div className="profileImageContainer">
                <img src = {require('../../blogPostImages/about.jpg')} alt = "About Us"/>
            </div>
            <div className="cardBody">
                <p className="personalBio">My name is Ayusha Ghosh. I am a Front-end developer as well as a writer!</p>
            </div>
        </Card>

        <Card style = {{marginBottom :'20px', padding:'20px', boxSizing : 'border-box'}}>
            <div className="cardHeader">
                <span>Social Network</span>
            </div>
        </Card>

        <Card style = {{marginBottom :'20px', padding:'20px', boxSizing : 'border-box'}}>
            <div className="cardHeader">
                    <span>Recent Post</span>
            </div>

            <div className="recentPosts">

                {
                    posts.map(post =>{
                        return(
                          <NavLink key={post.id} to = {`/post/${post.slug}`}>
                            <div className = "recentPost">
                                <h4>{post.blogTitle}</h4>
                                <span>{post.postedOn}</span>
                            </div>
                          </NavLink>
                          
                        )
                    })
                }
                
            </div>

        </Card>


        </div>

        
    )
}

export default SideBar;
