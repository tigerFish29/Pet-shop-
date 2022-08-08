const SearchParams = () => {
    const location = "London, England "
    return (
        <div  className="search-params">
          <form>
              <lable htmlFor="location">
                Location  
                <input id="location" value={location} placeholder="Location"/>
              </lable>
              <button>Submit</button>
          </form>
        </div>
    )
}

export default SearchParams;