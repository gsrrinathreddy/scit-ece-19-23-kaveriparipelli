import {useState,useEffect} from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';

export default function Aboutus(){
const [loader,setLoader] = useState(true);
    const [aboutus,setAboutus] = useState(null);

    const connectToServer = async  () => axios.get('http://localhost:8000/Aboutus')
                                            .then(res=>{
                                        
                                                console.log(res.data);
                                                setAboutus(res.data);
                                                setLoader(false)
                                            }).catch(err=>console.log(err))
useEffect(()=>{
   connectToServer();
},[])
    return(
        <>
<Typography>Name: Kaveri Paripelly</Typography>
<Typography>Father Name: Hariprasad</Typography>
<Typography>Mother Name: Swaroopa</Typography>
<Typography>Email: kaveriparipelly@gmail.com</Typography>
<Typography>Phone No.: 6281117858</Typography>
        </>
        
    )
    }