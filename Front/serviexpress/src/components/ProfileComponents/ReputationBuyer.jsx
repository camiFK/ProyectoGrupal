import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {getUser} from '../../redux/action'




export default function ReputationBuyer(){


    const dispatch = useDispatch();
    const user = useSelector(state => state.user);


    useEffect(() => {
        dispatch(getUser());

    },[dispatch])

    let ar = [1,2,3,4,5,6]
    console.log(user);
     return <div>
            <Stack  alignItems="center">
              <Avatar alt="Avatar" src={user.avatar_image}  sx={{ width: 100, height: 100 }}/>
              <Typography gutterBottom variant="h2" component="div">
                {user.name + "  " + user.last_name}
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            As Buyer..
          </Typography>

            <Stack    direction="row" >
            {user.buyer_opinions && ar.map(e => <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
        />
           <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
            </CardContent>
          </CardActionArea>

             </Card>    

                )   }
          </Stack>

     </Stack>
  </div>

};