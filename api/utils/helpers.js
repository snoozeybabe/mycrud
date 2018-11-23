const formatUpdate = (data) => {
  var keys = [];
  var values = [];
  var strUpdate ="";

  for ( let key in data ){
   strUpdate += key + "='" + data[key]+"',";
  }
  return strUpdate.slice(0,strUpdate.length -1);
}

module.exports = {
  formatUpdate
}