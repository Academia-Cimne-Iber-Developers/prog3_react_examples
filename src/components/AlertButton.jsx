function AlertButton({ handleClick, children }) {
    return (
        <button onClick={handleClick} className="button">
            {children}
        </button>
    );
}

export { AlertButton };
