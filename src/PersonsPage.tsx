import { useCallback, useState } from "react";
import type { Person } from "./Person";
import AddPersonForm from "./AddPersonForm";
import PersonsTable from "./PersonsTable";

const PersonsPage = ()=> {
    const [persons, setPersons] = useState<Person[]>([])
    const [oriPersons, setOriPersons] = useState<Person[]>([]);
  
    const addPerson = useCallback((newPerson: Person) => {
      setOriPersons([...persons, newPerson]);
      setPersons([...persons, newPerson ]);
    },[persons]);
  
    // const searchByPhone = useCallback((phone: string) => {
    //   if (phone ==='') {
    //     //reset to original
    //     setPersons([...oriPersons]);
    //   } else {
    //     setPersons(persons.filter(person => person.phone.startsWith(phone)));
    //   }
    // },[oriPersons]);
  
    return (
      <>
        <div className="stacked-container">
          <AddPersonForm onPersonAdded={addPerson} />
          {/* <SearchPerson onSearchPerson={searchByPhone}/> */}
          <PersonsTable people={persons} />
        </div>
      </>
    )
}

export default PersonsPage;