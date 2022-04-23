import css from "./Button.modules.css";

const Button = ({children}) => {
    return (
        <button>
            {children}
        </button>
    );
};

export {Button}