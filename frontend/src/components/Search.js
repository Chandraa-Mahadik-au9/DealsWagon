import React from 'react';

const Search = () => {
    return (
        <div className="m-4">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search your product here.." />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
            </div>
        </div>
    )
}

export default Search;
