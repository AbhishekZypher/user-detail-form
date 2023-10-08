import Card from "../UI/Card/Card";

const UserList = (props) => {
    return (
        <Card className="mx-auto my-8 w-90 max-w-2xl">
            <ul className="list-none p-4">
                {props.users.map((user) =>
                    <li key={user.id} className="border border-gray-300 my-2 p-2" > {user.name}({user.age} years old)</li>
                )}
            </ul>
        </Card >
    )
}

export default UserList;
