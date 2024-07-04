import { useState } from "react";

function useTheme() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return [theme, toggleTheme];
}

export default useTheme;
