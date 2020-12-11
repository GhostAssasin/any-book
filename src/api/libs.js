import API from './API'

export async function fetchAllBooksAX(startIndex) {
    return await API.get('volumes', {params: {q: 'fantasy',startIndex: `${startIndex}`, maxResults: `${40}`, projection:'full', filter: 'paid-ebooks'}})
        .then(response => {
        return response.data.items;
    }).catch(err => ({ error: err }))
}