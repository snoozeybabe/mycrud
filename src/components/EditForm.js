import React, { Component} from 'react';
import UserForm from './UserForm';
import Dialog from '@material-ui/core/Dialog';




class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
    }
  }
  render(){
    return (
      <Dialog
        onClose= {this.props.closeForm}
        open = {this.props.open}
      >
        <UserForm user={this.props.user} isNew={false} />
      </Dialog>
    )
  }
}

export default EditForm;