import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';
import { setShowSuggestion } from '../utils/appSlice';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchCache = useSelector(store => store.search);
    const showSuggestion = useSelector(store => store.app.showSuggestion);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchSuggestions, setSearchSuggestions] = useState([]);

    const handleToggleMenu = () => {
        dispatch(toggleMenu());
    }

    const handleSearch = (query) => {
        setSearchQuery(query);
        dispatch(setShowSuggestion(false));
        navigate("/results?search_query="+query);
    }

    useEffect(()=>{
        const timer = setTimeout(() => {
            if(searchCache[searchQuery]){
                setSearchSuggestions(searchCache[searchQuery]);
            }else{
                getSearchSuggestions()
            }
        }, 200);
        return ()=>{
            clearTimeout(timer);
        }
    }, [searchQuery])

    const getSearchSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSearchSuggestions(json[1]);
        dispatch(cacheResults({
            [searchQuery] : json[1],
        }));
    }
  return (
    <div className='flex justify-between items-center p-4 shadow-lg'>
        <div className='flex items-center'>
            <MenuOutlinedIcon onClick={handleToggleMenu} className='cursor-pointer'/>
            <div className='w-40 h-7'>
                <a href='/'>
                    <img className='h-7 px-2' alt='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png' />
                </a>
            </div>
        </div>
        <div className='flex-1 flex justify-center'>
            <div className='relative w-1/2'>
                <form className='flex' onSubmit={(e) => {
                    e.preventDefault();
                    e.target.children[0].blur();
                    handleSearch(searchQuery);
                }}>
                    <input 
                    type='text' 
                    className='w-full border border-gray-300 p-2 pl-4 rounded-l-full focus:outline-violet-300'
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => dispatch(setShowSuggestion(true))}
                    />
                    <button className='border border-gray-300 p-2 rounded-r-full bg-gray-100 px-5' onClick={() => handleSearch(searchQuery)}>
                      <SearchOutlinedIcon />
                    </button>
                </form>
                {showSuggestion && searchSuggestions.length > 0 && <div className='absolute bg-white py-2 rounded-lg shadow-lg border border-gray-100 w-full'>
                    <ul>
                        {
                            searchSuggestions.map((suggestion, index) => <li key={index} onClick={() => handleSearch(suggestion)} className='flex items-center gap-2 p-2 font-semibold hover:bg-gray-200'><SearchOutlinedIcon /> {suggestion}</li>)
                        }
                    </ul>
                </div>}
            </div>
        </div>
        <div>
            <img className='h-8' alt='user' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
        </div>
    </div>
  )
}

export default Header