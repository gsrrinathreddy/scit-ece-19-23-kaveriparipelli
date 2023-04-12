import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useState,useEffect } from 'react';
import axios from 'axios';

export default function Hobbies() {
  const [loader,setLoader]=useState(true);
  const[Hobby,setHobby]=useState(null)

  let connectToServer = async () => axios.get('http://localhost:8000/Hobbies')
                                          .then(res=>{
                                            console.log(res);
                                          }).catch(err=>console.log(err))

connectToServer();
return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">December</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://th.bing.com/th?q=Painting+Hobby&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247',
    title: 'Painting',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://th.bing.com/th/id/OIP.aA1zVCrX9q5vy0ZEOtOtkAHaET?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    title: 'Listening music',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    
    cols: 2,
  },
  {
    img: 'https://th.bing.com/th/id/OIP.1FMjobhMf_ceLU2D2J2l0gHaKL?w=207&h=285&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    title: 'Drawing',
    
    cols: 2,
  },
  {
    img: 'https://th.bing.com/th/id/OIP.SFmZoeTYOla0uWFetnZIogHaFs?w=226&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    title: 'Food',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
];