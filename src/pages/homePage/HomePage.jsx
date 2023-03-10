import { CleaningServices } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import "./homePage.css";
import axios from "axios";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  console.log(search);

  useEffect(() => {
    const fetchPosts = async()=> {
      const res = await axios.get("/posts" + search);
      // console.log(res)
      setPosts(res.data)
    }
    fetchPosts();
  }, [search])
  



  return (
    <div>
      <Header/>
      <div className='home'>
        <Posts posts={posts}/>
        <Sidebar/>
      </div>
    </div>
  )
}

export default HomePage