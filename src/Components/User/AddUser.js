import { useState } from "react";

import Button from "../UI/Button/Button";

const AddUser = () => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');


    const listSubmitted = (event) => {
        event.preventDefault()

        setEnteredAge('');
        setEnteredUsername('')
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    return (
        <>
            <form onSubmit={listSubmitted} className="mx-auto my-8 p-4 w-90 max-w-2xl">
                <label className="block font-bold mb-2">Username</label>
                <input
                    value={enteredUsername}
                    type="text"
                    className="block w-full border border-gray-300 py-2 px-1 mb-2"
                    onChange={usernameChangeHandler}
                />

                <label className="block font-bold mb-2">Age</label>
                <input
                    value={enteredAge}
                    type="number"
                    className="block w-full border border-gray-300 py-2 px-1 mb-2"
                    onChange={ageChangeHandler}
                />
                <Button type="submit">Submit</Button>
            </form>
        </>
    )
}

export default AddUser;