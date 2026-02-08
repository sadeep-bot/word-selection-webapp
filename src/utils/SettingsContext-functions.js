import { DEFAULT_SETTINGS } from "./defaultSettings";

export const saveChangesToLocalStorage = (settings) => {
        localStorage.setItem('settings', JSON.stringify(settings));
    }

    
export const getSettingsFromLocalStorage = () => {
    const saved = localStorage.getItem("settings");

    return saved ? {...DEFAULT_SETTINGS, ...JSON.parse(saved)} : {...DEFAULT_SETTINGS};

}