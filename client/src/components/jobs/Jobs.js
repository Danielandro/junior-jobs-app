import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Job from './Job';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  job: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  pageTitle: {
    textAlign: "center"
  }
}));


function Jobs({ jobs }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Typography variant="h1" className={classes.pageTitle}>
        Junior Developer Jobs
      </Typography>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {jobs.map(job => (
            <Grid key={job.id} item>
              <Job job={job} className={classes.job} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Jobs;