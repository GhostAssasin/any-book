import API from './API'

export async function fetchAllBooksAX(payload) {
    return await API.get('volumes',
        {params: {
                q: `${payload.payload.searchKey}`,
                orderBy: `${payload.payload.orderBy}`,
                printType: 'books',
                startIndex: `${payload.payload.startIndex}`,
                maxResults: `${20}`,
                projection:'full',
                filter: 'paid-ebooks'}})
        .then(response => {
            return response.data;
        })
        .catch(err => {
            return ({error: err});
        })
}