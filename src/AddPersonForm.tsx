import { useState } from "react";
import type { Person } from "./Person";

interface AddPersonFormProps {
    onPersonAdded: (person: Person) => void;
}

const AddPersonForm = ({onPersonAdded}:AddPersonFormProps) => {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [phone, setPhone] = useState('');
   
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const newId = `${first}${phone}`; // Create id value by concatenating first and phone
        onPersonAdded({ first, last, phone, id: newId });
        setFirst('');
        setLast('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit}>
                        <div>
                <label htmlFor="first">First name:</label>
                <input
                    type="text"
                    id="first"
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="last">Last name:</label>
                <input
                    type="text"
                    id="last"
                    value={last}
                    onChange={(e) => setLast(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="last">Phone:</label>
                <input
                    type="phone"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Add Person</button>
        </form>
    );
}

export default AddPersonForm;