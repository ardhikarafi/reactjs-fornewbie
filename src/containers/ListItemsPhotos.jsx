import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: 20,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

function ListItemsPhotos(props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
    {/* {props.photos.map(element =>)} */}
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Ardhika Rafi" src="data:image/jpeg;base64,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" />
        </ListItemAvatar>
        <ListItemText
          primary="Apakah anda siap belajar?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ardhika Rafi
              </Typography>
              {" Ramadhan Bulan Penuh Berkah"}
            </React.Fragment>
          }
        />
      </ListItem>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Ardhika Rafi" src="data:image/jpeg;base64,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" />
        </ListItemAvatar>
        <ListItemText
          primary="Apakah anda siap belajar?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" Selamat menjalankan Ibadah Puasa"}
            </React.Fragment>
          }
        />
      </ListItem>
      
      
    </List>
  );
}

export default ListItemsPhotos;
