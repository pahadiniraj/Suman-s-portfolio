const toggleDarkModeReducer = (status = window.matchMedia(
    "(prefers-color-scheme: dark)"
).matches, action) => {
    switch (action.type) {
        case 'darkMode':
            return action.payload;
        default:
            return status;
    }
}

export default toggleDarkModeReducer;