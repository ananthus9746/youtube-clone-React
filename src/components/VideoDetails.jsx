import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Videos,Loader} from './'
import { fetchFromAPI ,fetchVideoDetailsAPI} from '../utils/fetchFromApi'

// AIzaSyDGprbdTVG1-9eb2WR6HV7vA4o6gOccieM
// https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=4Y4YSpF6d6w&key=AIzaSyDGprbdTVG1-9eb2WR6HV7vA4o6gOccieM
// https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=4Y4YSpF6d6w&key=AIzaSyDGprbdTVG1-9eb2WR6HV7vA4o6gOccieM




function VideoDetails() {

  const { id } = useParams()
  console.log("id",id)
  

  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]); 

  
  useEffect(()=>{
    fetchFromAPI(`videos?part=contentDetails,snippet,statistics&id=${id}`)
    .then((data) =>  {   
    console.log("apii,..",data.items[0])
    setVideoDetail(data.items[0])

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data)=>{
       setVideos(data.items)
    })

   })
  },[id])

  if(!videoDetail) return <Loader/>

  const {snippet:{publishedAt,title,channelTitle,description,channelId},statistics:{viewCount,likeCount}} =videoDetail;

  


  return (

    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={2}>

          <Box sx={{ width: '100%', }} >

            
            <ReactPlayer  url={`https://www.youtube.com/watch?v=${id}`} className='react-player'  controls />

           <Typography color="white" variant='h5' fontWeight='bold' p={2}>
            {title}
            </Typography>

            <Stack direction='row' justifyContent='space-between' sx={{color:'white'}} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>

                <Typography variant={{sx:'subtitle1' ,md:'h6'}}  sx={{color:'white'}} >
                  {channelTitle}
                  <CheckCircle sx={{fontSize:'12px' ,color:"gray" ,ml:"5px"}}/>
                </Typography>
              </Link>

                <Stack direction="row" gap="20px" alignItems="center">
                  <Typography variant='body1' sx={{opacity:'0.7',color:"gray"}}>
                    {parseInt(viewCount).toLocaleString()} views
                  </Typography>

                  <Typography variant='body1' sx={{opacity:'0.7',color:"gray"}}>
                    {parseInt(likeCount).toLocaleString()} like
                  </Typography>
                </Stack>
            </Stack>

            <Box p={2}>
              <Typography  sx={{color:'white'}} >
                Discription:
                </Typography>

              <Typography  sx={{color:'gray'}} >
                {description}
              </Typography>
            </Box>
            
          </Box>

        </Box>

        <div className='sideVideo'>
        <Box px={2} py={{md:1, xs:5}} justifyContent="center">
          <Videos videos={videos}   direction={{ xs: 'row', md: 'column' }}/>
          </Box>
        </div>
          

      </Stack >
    </Box>
  )
}

export default VideoDetails