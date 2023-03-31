import Link from 'next/link'
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

    // const callSearchFunction = (e) => {
    //     e.preventDefault();
    //     props.search(searchValue)
    //     resetInputField();
    // }
  return (
      <div>
        <form className='search'>
           
            


            <div className="box">

            
                <input className='InputText text-white' 
                 value={searchValue}
                 onChange={handleSearchInputChanges}
                 type="text"
                 placeholder='Search Movie'
                />         
                
            </div>

            <div className='box-button'>
            <Link href={`/search/${searchValue}`}>
                <input type="submit" className="" value='Search'/> 
            </Link>
            </div>
            
        </form>


    </div>
  )
}

export default Search 
