import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import{logo} from '../utils/constance'
import './navbar.css'
import SearchBar from './SearchBar'

function Navbar() {
  return (
    <Stack 
    direction="row"
    alignItems='center'
    p={2}
    sx={{position:'sticky',background:'#000',top:0,justifyContent:'space-between'}} >
      
    <Link to='/' style={{display:'flex',alignItems:'center'}}>
    <img className='logo' src={logo} alt="" />
    </Link>


    <SearchBar/>
    


    </Stack>
  )
}

export default Navbar
