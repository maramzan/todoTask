import * as React from 'react';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/components/Copyright';
import Landing from './landing';
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
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
