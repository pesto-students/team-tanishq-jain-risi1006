import React, {useEffect, useState} from 'react'

export const useBookSorter = (searchSpace) => {
    const [sortingType, setSortingType] = useState(null);
    let filteredItems;
    
    if(!sortingType){
        filteredItems = searchSpace;
    } else {
        filteredItems = searchSpace.sort((a, b)=>{
            return a.year + (sortingType)*b.year;
        })
    }
    

    return [filteredItems, setSortingType];
}
