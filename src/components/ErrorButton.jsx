import { AlertButton } from "./AlertButton";

function ErrorButton({ message, buttonText }) {
    function handleClick() {
        alert("Error: " + message);
    }

    return (
        <AlertButton handleClick={handleClick} styles={{ color: "red" }}>
            {buttonText}
        </AlertButton>
    );
}

export default ErrorButton;
