import React from 'react'
import {Link}  from 'react-router-dom'
import {Typography,Card,CardContent,CardMedia} from '@mui/material'
import {CheckCircle} from '@mui/icons-material'

import {demoThumnailUrl,demoChannelTitle,demoChannelUrl,demoVideoUrl,demoVideoTitle} from '../utils/constance'

function  VideoCard({video:{id:{videoId},snippet}}) {
  // console.log('videoid',videoId)
  // console.log('snippet',snippet)

  return (

  <Card sx={{width:{md:'320px',sm:'300px',xs:'100vw', boxShadow:'none',borderRadius:'0'}}}>

      <Link to={videoId? `/video/${videoId}`:demoVideoUrl}>
        <CardMedia
        image={snippet?.thumbnails?.high.url || demoThumnailUrl} 
        alt={snippet?.title} sx={{height:180}}/>
      </Link>

      <CardContent sx={{backgroundColor:'#1e1e1e', height:'107px'}}>

        <Link to={videoId? `/video/${videoId}`:demoVideoUrl}>
        <Typography variant='subtitle1' fontWeight='bold' color='white'>
        {snippet?.title.slice(0,61) || demoVideoTitle.slice(0,61)}
        </Typography>
        </Link>

        <Link to={snippet.channelId? `/channel/${snippet?.channelId}`:demoChannelUrl}>
        <Typography variant='subtitle2' fontWeight='bold' color='gray'>
        {snippet?.channelTitle.slice(0,61) || demoChannelTitle.slice(0,61)}
        <CheckCircle sx={{color:'gray' ,fontSize:10,ml:'5px'}}/>
        </Typography>
        </Link>

      </CardContent>

      

  </Card>

  )
}

export default VideoCard