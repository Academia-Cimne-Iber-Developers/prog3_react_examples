import { AlertButton } from "./AlertButton";

function WarningButton({ message }) {
    function handleClick() {
        alert("Advertencia: " + message);
    }

    return (
        <AlertButton handleClick={handleClick}>
            Botón de Advertencia
        </AlertButton>
    );
}

export default WarningButton;
