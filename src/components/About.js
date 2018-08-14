import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core/'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import '../utils/react_dates_overrides.css';
import { SingleDatePicker } from 'react-dates';

const styles = {
  color : 'blue',
};

const divdate = {
  width : 500,
  height : 600,
  marginTop : 500
}


class About extends Component {
  constructor(props){
    super(props);
    this.state = {
      date : null, 
      focused : null
    };
  }

  render() {
    return (
      <div style={styles}>
        <div>
        <h1>About</h1>
        </div>
        <div style={divdate} >
        
        <Paper>       
          <SingleDatePicker
            small={true}
            block = {false}
            numberOfMonths={1}
            date = { this.state.date}
            onDateChange = { date => this.handleDateChange(date)}
            focused  = {this.state.focused}
            onFocusChange = {({focused}) =>this.setState({focused})}
            openDirection = "up"
            hideKeyboardShortcutsPanel = {true}
          />
        </Paper>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(About);