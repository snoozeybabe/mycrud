import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ListUser from '../components/ListUser';
import { fetchedUsers, deleteUser } from '../actions';
//import { fetchUsers } from '../sagas';


class ListUserContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchedUsers());
  }

  _removeUserList =(id) => {
      const { dispatch } = this.props;      
      dispatch(deleteUser(id));
  }
  render() {
    return (
      <ListUser 
        users={this.props.data ? this.props.data : []} 
        loading={this.props.loading} 
        onRemove={this._removeUserList}
      />
    );
  }
}


const mapStateToProps = state => {
  return { 
    data: state.data.users,
    loading : state.data.loading,
    openModal : false,
  };
}

export default connect(mapStateToProps)(ListUserContainer); 