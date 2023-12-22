import * as React from 'react';

import './Selection.css';
import "./Home.css";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Paper } from '@mui/material';
import { useState, } from "react";

import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';

const Selection=()=> {
    const [Language, setLanguage] = useState("")
  
    const handleChange = (event) => {
      setLanguage(event.target.value);
    };
    const [Genres, setGenres] = React.useState('');
  
    const handleCh = (event) => {
      setGenres(event.target.value);
    };
    const [Location, setLocation] = React.useState('');
  
    const handleCha = (event) => {
      setLocation(event.target.value);
    };
  
  const cardImgStyle = {
    width:"670px",
    height:"340px",
  };


  return (
    <div>
    <div>
        <Paper elevation={5} style={{backgroundColor:"white"}}>
          <Box sx={{ minWidth: 400 }} xs="4" className="spa">
            <FormControl className='st'>
              <InputLabel id="demo-simple-select-label"><b>Language</b></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Language}
                label="Language"
                onChange={handleChange}
              >
                <MenuItem value={21}>Tamil</MenuItem>
                <MenuItem value={22}>Malayalam</MenuItem>
                <MenuItem value={23}>Telugu</MenuItem>
                <MenuItem value={24}>Kanada</MenuItem>
              </Select>
            </FormControl>
            <FormControl className='sti' >
              <InputLabel id="demo-simple-select-label"><b>Location</b></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Location}
                label="Location"
                onChange={handleCha}
              >
                <MenuItem value={1}> <Link className='sec' to='/sec' >Tamilnadu</Link></MenuItem>
                <MenuItem value={2}>Kerala</MenuItem>
                <MenuItem value={3}>Karnataka</MenuItem>
                <MenuItem value={4}>Andhra pradesh</MenuItem>
              </Select>
            </FormControl>
            <FormControl className='sta'>
              <InputLabel id="demo-simple-select-label"><b>Genres</b></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Genres}
                label="Genres"
                onChange={handleCh}
              >
                <MenuItem value={11}>Romantic</MenuItem>
                <MenuItem value={12}>Thriller</MenuItem>
                <MenuItem value={13}>Comedy</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Paper>
      </div>
    <div className='movies'>
      <div>
    <Card sx={{ display: 'flex' }} style={{maxWidth:800,maxHeight:"90%",margin:"40px",textAlign:"center"}} >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent >
          <Typography   >
          <b  style={{color:"black"}}>Movie Name:</b><p style={{color:"black"}}>Joe</p>
          <b  style={{color:"black"}}>Location:  </b><p style={{color:"black"}}>coimbatore,Tamilnadu</p>
          <br/><br/>
          <Link className='seats' to='/seats' ><button >Tickets</button></Link>
          </Typography>
        </CardContent>
       
      </Box>
      <CardMedia
        component="img"
        style={cardImgStyle}
        image="https://static.toiimg.com/photo/105240225.cms"
        alt="Live from space album cover"
      />
    </Card>
    <Card sx={{ display: 'flex' }} style={{maxWidth:800,maxHeight:"90%",margin:"40px",marginLeft:"700px",textAlign:"center"}} >
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent >
        
        <b>Movie Name:</b><p  style={{color:"black"}}>Antony</p>
        <b>Location:  </b><p  style={{color:"black"}}>cochin,Kerala</p>
        <br/><br/>
        <Link className='seats' to='/seats' ><button >Tickets</button></Link>
        
      </CardContent>
     
    </Box>
    <CardMedia
      component="img"
      style={cardImgStyle}
      image="https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-101613184/101613184.jpg"
      alt="Live from space album cover"
    />
  </Card>
    <Card sx={{ display: 'flex' }} style={{maxWidth:800,maxHeight:"90%",margin:"40px",textAlign:"center"}} >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent >
        
          <b>Movie Name:</b><p  style={{color:"black"}}>Rules Ranjann</p>
          <b>Location:  </b><p  style={{color:"black"}}>Hydrabad,Andrapradesh</p>
          <br/><br/>
          <Link className='seats' to='/seats' ><button >Tickets</button></Link>
          
        </CardContent>
       
      </Box>
      <CardMedia
        component="img"
        style={cardImgStyle}
        image="https://static.toiimg.com/thumb/msid-103612838,width-1070,height-580,imgsize-85560,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
        alt="Live from space album cover"
      />
    </Card>
    <Card sx={{ display: 'flex' }} style={{maxWidth:800,maxHeight:"90%",margin:"40px",marginLeft:"700px",textAlign:"center"}} >
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent >
        
        <b>Movie Name:</b><p  style={{color:"black"}}>Aana</p>
        <b>Location:  </b><p  style={{color:"black"}}>Bangalore,Karnataka</p>
        <br/><br/>
        <Link className='seats' to='/seats' ><button >Tickets</button></Link>
        
      </CardContent>
     
    </Box>
    <CardMedia
      component="img"
      style={cardImgStyle}
      image="https://kannada.cdn.zeenews.com/kannada/sites/default/files/2023/03/02/288292-kannada-movie.png"
      alt="Live from space album cover"
    />
  </Card>
    <Card sx={{ display: 'flex' }} style={{maxWidth:800,maxHeight:"90%",margin:"40px",textAlign:"center"}} >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent >
       
          <b>Movie Name:</b><p  style={{color:"black"}}>Adrishya Jalakangal</p>
          <b>Location:  </b><p  style={{color:"black"}}>palakkad,Kerala</p>
          <br/><br/>
          <Link className='seats' to='/seats' ><button >Tickets</button></Link>
       
        </CardContent>
       
      </Box>
      <CardMedia
        component="img"
        style={cardImgStyle}
        image="https://images.ottplay.com/images/tovino-thomas-and-nimisha-sajayan-0.jpg"
        alt="Live from space album cover"
      />
    </Card>
    </div>
  </div>
  </div>
  );
}
export default Selection