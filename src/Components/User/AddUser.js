import { useState, useRef } from "react";

import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import Card from "../UI/Card/Card";

const AddUser = (props) => {
    // useRef
    const userNameEntered = useRef();
    const userAgeEntered = useRef();


    // const [enteredUsername, setEnteredUsername] = useState('');
    // const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const listSubmitted = (event) => {

        const userName = userNameEntered.current.value
        const userAge = userAgeEntered.current.value

        event.preventDefault()
        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter valid name and age, Non empty values'
            });
            return;
        }
        if (+userAge < 18) {
            setError({
                title: 'Invalid Age',
                message: 'Please enter valid age (>18).'
            });
            return;
        }



        // setEnteredAge('');
        // setEnteredUsername('')

        // here we are actually setting the html element it's not recommended to manipulate the the html dom but if you just want to set the input values again you can consider doing this, or just use the state method AGAIN! RARELY DO THIS RARELYYYYYYY!!!
        userNameEntered.current.value = '';
        userAgeEntered.current.value = '';

        props.onAddUser(userName, userAge)
    }

    // const usernameChangeHandler = (event) => {
    //     console.log(event.target.value)
    //     setEnteredUsername(event.target.value);
    // }
    // const ageChangeHandler = (event) => {
    //     setEnteredAge(event.target.value);
    // }

    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card>
                <form onSubmit={listSubmitted} className="mx-auto my-8 p-4 w-90 max-w-2xl">
                    <label className="block font-bold mb-2">Username</label>
                    <input
                        // value={enteredUsername}
                        autoComplete="off"
                        type="text"
                        className="block w-full border border-gray-300 py-2 px-1 mb-2"
                        // onChange={usernameChangeHandler}
                        ref={userNameEntered}
                    />

                    <label className="block font-bold mb-2">Age</label>
                    <input
                        // value={enteredAge}
                        type="number"
                        className="block w-full border border-gray-300 py-2 px-1 mb-2"
                        // onChange={ageChangeHandler}
                        ref={userAgeEntered}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser;