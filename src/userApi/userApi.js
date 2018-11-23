export const getUserList =  () =>{
  fetch('/users')
  .then(res => res.json())
  .catch(err => console.log(err))
};

export const deleteUserApi = (id)=> {
  fetch('users/delete/' + id,{method : 'DELETE'})
  .then((res) => {
    return res.json();
  })
  .catch((err) => console.log(err));
};

export const insertUsers = datas =>{
  if(!datas) return;
    fetch("/users/add", {
      method : 'POST',
      headers: {'Content-type' : 'application/json'},
      body   : JSON.stringify(datas)
    })
    .then(res => {
        if(res.status >= 400) throw new Error("Bad server response");
    })
    .then(function(datas) {
      if(datas === "success") console.log("User added here ");
    })
    .catch(err => console.log(err));
};
