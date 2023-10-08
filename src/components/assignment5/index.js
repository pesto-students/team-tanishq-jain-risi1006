import React, {useState, useEffect} from 'react';
import Book from '../Book';
import Navbar from '../Navbar';
import CustomButton from '../../molecules/button';
import { useNavigate} from 'react-router';
import GiftCard from './component/card';
import CustomInput from './component/input';
import { fetchRecommendedGifts } from './api';
import { useBookFilter } from '../customHooks/useBookFilter';
const Assignment5 = () => {

    const navigation = useNavigate();
    const [searchTag, setSearchTags] = useState('');
    const [searchedResult, setSearchResult] = useState([]);
    const [filteredBook, setSearchTag] = useBookFilter(searchedResult);  
    const [wishlistedData, setWishlistedData] = useState([]);

    const onChangeHandler = (e) => {
        setSearchTags(e.target.value);
    }

    const searchHandler = (event) => {
        setSearchTag(event?.nativeEvent?.target?.value)
        console.log(filteredBook)
    }

    const onSearchHandler = () => {
        const body = {
            "model":"gpt-3.5-turbo",
            "messages":[
                {"role": "system", "content": searchTag+` Please suggest at least 10 gifts in json format with the key 'title', 'description', 'uri'. Please give response just in json format`}
            ]
          }
      
          fetchRecommendedGifts(body).then((data)=>{
              if(data?.gifts){
                setSearchResult(data?.gifts);
              } else if(data){
                setSearchResult(data);
              }
              
          }).catch((err)=>{
                console.log(err);
          });
    }


    useEffect(()=>{
        const init = async() => {
            let data = await localStorage.getItem('wishlisted');
            console.log(data);
            setWishlistedData(JSON.parse(data));
        } 
        init();

    }, []);

    const addToWishlist = async(item) => {
        // wishlistedData.push(item);
        console.log('adding into wishlist', item)
        let temp = wishlistedData ? (wishlistedData.length>0 ?  wishlistedData : []) : [];
        temp.push(item);
        setWishlistedData(temp)
        await localStorage.setItem('wishlisted', JSON.stringify(wishlistedData));
    }

    const removeFromWishlist = async(item) => {
        console.log('removing item', item)
        const filteredData = wishlistedData.filter((temp)=>{
            console.log(temp);
            return item?.title !== temp?.title;
        });
        console.log('new wishlisted', wishlistedData)
        setWishlistedData(filteredData);
        await localStorage.setItem('wishlisted', JSON.stringify(filteredData))
    }

    return(
        <div >
            <Navbar onHomeButtonClick={()=>{navigation('/')}} onSerachInputChange = {searchHandler} />
            <div style={{margin:10}}>
            <h1>This is Assignment 5</h1>
            <p>Gift recommendation using open AI</p>
            <CustomInput 
                label={'Which type of gift do you want'}
                id={'gift'}
                onChange={onChangeHandler}
                value={searchTag}
            />
            <CustomButton 
                label={'Search gifts'}
                onClick={onSearchHandler}
                customStyle={{alignSelf:'center', marginTop:10, marginBottom:50}}
            />

           {wishlistedData && wishlistedData.length>0 && (<div>
                <h4>Wishlisted gifts</h4>
                <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                {wishlistedData && wishlistedData.length>0 &&(
                    wishlistedData.map((gift)=>{
                        return (
                            <GiftCard 
                                title={gift.title}
                                description={gift.description}
                                uri={gift.uri}
                                onSelect={()=>{
                                    removeFromWishlist(gift);
                                }}
                                buttonTitle={'Remove from Wishlist'}
                            />
                        )
                    })
                )}
                </div>
            </div>)}

            <h4>Recommended gifts</h4>
            <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
                {filteredBook && filteredBook.length>0 &&(
                    filteredBook.map((gift)=>{
                        return (
                            <GiftCard 
                                title={gift.title}
                                description={gift.description}
                                uri={gift.uri}
                                onSelect={()=>{
                                    addToWishlist(gift);
                                }}
                                buttonTitle={'Add to Wishlist'}
                            />
                        )
                    })
                )}
            </div>
            
            </div>
        </div>
    );
}

export default Assignment5;