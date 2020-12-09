import React, { useContext } from 'react';

import { PeopleDataContext } from '../../providers/peopleData/PeopleDataContext';


const SearchResultsModal = () => {

    const {peopleData,setPeopleData} = useContext(PeopleDataContext)

    return (
        <div>
            <div className='test'>{peopleData[0]?.name}</div>    
        </div>
    )
}

export default SearchResultsModal;
