import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(2),
    backgroundImage: 'url()',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '400px',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
    padding: theme.spacing(6),
    paddingRight: 0,
    fontFamily: 'fontFamily',
    },
    
  },
  title:{
    fontFamily:"fontFamily",
    fontSize: "6px",
  },

  Tittle:{
    fontSize: "60px",
    letterSpacing: "-0.5px",
    lineHeight: 1
  }
}));

export default function MainPost(props) {
  const classes = useStyles();
  const { post } = props;
  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <div className={classes.overlay}/>
      <Grid container>
        <Grid item md={5}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom className={classes.Tittle}>
              {post.title}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainPost.propTypes = {
  post: PropTypes.object,
};