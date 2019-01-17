import React, { Component } from 'react';
import { FormControl, Input, Button, TextField, Select, Chip, MenuItem, Checkbox, ListItemText, InputLabel } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';

//date
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';

// import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";


import './App.css';




const names = ['finance', 'health', 'canabbis', 'fitness', 'tech'];
const stages = ['Ontario Place', 'Innovation Centre', 'La Maison', 'Roger Centre'];
const countries = ['France', 'Canada', 'USA', 'England', 'China'];
const styles = theme => ({
  root: {
    display: 'flex',

    // flexWrap: 'nowrap',
    flexDirection: 'column',
    margin: '1%',
    width: '40%',
    border: '5px solid blue'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },


});


const modifiersStyles = {
  birthday: {
    color: 'blue',
    backgroundColor: '#ffc107',
  },

}

class App extends Component {

  state = {
    //dropdown
    company: "",
    opportunity: "",


    //text

    description: "",
    urlWebsite: "",
    backgroundImage: "",


    //multiselect

    industryValues: [],
    companyStage: [],


    companyModel: [],
    countries: [],

    //date picker


    startDate: new Date('2014-08-18T21:11:54'),
    endDate: null,



    show: false,


    location: "",

    imageUrl: "",
    loading: false,
    amount: Number,
    // user: [],
    labelWidth: 0,
  }

  componentwillMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef.current).offsetWidth,
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value

    })
  }


  // handleChange = ({ startDate, endDate }) => {
  //   startDate = startDate || this.state.startDate
  //   endDate = endDate || this.state.endDate
  //   if (startDate.isAfter(endDate)) {
  //     endDate = startDate
  //   }

  //   this.setState({ startDate, endDate })
  // }

  // handleStart = (startDate) => {
  //  this.setState({
  //    startDate : startDate
  //  })
  // }

  // handleEnd = (endDate) => {
  //   this.setState({
  //     endDate : endDate
  //   })
  // }


  handleDateChange = date => {
    this.setState({ startDate: date });
  };


  render() {


    const { classes } = this.props;



    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250,
        },
      },
    };



    return (




      <form className={classes.root} autoComplete="on">


        <FormControl className={classes.formControl}>

          <InputLabel ref={this.InputLabelRef} htmlFor="company-simple">Affiliated Company</InputLabel>
          <Select
            on
            onChange={this.handleChange.bind(this)}
            value={this.state.company}
            name="company"
            inputProps={{
              id: 'company-simple',
              // name :'opportunity'
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Rogers">Rogers</MenuItem>
            <MenuItem value="Bell">Bell</MenuItem>
            <MenuItem value="Freedom">Freedom</MenuItem>
            <MenuItem value="Virgin">Virgin</MenuItem>


          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel ref={this.InputLabelRef} htmlFor="opportunity-simple">Opportunity Type</InputLabel>
          <Select

            onChange={this.handleChange.bind(this)}
            value={this.state.opportunity}
            name="opportunity"
            inputProps={{
              id: "opportunity-simple",
              // name :'opportunity'
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Debt Financing">Debt Financing</MenuItem>
            <MenuItem value="Equity Financing">Equity Financing</MenuItem>
            <MenuItem value="Events">Events</MenuItem>
            <MenuItem value="Pitch Competitions">Pitch Competitions</MenuItem>
            <MenuItem value="Innovation Challenges">Innovation Challenges</MenuItem>
            <MenuItem value="Pitch Competitions">Pitch Competitions</MenuItem>
            <MenuItem value="Grants">Grants</MenuItem>
            <MenuItem value="Hackathon">Hackathons</MenuItem>

          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <TextField
            id="filled-dense"
            label="Opportunity Name"
            // className={classes.FormControl}
            margin="dense"
            variant="filled"
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            required
            id="filled-multiline-flexible"
            label="Description"
            multiline
            rowsMax="4"
            value={this.state.multiline}
            // onChange={this.handleChange('multiline')}
            // className={classes.textField}
            margin="normal"
            // helperText="hello"
            variant="filled"
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <TextField
            id="filled-dense"
            label="Website-URL"
            // className={classNames(classes.textField, classes.dense)}
            margin="dense"
            variant="filled"
          />
        </FormControl>

        <FormControl className={classes.formControl}>
          <TextField
            id="filled-dense"
            label="Background Image URL"
            // className={classNames(classes.textField, classes.dense)}
            margin="dense"
            variant="filled"
          />
        </FormControl>



        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-checkbox" > • Industry (multiselect from predefined list)</InputLabel>
          <Select
            multiple
            name="industryValues"
            value={this.state.industryValues}
            onChange={this.handleChange.bind(this)}
            input={<Input id="select-multiple-checkbox" />}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {names.map(name => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={this.state.industryValues.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>



        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-checkbox" > • Industry (multiselect from predefined list)</InputLabel>
          <Select
            multiple
            name="companyStage"
            value={this.state.companyStage}
            onChange={this.handleChange.bind(this)}
            input={<Input id="select-multiple-checkbox" />}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {stages.map(name => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={this.state.companyStage.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>





        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-checkbox" > • Company Model(multiselect from predefined list)</InputLabel>
          <Select
            multiple
            name="companyModel"
            value={this.state.companyModel}
            onChange={this.handleChange.bind(this)}
            input={<Input id="select-multiple-checkbox" />}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {stages.map(name => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={this.state.companyModel.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>


        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-multiple-checkbox" > • Countries (multiselect from predefined list)</InputLabel>
          <Select
            multiple
            name="countries"
            value={this.state.countries}
            onChange={this.handleChange.bind(this)}
            input={<Input id="select-multiple-checkbox" />}
            renderValue={selected => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {countries.map(name => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={this.state.countries.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {(() => {
          switch (this.state.opportunity) {
            case "Events":
              return (

                <>
                  <TextField
                    id="filled-dense"
                    label="Opportunity Name"
                    // className={classes.FormControl}
                    margin="dense"
                    variant="filled"
                  />


      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container className={classes.grid} justify="space-around">
          <DatePicker
            margin="normal"
            label="Date picker"
            value={this.StartDate}
            onChange={this.handleDateChange}
          />
          <TimePicker
            margin="normal"
            label="Time picker"
            value={this.startDate}
            onChange={this.handleDateChange}
          />
        </Grid>
      </MuiPickersUtilsProvider>

</>
            
              )

            case "Equity Financing":
              return
            case "ddd":
              return
            case "Pitch Competitions":
              return
            case "Innovation Challenges":
              return
            case "Pitch Competitions":
              return
            case "Grants":
              return
            case "Hackathons":
              return
            default:
              return null;
          }
        })()}






      </form>



    );
  }
}

export default withStyles(styles)(App);
