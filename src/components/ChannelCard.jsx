import React from 'react'
import {Box,CardContent,Typography,CardMedia} from '@mui/material'
import {CheckCircle} from '@mui/icons-material'
import {Link} from 'react-router-dom'
import {demoThumnailUrl} from '../utils/constance'
import { height } from '@mui/system'

function ChannelCard({channelDetail,marginTop}) {
  console.log("channelDetails..",channelDetail)
  return (
    <Box sx={{boxShadow:'none', borderRadius:'20px ',
    display:'flex', justifyContent:'center',alignItem:'center',
    width:{xs:'356px',md:'320px',
    height:'326px',margin:'auto',
    marginTop:marginTop}}}> 
    

    <Link to={`/channel/${channelDetail?.id?.channelId}`} >
      <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'center ',textAlign:'center',color:'white'}}>  
        <CardMedia 
        
        image={channelDetail?.snippet?.thumbnails?.medium?.url || demoThumnailUrl}
        alt={channelDetail?.snippet?.title} 
        sx={{borderRadius:'50%',height:'180px',width:"180px" ,mb:1 ,border:'1px solid gray'
        }}/>

      <Typography varient='h6'>
        {channelDetail?.snippet?.title} 
        <CheckCircle sx={{color:'gray' ,fontSize:14,ml:'5px'}}/>
      </Typography>   

      {channelDetail?.statistics?.subscriberCount && 
      <Typography> {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers </Typography>
      }

     </CardContent>
    </Link>

    </Box>

  )
}

export default ChannelCard