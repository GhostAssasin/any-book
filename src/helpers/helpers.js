export function parseData(data, currentState, filterCategories){
    let tmpItems = [];
    let tmpCategory,tmpImgLink;
    data.forEach((item) => {
        const rating = 3 + Math.floor(5 * Math.random()) / 2;
        typeof (item.volumeInfo.categories) !== 'undefined'
            ? tmpCategory = {value: item.volumeInfo.categories, label: item.volumeInfo.categories}
            : tmpCategory = undefined;
        item.volumeInfo.imageLinks !== undefined
            ? tmpImgLink = item.volumeInfo.imageLinks.thumbnail
            : tmpImgLink = undefined;
        const tmpVisibility = () => {
            if(filterCategories.length >0) {
                return filterCategories.some(category => category.value === item.volumeInfo.categories)
            } else return true
        }
        let tmpItem = {
            id: item.id,
            price: item.saleInfo.listPrice,
            authors: item.volumeInfo.authors,
            imgLink: tmpImgLink,
            title: item.volumeInfo.title,
            description: item.volumeInfo.description,
            categories: tmpCategory,
            rating: rating.toFixed(2),
            inWantedList: false,
            multiplier: 1,
            visibility: tmpVisibility(),
            publishedDate: item.volumeInfo.publishedDate,
            publisher: item.volumeInfo.publisher
        };

        /* Check does any item has undefined property */
        if (Object.values(tmpItem).every(prop => typeof prop !== "undefined")) {
            let tpmItemU = true;
            currentState.forEach((item) => {
                if (item.id === tmpItem.id) tpmItemU = false;
            })
            if (tpmItemU) tmpItems.push(tmpItem);
        }
    });

    return tmpItems;
}

export function parseCategories(data, currentState, currentCategories){
    const tpmItems = parseData(data, currentState, [])
    let tmpCategories = currentCategories;
    tpmItems.forEach((item) => {
        if (!tmpCategories.length > 0) {
            tmpCategories.push({value: item.categories.value[0], label: item.categories.value[0]});
        } else {
            if(!tmpCategories.some((category) => item.categories.value[0] === category.value)){
                tmpCategories.push({value: item.categories.value[0], label: item.categories.value[0]});
            }
        }
    });

    return tmpCategories;
}

export function calcTotalCost(items){
    let tmp = 0;
    items.forEach((item) => {
       tmp+= item.price.amount*item.multiplier;
    });
    return tmp.toFixed(2);
}

export function changeVisibility(data, filters){
    if (filters.length > 0) {
        return data.map((item) => {
            const visibility = filters.some(filter => item.categories.value[0] === filter.value)

            return {...item, visibility};
        })
    } else {
        return data.map((item) => {
            return {...item, visibility: true};
        });
    }
}
