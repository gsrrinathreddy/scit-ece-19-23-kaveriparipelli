import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function Qualification(){
const [loader,setLoader] = useState(true);
    const [Qualification,setQualification] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Qualification')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setQualification(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])
    return(
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualification</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Kaveri" src="https://th.bing.com/th/id/OIP.RYfMgXrtO8xT7uFNOqBo0wAAAA?w=157&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree chaitanya institute of technological sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                75% CGPA
              </Typography>
              {" — B tech, Electronics and Communication Engineering"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Kaveri" src="https://www.careerindia.com/college-logo/128x128/9/Sree-Chaitanya-Institute-of-Technological-Sciences-Karimnagar.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Sree Chaitanya institute of technological sciences"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                91% CGPA
              </Typography>
              {" — Intermediate studies with MPC"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Kaveri" src="https://th.bing.com/th/id/OIP.gblpINnprQQsEtY_daXU7gAAAA?w=150&h=87&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
        </ListItemAvatar>
        <ListItemText
          primary="Pragathi high school"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                97% CGPA
              </Typography>
              {' — Higher Secondory Education '}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}