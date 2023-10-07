const Button = (props) => {
    return (
        <>
            <button
                className="font-inherit border border-purple-600 bg-purple-600 text-white py-1 px-4 cursor-pointer hover:bg-purple-800 active:bg-purple-800 focus:outline-none"
                type={props.type || "button"}
                onClick={props.onClick}>
                {props.children}
            </button>
        </>
    )
};

export default Button;