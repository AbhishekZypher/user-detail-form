import ReactDOM from "react-dom";

import Card from "../Card/Card";
import Button from "../Button/Button";

const Backdrop = props => {
    return <div className="fixed top-0 left-0 w-full h-screen z-10 bg-opacity-75 bg-black" onClick={props.onConfirm} />
}
const ModalOverlay = props => {
    return <Card className="fixed top-1/3 left-10 w-80 z-20 overflow-hidden">
        <header className="bg-purple-600 p-4">
            <h2 className="text-white">{props.title}</h2>
        </header>
        <div className="p-4">
            <p>{props.message}</p>
        </div>
        <footer className="p-4 flex justify-end">
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </Card>
}

const ErrorModal = (props) => {
    return <>
        {ReactDOM.createPortal(
            <Backdrop onConfirm={props.onConfirm} />,
            document.getElementById('backdrop-root')
        )};

        {ReactDOM.createPortal(
            <ModalOverlay
                title={props.title}
                message={props.message}
                onConfirm={props.onConfirm}
            />,
            document.getElementById('overlay-root')
        )}
    </>
};

export default ErrorModal; 