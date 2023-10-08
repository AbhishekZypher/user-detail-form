import { useState } from "react";

import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import Card from "../UI/Card/Card";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const [error, setError] = useState();

    const listSubmitted = (event) => {
        event.preventDefault()
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter valid name and age, Non empty values'
            })
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter valid age (>0).'
            })
        }

        setEnteredAge('');
        setEnteredUsername('')
        props.onAddUser(enteredUsername, enteredAge)
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} />}
            <Card>
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
            </Card>
        </div>
    )
}

export default AddUser;