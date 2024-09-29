export const toggleDarkModeAction = (status) => {
    return (dispatch) => {
        dispatch({
            type: 'darkMode',
            payload: status,
        })
    }
}

export const showPageLoaderAction = (status) => {
    return (dispatch) => {
        dispatch({
            type: 'pageLoader',
            payload: status,
        })
    }
}

export const titleOnDashboard = (dashTitle) => {
    return (dispatch) => {
        dispatch({
            type: 'dashboardTitle',
            payload: dashTitle
        })
    }
}