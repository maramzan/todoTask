import * as React from 'react';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/components/Copyright';
import Landing from './landing';
import { makeStyles } from '@mui/styles';
import bgImage from '../src/assets/bg.jpg'



const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor:'#41AFA9'
  },
}))

export default function Index() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Landing />
    </div>
    
  );
}
