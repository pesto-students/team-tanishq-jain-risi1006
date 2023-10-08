import React, {useEffect, useState} from 'react'

export const useBookFilter = (searchSpace) => {
    const [searchTag, setSearchTag] = useState('');
    
    const filteredItems = searchSpace.filter((item)=>{
        return item?.title?.includes(searchTag) || 
        item?.description?.includes(searchTag) || 
        item?.author?.includes(searchTag);
    });

    return [filteredItems, setSearchTag];
}
