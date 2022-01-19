import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { DialogContent } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ImageResults(props) {

  const [open, setOpen] = React.useState(false);
  const [liked, setLike] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLike = () =>{
    if(liked){
      setLike(false)
    }
    else{
      setLike(true);
    }
  };

  return (
    <div>
      <IconButton variant="outlined" onClick={handleClickOpen}>
      <Typography style={{color:"white"}}>ready for take-off</Typography>
      <RocketLaunchOutlinedIcon style={{color: "white"}}/>   
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        style={{backgroundColor:'black', color: 'black'}}
      >
        <AppBar sx={{ position: 'relative' }} style={{backgroundColor:"black"}} >
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {props.images[0].title}
            </Typography>
            <IconButton sx={{backgroundColor: liked ? "gray": ""}} autoFocus color="inherit" onClick={handleLike}>
              <FavoriteBorderIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemText className='explanation' style={{margin: "auto"}}>
          {props.images[0].explanation}
          </ListItemText>
          <Divider />
          <ListItemText className='explanation'>
          {props.images[0].date}
          </ListItemText>
        </List>
        <DialogContent className='picture'>
        <img style={{height: "auto", width: "auto"}} src={props.images[0].url} alt=""/>
        </DialogContent>
      </Dialog>
    </div>
  );
}