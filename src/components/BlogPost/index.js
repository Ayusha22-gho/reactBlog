import React, {useState, useEffect} from 'react';
import './style.css';
import Card from '../UI/Card';
import blogPost from '../../data/blog.json'
import { NavLink } from 'react-router-dom';

const BlogPost = (props) => {

    const [post, setPost] = useState({
        blogCategory : "" ,
        blogTitle : "" ,
        slug: "",
        postedOn:"" ,
        author: "",
        blogImage: "",
        blogText: ""
    });

    const [slug, setSlug] = useState("");

    useEffect(() => {
        const slug = props.match.params.slug;
        const post = blogPost.data.find(post => post.slug == slug);
        setPost(post);
        setSlug(slug)
    }, [post, props.match.params.slug]);

    if(post.blogImage == "") return null;
    return (
        
    // <Card style = {{width: "70%"}}></Card>
    <div className="blogPostContainer">
    <Card>
        
        <div className="blogHeader">
                <span className="blogCategory">{post.blogCategory}</span>
                <h1 className="postTitle">{post.blogTitle}</h1>
                <span className="postedBy">posten on {post.postedOn} by {post.author}</span>
                </div>

                <div className="postImageContainer">
                    <img src = {require('../../blogPostImages/' + post.blogImage)} alt="Post Image" />

                </div>

                <div className="postContent">
                    <h3>{post.blogTitle}</h3>
                    <p>{post.blogText}</p>
                </div>
       
        
            
        
    </Card>
    </div>
        
    )
}

export default BlogPost;
