import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import News from './components/News-paper'
//import Clouds from './clouds'
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  name:{
    marginTop: theme.spacing(5),
    textAlign: 'center',
  },
  as:
  {
    position: 'relative',
    margin: '#fff',
  },
  mainGrid: {
    flex : 1,
  },
  main:{
    backgroundColor: '#000',
  },
  containers:{
    backgroundColor: '#fff',
    marginTop: '40px',
  },
}));


export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment className={classes.main}>
      <CssBaseline />
      <Container maxWidth="xl" className={classes.containers}>
        <Header title="Twitter's News Bot"/>
      <News></News>
      <div className={classes.name}>
      <Typography variant="h2" component="h2" gutterBottom className={classes.as}>Nubes de Palabras</Typography>
      <Divider />
      </div>    
      </Container>
      <Footer title="Universidad Nacional de San Antonio Abad" description="Escuela Profesional de Ing. Informática y de Sistemas" />
    </React.Fragment>
  );
}