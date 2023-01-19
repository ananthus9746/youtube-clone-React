import React from 'react'
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import {fetchFromAPI} from '../utils/fetchFromApi'

import {Videos,ChannelCard} from './'

function ChannelDetails() {
  const {id} =useParams()
  const [channelDetail,setChannelDetail]=useState(null)
  const [videos,setVideos]=useState([])


  console.log("channelDetail..",channelDetail)
  console.log("videos..",videos  )

 
  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order-date`).then((data)=>setVideos(data?.items))
  },[id]);

  return (
    <Box minHeight='95vh'>
       <Box>
        <div style={{background:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,67,1) 40%, rgba(0,212,255,1) 100%)',
        zIndex:'10',height:'300px'}}/>
       </Box>
       <ChannelCard  channelDetail={channelDetail} marginTop='-90px'/>


        <Box display='flex' p='2'>
            <Box sx={{mr:{sm:'100px'} }}/>
              <Videos videos={videos}/>
        </Box>


    </Box>

  ) 
}

export default ChannelDetails
