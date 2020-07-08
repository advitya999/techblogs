import React from 'react';
import './style.css';
import Card from '../../components/UI/Card';
import Sidebar from '../../components/Sidebar';
import RecentPosts from './RecentPosts';

import blogData from '../../data/blog.json';
import Layout from '../../components/Layout';






const Home  = props => {
    const gallaryHeight = 300;
    const gallaryStyle = {
        height: gallaryHeight+'px',
        overflow: 'hidden'
    }
    const sideImageHeight = gallaryHeight / 3;
   const imgAr = blogData.data.map(post => post.blogImage)
    return (
        <div>
                
                <Layout>
                    <RecentPosts style={{width: '70%'}}/>
                </Layout>
                
                
        </div>
    );
}

export default Home;
