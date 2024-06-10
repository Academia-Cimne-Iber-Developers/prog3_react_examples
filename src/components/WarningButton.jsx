import { AlertButton } from "./AlertButton";

function WarningButton({ message, buttonText }) {
    function handleClick(e) {
        e.stopPropagation();
        alert("Advertencia: " + message);
    }

    return (
        <AlertButton handleClick={handleClick} styles={{ color: "yellow" }}>
            {buttonText}
        </AlertButton>
    );
}

export default WarningButton;
