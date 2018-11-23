const fetchData =  (route) => {

   return fetch(route)
      .then(res => res.json())
      .catch(err => console.log(err))
}

module.exports = {fetchData}

