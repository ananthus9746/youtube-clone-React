// const  axios = require("axios");
import axios from 'axios'

// const BASE_URL='https://youtube-v31.p.rapidapi.com'

// const BASE_URL='`https://www.googleapis.com/youtube/v3/'

// const options = {
//   url:BASE_URL,
//   params: {
  
//     maxResults: '50'
//   },

//   headers: {
//     'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };


// const options = {
//   url:BASE_URL,

//   params: {
//     maxResults: '50'
//   },

//   headers: {
//     'key': process.env.YOUTUBE_API_KEY ,
//   }
// };




// export const fetchFromAPI= async (url)=>{
//    const {data} =await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=New&key=AIzaSyDGprbdTVG1-9eb2WR6HV7vA4o6gOccieM&maxResults=50` )
//    console.log("fetch...",data)                                        //search?part=snippet&q=New
//    return data;
// }
//fetchFromAPI(`search?part=snippet&q=${selectedCatagory}`).then((data)=>setVideos(data.items ))
//search?part=snippet&q=New

export const fetchFromAPI= async (url)=>{


  console.log("fetchapi..",url)

  const {data} =await axios.get(`https://www.googleapis.com/youtube/v3/${url}&key=AIzaSyDGprbdTVG1-9eb2WR6HV7vA4o6gOccieM&maxResults=50` )
  console.log("fetch...",data)
  return data;
}



// const youtubeurl=`https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=4Y4YSpF6d6w&key=${process.env.URL_KEY}`
// export const fetchVideoDetailsAPI= async ()=>{
//   const {data} =await axios.get(youtubeurl)
//   return data;
// }
// const {data} =await axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });