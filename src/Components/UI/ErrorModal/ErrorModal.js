import Card from "../Card/Card";
import Button from "../Button/Button";

const ErrorModal = (props) => {
    return <div className="fixed top-0 left-0 w-full h-screen z-10 bg-opacity-75 bg-black" >
        <Card className="fixed top-1/4 left-10 w-80 z-20 overflow-hidden bg-white rounded-lg shadow-lg">
            <header className="bg-purple-600 p-4">
                <h2 className="text-white">{props.title}</h2>
            </header>
            <div className="p-4">
                <p>{props.message}</p>
            </div>
            <footer className="p-4 flex justify-end">
                <Button>Okay</Button>
            </footer>
        </Card>
    </div>
};

export default ErrorModal; 