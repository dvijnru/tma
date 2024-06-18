import React, { createContext, useState, useMemo, useEffect } from 'react';

import './AppRoot.css';

import { generatePalette } from '@telegram-mini-apps/js';

import { useNavigate } from "react-router-dom";

const WebApp = window.Telegram.WebApp;
const defaultTheme = 'light';
const defaultColorScheme = WebApp.colorScheme;
const themeParams = WebApp.themeParams;

export const ThemeContext = createContext({
    colorScheme: defaultColorScheme,
    theme: defaultTheme,
    palette: generatePalette(defaultTheme, defaultColorScheme)
});

export const AppRoot = ({ children, theme = defaultTheme }) => {

    const [colorScheme, setColorScheme] = useState(WebApp.colorScheme);
    const navigate = useNavigate();

    // useEffect(() => {
    //     document.body.classList.add(theme);
    //     if (WebApp.platform && !["android", "ios"].includes(WebApp.platform)) {
    //         document.body.classList.add("desktop");
    //     }
    // }, []);
    // useEffect(() => {
    //     document.body.setAttribute("data-color-scheme", colorScheme);
    // }, [colorScheme]);

    useEffect(() => {
        // WebApp.onEvent("themeChanged", () => {
        //     setColorScheme(WebApp.colorScheme);
        // });
        //

        WebApp.expand();// метод позволяет растянуть окно на всю высоту.
        WebApp.ready();

        // const n = 'primary';
        // const e = 'primary' === n ? themeParams.bg_color : themeParams.secondary_bg_color;
        // const u = WebApp.isVersionAtLeast;
        // try {
        //     u("6.9") ? WebApp.setHeaderColor(p || ("material" === f || "primary" === n ? "bg_color" : "secondary_bg_color")) : i("material" === f ? themeParams.bg_color : e)
        // } catch (e) {
        //     console.error(e)
        // }

        // WebApp.setHeaderColor(themeParams.bg_color);
        WebApp.setHeaderColor(themeParams.secondary_bg_color);

        WebApp.onEvent('backButtonClicked', () => window.history.back());

        // tg.onEvent('themeChanged', setThemeClass);

        WebApp.SettingsButton.isVisible = true;
        WebApp.SettingsButton.onClick(() => navigate('/menu'));

    }, []);

    const palette = useMemo(() => generatePalette(theme, colorScheme), [theme, colorScheme]);

    const contextValue = useMemo(() => ({
        colorScheme,
        theme,
        palette,
        themeParams
    }), [theme, colorScheme, palette, themeParams]);

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
