import API from './Api'

const API_KEY = process.env.REACT_APP_API_KEY;

export async function fetchCategoriesAX() {
    const url = `https://api.wegmans.io/products/categories?api-version=2018-10-18${API_KEY}`;

    return await API.get(url).then(response => {
        return response.data;
    }).catch(err => ({ error: err }))
}