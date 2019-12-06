import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Job({ job }) {
  const classes = useStyles();

  return (
    <div className="job">
      {job.title}{' @ '}
      {job.company}

      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {job.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {job.company}
          </Typography>
          <Typography variant="body2" component="p">
            {job.location}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link href={job.url} target="_blank" rel="noopener noreferrer">
              Learn More
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>

  )
}

export default Job;
