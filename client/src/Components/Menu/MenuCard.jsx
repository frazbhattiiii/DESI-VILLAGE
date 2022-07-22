import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import {Button,Typography} from '@mui/material';
import Card from '@mui/joy/Card';
import StarIcon from '@mui/icons-material/Star';
import {useNavigate} from "react-router-dom";
export default function MenuCard(props) {
    const {name,price,image,id,timeForDelivery,Rating} = props.item;
    console.log(timeForDelivery)
    const navigate = useNavigate();
    return (
        <Card variant="outlined" sx={{ minWidth: '250px' ,
            borderColor:'#ccf0d5'
        }}>

            <AspectRatio minHeight="120px" maxHeight="200px" >
                <img
                    src={image}
                    alt=""
                />
            </AspectRatio>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Box sx={{display:'flex',flexDirection:"row",gap:10}}>
                <Typography variant="h7" fontFamily='poppins' fontSize="md" sx={{ alignSelf: 'flex-start' }}>
                    {name}
                </Typography>
                <Typography variant="h8" fontWeight="bold">
                    ${price}.00
                </Typography>
                </Box>
                <Box sx={{
                    display:"flex",
                    justifyContent:'flex-start',
                    alignItems:'center',
                }}>

                <Typography variant="body2" >{Rating}
                </Typography>
                    <StarIcon sx={{
                        color:'yellow'
                    }}/>

                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <div>
                    <Typography  variant ='body2' fontSize="lg" fontWeight="lg" sx={{
                        marginTop:'.25rem',
                    }}>
                        {timeForDelivery}-{timeForDelivery+15}min
                    </Typography>
                </div>
                <Button
                    variant="text"
                    size="sm"

                    sx={{fontFamily:'poppins', ml: 'auto', fontWeight: 600 ,color:'black',backgroundColor:'pink'}}
                    onClick={()=>navigate(`/item/detail/${id}`)}>
                >
                    Explore
                </Button>
            </Box>
        </Card>
    );
}
