import React from 'react'
import {Stack,Box} from '@mui/material'

import {ChannelCard,VideoCard,Loader} from './'


function Videos({videos,direction}) {

  if(!videos.length) return <Loader/>

  return (
   <Stack direction={direction ||'row'} flexWrap='wrap' justifyContent='start' gap={2}  >

    {/* {console.log('videos',videos)} */}
    {/* what is index ...react require a key value for ever map  thats why i used it*/}
    {videos.map((item,index)=>
      <Box key={index}>
        {item.id.videoId && <VideoCard video={item}/>}
        {item.id.channelId && <ChannelCard channelDetail ={item}/>}
      </Box>
    )}
   </Stack>
  )
}

export default Videos