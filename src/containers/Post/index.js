import React from 'react';
import './style.css';
import BlogPost from '../../components/BlogPost';
import SideBar from '../../components/SideBar';
import Layout from '../../components/Layout';

const Post = (props) => {
    console.log(props);
    return (
        <div>
           
                <Layout>
                    <BlogPost {...props}/>
                </Layout>
                
                
           
        </div>
    )
}

export default Post;
