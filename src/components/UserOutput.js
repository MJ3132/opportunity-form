import React from "react";

import { FormControl, Input, Button, TextField, Select, Chip, MenuItem, Checkbox, ListItemText, InputLabel } from '@material-ui/core/';
import ReactDOM from 'react-dom';

//date
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';


// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    width: 100,
  },
  media: {
    height: 10,
  },
};

const UserOutput = (props) => (

  <Grid item xs={6}>

    <Card className={props.card} style={{ margin: "2%", }} >
      <CardActionArea>
        <CardMedia
          className={props.media}

          title="herro"

        >
          <img src={props.backgroundImg} />
        </CardMedia>


        <CardContent>
          <Typography gutterBottom variant="h5" component="h3" style={{ display: 'flex' }}>
            <Grid container  >

              <Avatar alt="Logo" src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Virgin-logo.svg" />
              <h5>{props.company} </h5>
            </Grid>

          </Typography>
          <Typography gutterBottom variant="h5" component="h2" style={{ textAlign: 'center' }}>
            {props.title}
          </Typography>
          <br />
          <br />
          <br />
          <Typography variant="headline">
            {props.description.split("\n").map((i, key) => {
              return <div key={key}>{i}</div>;
            })}
          </Typography>



          <Typography style={{ display: 'flex', justifyContent: "space-around", border: "2px solid black" }} component="p">
            <h5>Start Date : </h5>
            <p>{JSON.stringify(props.startDate)} </p>
            <h5>End Date : </h5>
            <p>{JSON.stringify(props.endDate)} </p>
          </Typography>
          <Typography style={{ display: 'flex', justifyContent: "space-between" }} component="p">
            <h5>Location : {props.location}</h5>
          </Typography>


        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button style={{ display: 'flex', textAlign: "center", justifyContent: "center" }} size="large" variant="contained" color="secondary">
          Sign up
      </Button>

        <h5> Industries : </h5>
        <Typography style={{ display: 'flex', flexDirection: "flex-end", justifyContent: "space-between" }} component="p" >
          {props.industry.map(industry =>

            <p>  | {industry} | </p>

          )}
        </Typography>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  </Grid>

)


export default withStyles(styles)(UserOutput);