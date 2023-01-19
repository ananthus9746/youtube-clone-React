
import React,{useEffect,useState} from 'react'
import {Box ,Typography} from '@mui/material'
import {useParams} from 'react-router-dom'
import { Videos} from './'
import {fetchFromAPI} from '../utils/fetchFromApi'


function SearchFeed() {
  const [videos,setVideos]=useState([])
  // we can read that search terms from Navbar search via useParams()
  const {searchTerm} =useParams()

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data)=>setVideos(data.items ))
  },[searchTerm])
  return (
    
      <Box p={2} sx={{overflow:'auto',height:'90vh',flex:2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>  
          Search Result for <span style={{color:'red'}}> {searchTerm}</span> videos
        </Typography>

        < Videos videos={videos}/>
      </Box>


  ) 
}

export default SearchFeed