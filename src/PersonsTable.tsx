import type { Person } from "./Person";

export interface PersonsTableProps {
    people: Person[];
}

const PersonsTable = ({people}:PersonsTableProps) => {
    // const [thePeople, setThePeople] = React.useState(people);

    // Sort logic goes here.

    return (
        <div>
            <h1>Persons Table</h1>
            <ul>
                <li key="headers">
                    <span>First name</span>
                    <span>Last name</span>
                    <span>Phone</span>
                </li>
                {people.map((person) => 
                <li key={person.id}>
                    <span>{person.first}</span>
                    <span>{person.last}</span>
                    <span>{person.phone}</span>
                </li>)}
            </ul>
        </div>
    );
}

export default PersonsTable;