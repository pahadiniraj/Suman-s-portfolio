const titleOnDashboardReducer = (dashTitle = "Dashboard", action) => {
    switch (action.type) {
        case 'dashboardTitle':
            return action.payload;
        default:
            return dashTitle;
    }
}

export default titleOnDashboardReducer;