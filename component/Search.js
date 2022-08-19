import React, { useState } from 'react'



export const searchInput = ""
const Search = (props) => {
   
    const [searchValue, setSearchValue] = useState(searchInput)
    
    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value)
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue)
        resetInputField();
    }
  return (
      <div>
        <form className='search'>
            <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
            />
            <input onClick={callSearchFunction} type="submit" value="SEARCH"/>
            
        </form>

        {/* <div>
            {searchValue}
        </div> */}
    

    </div>
  )
}

export default Search 
