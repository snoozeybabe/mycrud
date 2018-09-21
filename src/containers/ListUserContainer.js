import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { displayUserList }from '../actions';
import ListUser from '../components/ListUser';
//import { bindActionCreators } from 'redux'

import { fetchUsersList } from '../actions';
class ListUserContainer extends Component {

  constructor(props){
    super(props);

  }

  componentWillMount(){
      this.props.dispatch(fetchUsersList())
    
    //const { actions } = this.props;
    //this.props.actions.displayUserList();
  }
  render(){
    return(
      <ListUser users={this.props.users} />
    );
  }
}

// ListUserContainer.propTypes = {
//   users : PropTypes.array.isRequired
// };

function mapStateToProps(state, ownProps) {
  //TODO 
  return {
    users : state.users
  }
}



export default connect(mapStateToProps)(ListUserContainer);