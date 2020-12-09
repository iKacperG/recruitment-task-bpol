import React, {useState} from 'react';
import {PeopleDataContext} from "./PeopleDataContext";
const PeopleDataProvider = ({children}) => {

    const [peopleData,setPeopleData] = useState([])

    return (
        <PeopleDataContext.Provider value={{peopleData,setPeopleData}}>
            {children}
        </PeopleDataContext.Provider>
    )
}

export default PeopleDataProvider;