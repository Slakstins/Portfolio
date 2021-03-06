import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function ProjectCard(props) {
  const classes = useStyles();

  const handleLearnMoreClick = (event) =>{
     const newWindow = window.open(props.githubURL);
  }

  //use cardActionArea to make part of it clickable
  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      <CardActions>

        <Button size="small" color="primary" onClick={handleLearnMoreClick}>
          View on GitHub
        </Button>
      </CardActions>
    </Card>
  );
}
