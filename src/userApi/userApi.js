class Users {

  static getUserList(){
    fetch('/users')
    .then(res => res.json())
    .then( ({data}) => {
     // console.log("My res ", data);
      return JSON.stringify({
      type :'USER_LIST',
      users : data
      })
    })
    .catch(err => console.log(err))
  }

}

export default Users