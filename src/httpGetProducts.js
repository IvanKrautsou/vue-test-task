import axios from 'axios'


function getProducts(url) {

    return axios.get(url)


}

export default getProducts