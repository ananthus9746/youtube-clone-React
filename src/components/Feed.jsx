import React,{useEffect,useState} from 'react'
import {Box,Stack,Typography} from '@mui/material'

import { Videos,SideBar,Loader} from './'

import {fetchFromAPI} from '../utils/fetchFromApi'


function Feed() {

  const [selectedCatagory,setSelectedCatagory]=useState('New')
  const [videos,setVideos]=useState([])

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCatagory}`).then((data)=>setVideos(data.items ))
  },[selectedCatagory])

  if(!videos.length) return <Loader/>


  return (



    <Stack sx={{flexDirection:{sx:'column',md:'row'}}}>  
    

      <Box sx={{height:{sx:'auto',md:'92vh'},borderRight:'1px solid gray',px:{sx:0,md:2}}}>

        <SideBar selectedCatagory={selectedCatagory} setSelectedCatagory={setSelectedCatagory}/>

        <Typography className='copyright'  sx={{mt:1.5,color:'white'}}>
          Copyright 2023 Ananthu 
        </Typography>
      </Box>


      <Box p={2} sx={{overflow:'auto',height:'90vh',flex:2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>  
          {selectedCatagory} 
          <span style={{color:'red'}}> videos</span>
        </Typography>

        < Videos videos={videos}/>
      </Box>

      

    </Stack>

  ) 
}

export default Feed