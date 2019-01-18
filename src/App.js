import React, { Component } from 'react';
import { FormControl, Input, Button, TextField, Select, Chip, MenuItem, Checkbox, ListItemText, InputLabel } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import UserOutput from './components/UserOutput';
//date
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';

// import DatePicker from "react-datepicker";

// google geolocation

import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import "react-datepicker/dist/react-datepicker.css";


import './App.css';




const names = ['finance', 'health', 'canabbis', 'fitness', 'tech'];
const stages = ['Ontario Place', 'Innovation Centre', 'La Maison', 'Roger Centre'];
const countries = ['France', 'Canada', 'USA', 'England', 'China'];
const styles = theme => ({
  root: {
    display: 'flex',
    // background:'url("https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")',
    // flexWrap: 'nowrap',
    flexDirection: 'column',
    opacity: '0.87',
    margin: '1%',
    width: '45%',
    border: '5px solid  #45A29E ',
    background:"white"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },


  button: {
    margin: theme.spacing.unit,
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
    opportunityName:"Title",
    description: "",
    urlWebsite: "",
    backgroundImage:"https://images.unsplash.com/photo-1464647894560-76b09dcee6b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",

    //multiselect

    industryValues: [],
    companyStage: [],


    companyModel: [],
    countries: [],


    financing: "",
    financeAmount: Number,

    //date picker


    //Events
    startDate: new Date('2014-08-18T21:11:54'),
    endDate: new Date('2014-08-18T21:11:54'),
    location: "",



    // Pitch Competitions
    prize: "",
    dateDeadline: new Date('2014-08-18T21:11:54'),



    // Grant Amount

    grantAmount: Number,




    //  Innovation Challenges

    objective: "",


    show: false,




    loading: false,
    amount: Number,
    // user: [],
    labelWidth: 0,


    gmapsLoaded: false,
  }

  componentwillMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef.current).offsetWidth,
    });
  }

  componentDidMount() {
    window.initMap = this.initMap
    const gmapScriptEl = document.createElement(`script`)
    gmapScriptEl.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCIwrwTzpiNbYCNE3IrYNEeElIluiUrV8c&libraries=places&callback=initMap`
    document.querySelector(`body`).insertAdjacentElement(`beforeend`, gmapScriptEl)
  }


  initMap = () => {
    this.setState({
      gmapsLoaded: true,
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value

    })
  }

  event

  handleDateSChange = date => {
    this.setState({ startDate: date });
  };


  handleDateEChange = date => {
    this.setState({ endDate: date });
  };


  handleDeadline = date => {
    this.setState({ dateDeadline:date });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  }


  handleLocationChange = address => {
    this.setState({ location: address });

  }
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

      <>
      <Grid
  style={{background:'url(https://i1.wp.com/news.canningspurple.com.au/wp-content/uploads/2018/02/180131-CPA-6-Tips-Working-the-Podium-at-Conferences.jpg?fit=1920%2C848&ssl=1)no-repeat center center',backgroundSize:"cover"}}
  container
  direction="row"
  justify="space-between"
  alignItems="flex-start"
>   



      <form className={classes.root} autoComplete="on">

         <FormControl className={classes.formControl}>
        <img src="http://startupfuel.tv/wp-content/uploads/2018/12/abtract-colours-logo-1.png" />
              </FormControl>

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
            <MenuItem value="Events">Events</MenuItem>
            <MenuItem value="Pitch Competitions">Pitch Competitions</MenuItem>
            <MenuItem value="Innovation Challenges">Innovation Challenges</MenuItem>
            <MenuItem value="Pitch Competitions">Pitch Competitions</MenuItem>
            <MenuItem value="Grants">Grants</MenuItem>
            <MenuItem value="Hackathons">Hackathons</MenuItem>

          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <TextField
            id="filled-dense"
            label="Opportunity Name"
            name="opportunityName"
            // className={classes.FormControl}
            onChange={this.handleChange.bind(this)}
            margin="dense"
            variant="filled"
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            required
            id="filled-multiline-flexible"
            label="Description"
            name="description"
            multiline
            rowsMax="4"
            // value={this.state.description}
            onChange={this.handleChange.bind(this)}
            className={classes.textField}
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
        <Input
                  name="backgroundImage"
                  onChange={this.handleChange.bind(this)}
                  type="url" placeholder="background Img URL" required
                  size="100"
                />

          </FormControl>

        <FormControl className={classes.formControl}>
          <input
            // accept="image/*"
            name="backgroundImage"
            onChange={this.handleChange.bind(this)}
            className={classes.input}
            id="outlined-button-file"
            multiple
            type="file"
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
          <InputLabel htmlFor="select-multiple-checkbox" > • Stages (multiselect from predefined list)</InputLabel>
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



        <FormControl className={classes.formControl}>

          <InputLabel ref={this.InputLabelRef} htmlFor="company-simple"> •Financing</InputLabel>
          <Select
            onChange={this.handleChange.bind(this)}
            value={this.state.financing}
            name="company"
            inputProps={{
              id: 'company-simple',
              // name :'opportunity'
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Loans">Debt Financing</MenuItem>
            <MenuItem value="Partnerships">Equity Financing</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="financeAmount" > Funding Amount</InputLabel>
          <Input
            value={this.state.financeAmount}
            onChange={this.handleChange.bind(this)}
            type="number" name="financeAmount"
            min="1"
            size="100"
          />
        </FormControl>

        {(() => {
          switch (this.state.opportunity) {
            case "Events":
              return (

                <>



                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container className={classes.grid} justify="space-around">
                      <DatePicker
                        margin="normal"
                        label="Start Date"
                        value={this.state.startDate}
                        onChange={this.handleDateSChange.bind(this)}
                      />
                      <TimePicker
                        margin="normal"
                        label="Start Time"
                        value={this.state.startDate}
                        onChange={this.handleDateSChange.bind(this)}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container className={classes.grid} justify="space-around">
                      <DatePicker
                        margin="normal"
                        label="End Date"
                        value={this.state.endDate}
                        onChange={this.handleDateEChange}
                      />
                      <TimePicker
                        margin="normal"
                        label="End Time"
                        value={this.state.endDate}
                        onChange={this.handleDateEChange}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>

                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="amount" > • Tickets </InputLabel>
                    <Input
                      value={this.state.amount}
                      onChange={this.handleChange.bind(this)}
                      type="number" name="amount"
                      min="1"
                      size="100"
                    />
                  </FormControl>

                  <FormControl className={classes.formControl}>
                    <PlacesAutocomplete
                      value={this.state.location}
                      onChange={this.handleLocationChange.bind(this)}
                      onSelect={this.handleSelect.bind(this)}

                    >
                      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div style={{ display: 'flex', flexDirection: "column", width: "100%" }}>
                          <input style={{ width: '100%', display: 'block', textAlign: "center" }}
                            {...getInputProps({
                              placeholder: 'Enter Postal Code or Adress of The Event',
                              // className: 'location-search-input',
                            })}
                          />

                          <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                              const className = suggestion.active
                                ? 'suggestion-item--active'
                                : 'suggestion-item';
                              // inline style for demonstration purpose
                              const style = suggestion.active
                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                              return (
                                <div
                                  {...getSuggestionItemProps(suggestion, {
                                    className,
                                    style,
                                  })}
                                >
                                  <span>{suggestion.description}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </PlacesAutocomplete>
                  </FormControl>

              
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />


                </>

              )

            case "Equity Financing":
              return
            case "ddd":
              return
            case "Pitch Competitions":
              return (
                <>

                  <TextField
                    id="filled-dense"
                    label="Pitch prize (text area)"
                    onChange={this.handleChange.bind(this)}
                    margin="dense"
                    variant="filled"
                    name="prize"
                  />

                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container className={classes.grid} justify="space-around">
                      <DatePicker
                        margin="normal"
                        label="Deadline day"
                        value={this.state.dateDeadline}
                        onChange={this.handleDeadline.bind(this)}
                        name="dateDeadline"
                      />
                      <TimePicker
                        margin="normal"
                        label="Deadline time"
                        value={this.state.dateDeadline}
                        onChange={this.handleDeadline.bind(this)}
                        name="dateDeadline"

                      />
                    </Grid>
                  </MuiPickersUtilsProvider>


                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container className={classes.grid} justify="space-around">
                      <DatePicker
                        margin="normal"
                        label="Start Date"
                        value={this.state.startDate}
                        onChange={this.handleDateChange}
                        name="deadline"
                      />
                      <TimePicker
                        margin="normal"
                        label="Start Time"
                        value={this.state.startDate}
                        onChange={this.handleDateChange}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>

                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container className={classes.grid} justify="space-around">
                      <DatePicker
                        margin="normal"
                        label="End Date"
                        value={this.state.endDate}
                        onChange={this.handleDateEChange}
                      />
                      <TimePicker
                        margin="normal"
                        label="End Time"
                        value={this.state.endDate}
                        onChange={this.handleDateEChange}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>

                </>



              )
            case "Innovation Challenges":
              return (
                <>
                  <TextField
                    id="filled-dense"
                    label="Innovation Prize (text area)"
                    onChange={this.handleChange.bind(this)}
                    margin="dense"
                    variant="filled"
                    name="prize"
                  />

                  <TextField
                    id="filled-dense"
                    label="Objective (text area)"
                    onChange={this.handleChange.bind(this)}
                    margin="dense"
                    variant="filled"
                    name="objective"
                  />

                </>

              )

            case "Grants":
              return (

                <>

                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grantAmount" > Grant Amount</InputLabel>
                    <Input
                      value={this.state.grantAmount}
                      onChange={this.handleChange.bind(this)}
                      type="number" name="grantAmount"
                      min="1"
                      size="100"
                    />
                  </FormControl>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container className={classes.grid} justify="space-around">
                      <DatePicker
                        margin="normal"
                        label="Deadline day"
                        value={this.state.dateDeadline}
                        onChange={this.handleDeadline.bind(this)}
                        name="dateDeadline"
                      />
                      <TimePicker
                        margin="normal"
                        label="Deadline time"
                        value={this.state.dateDeadline}
                        onChange={this.handleDeadline.bind(this)}
                        name="dateDeadline"

                      />
                    </Grid>
                  </MuiPickersUtilsProvider>

                </>

              )
            case "Hackathons":
              return (
                <>
                  <TextField
                    id="filled-dense"
                    label="Hackathon Prize (text area)"
                    onChange={this.handleChange.bind(this)}
                    margin="dense"
                    variant="filled"
                    name="prize"
                  />

                  <TextField
                    id="filled-dense"
                    label=" Hackathon Objective (text area)"
                    onChange={this.handleChange.bind(this)}
                    margin="dense"
                    variant="filled"
                    name="objective"
                  />

                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container className={classes.grid} justify="space-around">
                      <DatePicker
                        margin="normal"
                        label="Deadline day"
                        value={this.state.dateDeadline}
                        onChange={this.handleDeadline.bind(this)}
                        name="dateDeadline"
                      />
                      <TimePicker
                        margin="normal"
                        label="Deadline time"
                        value={this.state.dateDeadline}
                        onChange={this.handleDeadline.bind(this)}
                        name="dateDeadline"

                      />
                    </Grid>
                  </MuiPickersUtilsProvider>


                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container className={classes.grid} justify="space-around">
                      <DatePicker
                        margin="normal"
                        label="Start Date"
                        value={this.state.startDate}
                        onChange={this.handleDateChange}
                        name="deadline"
                      />
                      <TimePicker
                        margin="normal"
                        label="Start Time"
                        value={this.state.startDate}
                        onChange={this.handleDateChange}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>

                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Grid container className={classes.grid} justify="space-around">
                      <DatePicker
                        margin="normal"
                        label="End Date"
                        value={this.state.endDate}
                        onChange={this.handleDateEChange}
                      />
                      <TimePicker
                        margin="normal"
                        label="End Time"
                        value={this.state.endDate}
                        onChange={this.handleDateEChange}
                      />
                    </Grid>
                  </MuiPickersUtilsProvider>

                </>

              )
            default:
              return null;
          }
        })()}



        <Button variant="contained" color="secondary" className={classes.button}>
        Post Opportunity
      </Button>


      </form>

      



<UserOutput
  company ={this.state.company}
  opportunity={this.state.opportunity}

  title={this.state.opportunityName}
  description={this.state.description}
  website={this.state.urlWebsite}
  backgroundImg={this.state.backgroundImage}

  industry = {this.state.industryValues}
  stage = {this.state.companyStage}
  value={this.state.description}


  startDate = {this.state.startDate}
  endDate = {this.state.endDate}
  location={this.state.location}

 />
 

   </Grid>

        </>
    );
  }
}

export default withStyles(styles)(App);
