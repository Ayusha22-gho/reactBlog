import React from 'react';
import './style.css'
import Card from '../../../components/UI/Card';


const RecentPosts = (props) => {
    return (
        <div style = {props.style}>
        <Card style={{marginBottom:'20px'}}>
            <div className="posiImageWrapper">
                <img src={"https://2.bp.blogspot.com/-ZOY5OAvnKj0/V9_M3_TVTLI/AAAAAAAAD40/UQl4rIoqgi42zaeq0yR_y1gnnchZFxupQCLcB/s1600/3-3.jpg"} alt=""/>
            </div>
                <div style={{textAlign:'center'}}>
                    <span>Featured</span>
                    <h2>Heading</h2>
                    <span>posteddate</span>
                    <p>details</p>
                    <p>hiii</p>
                    <button>Read More</button>
                </div>
            
        </Card> 
       </div>
    )
}

export default RecentPosts;
