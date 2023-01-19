import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import {catagories} from '../utils/constance'

// const selectedCatagory='New'

function SideBar({selectedCatagory,setSelectedCatagory}) {
  return (
    <Stack direction="row" sx={{overflow:"auto",height:{sx:"auto",md:"95%"},flexDirection:{md:"column"}}}>

    {
      catagories.map((catagory)=>{
        return(
          <button
            onClick={()=>{setSelectedCatagory(catagory.name)}} 
            className='category-btn' style={{background:catagory.name===selectedCatagory && 'red',color:'white'}} key={catagory.name}>

            <span style={{marginRight:'15px',color:catagory.name!=selectedCatagory?'red':'white'}}>{catagory.icon}</span>
            <span style={{opacity:catagory.name!=selectedCatagory?'0.7':'1'}}>{catagory.name}</span>
          </button>
        )
      })
    }
  </Stack>


  )
}

export default SideBar