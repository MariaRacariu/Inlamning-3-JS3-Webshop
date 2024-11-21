import { useState } from 'react';
import DisplaySearchResult from '../DisplaySearchResult/DisplaySearchResult';
import productsList from '../../products.json';
import style from './Search.module.css';

function Search(){
    const [products] = useState(productsList);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const handleSearch = (event) =>{
        event.preventDefault();
        
        const {value} = event.target;

        setSearchQuery(value);
    }

    
    const searchProduct = () => {
        // Check if searchQuery is empty
        if(!searchQuery.trim()){
            alert("Please enter a product name");
            return;
        }

        const matchingSearchResult = products.filter(product => 
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
            product.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        if(matchingSearchResult.length > 0){
            setSearchResult(matchingSearchResult);
        }else{
            setSearchResult("Nothing found");
        }
    }

    return(
        <>
            <div className='searchContainer'>
                <label htmlFor="search">Search product:</label>
                <input type='text' value={searchQuery} onChange={handleSearch} name="search" className={style.searchInput}/>
                <button onClick={searchProduct} className={style.searchButton}>Search</button>
            </div>
            <div className='searchResultContainer'>
                <h2 className={style.searchHeading}>Search Results</h2>
                {searchResult === "Nothing found" ? (
                     <p>No matches found</p>
                ):(
                    <DisplaySearchResult data={searchResult}/>
                )}
            </div>
        </>
    );
}

export default Search;