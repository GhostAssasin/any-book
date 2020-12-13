
export function parseData(data, currentState){
    let tmpItems = [];
    let tmpCategory,tmpImgLink;
    data.forEach((item) => {
            let rating = Math.random()*10 ;
            (rating > 5)? rating/= 2 : rating+=  0.001;
            (rating < 3)? rating+= 2 : rating-= 0.001;
            (item.volumeInfo.categories)?
                tmpCategory = {value: item.volumeInfo.categories, label: item.volumeInfo.categories}
                : tmpCategory = {value: '', label: ""};
            (item.volumeInfo.imageLinks !== undefined)?
                tmpImgLink = item.volumeInfo.imageLinks.thumbnail
                : tmpImgLink = undefined;
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
                visibility: true,
            };
            if (tmpItem.id !== undefined
                && tmpItem.price !== undefined
                && tmpItem.authors !== undefined
                && tmpItem.imgLink !== undefined
                && tmpItem.title !== undefined
                && tmpItem.description !== undefined) {
                let tpmItemU = true;
                currentState.forEach((item) => {if (item.id === tmpItem.id) tpmItemU = false;})
                if (tpmItemU) tmpItems.push(tmpItem);
            }
        }
    );
    return tmpItems;
}

export function parseCategories(data, currentState, currentCategories){
    const tpmItems = parseData(data, currentState)
    let tmpCategories = [];
    tpmItems.forEach((item) => {
        if(tmpCategories[0] === undefined) {
            tmpCategories.push({value: item.categories.value[0], label: item.categories.value[0]});
        }else {
        let isUnique = true;
        tmpCategories.forEach((category) => {

            if(item.categories.value[0] === category.value) {
                isUnique = false;
            }
        });
        if(isUnique) {
            tmpCategories.push({value: item.categories.value[0], label: item.categories.value[0]});
        }}
    });
    if(tmpCategories.length === 0 ) return currentCategories;
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
    if (filters.length !== 0){
        return data.map((item) => {
        let tmpVisibility = false;
        filters.forEach((filter) =>{
            if(item.categories.value[0] === filter.value) tmpVisibility = true;
        })
        item.visibility = tmpVisibility;

        return item;
    })}
    else {
        return data.map((item) => {
            item.visibility = true;
            return item;
        });
    };
}