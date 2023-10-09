import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import { useNavigate} from 'react-router';


export default function AssignmentCard({id, route, uri, label, description}) {
  const navigation = useNavigate();

  return (
    <Card onClick={()=>{navigation(route)}} sx={{ maxWidth: 345, margin:2 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {id}
          </Avatar>
        }

        title={label}
        subheader=""
      />
      <CardMedia
        component="img"
        height="194"
        image={uri}
        alt={uri}
      />
      <CardContent>
      <Typography gutterBottom variant="h7" component="div">
          Topic : 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
