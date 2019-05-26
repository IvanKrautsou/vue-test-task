import axios from 'axios'


function getProducts(url) {

  return new Promise(function(resolve, reject) {
    axios.get(url)
      .then((response) => resolve(response))
      .catch(console.log)
  });

}

export default getProducts