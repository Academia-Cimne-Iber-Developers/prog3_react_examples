function AlertButton({
    handleClick = () => alert(message),
    message,
    children,
    styles,
}) {
    return (
        <button onClick={handleClick} className="button" style={styles}>
            {children}
        </button>
    );
}

export { AlertButton };
