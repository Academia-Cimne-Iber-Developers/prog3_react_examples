import React, { useState } from "react";
import { TaskList } from "./components/Task";
import { ShoppingList } from "./components/ShoppingList";
import { AlertButton } from "./components/AlertButton";
import WarningButton from "./components/WarningButton";
import ErrorButton from "./components/ErrorButton";
import Counter from "./components/Counter";
import Post from "./components/Post";

import ThemeChanger from "./components/ThemeChanger";

import FooterBar from "./components/Footerbar";
import SongList from "./components/MusicPlayer/SongList";
import useTheme from "./hooks/useTheme";

import ThemeContext from "./contexts/ThemeContext";

import NavBar from "./components/NavBar";

function App() {
    const [theme, toggleTheme] = useTheme();

    return (
        <div className="hero is-fullheight is-flex is-flex-direction-column">
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <NavBar appName={"React Examples"} />
                <div className="container">
                    <ThemeChanger />
                    {/* <SongList /> */}
                </div>
                <FooterBar />
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
