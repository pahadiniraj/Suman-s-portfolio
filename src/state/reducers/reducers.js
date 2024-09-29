import { combineReducers } from "redux";
import toggleDarkModeReducer from "./darkModeReducer";
import showPageLoaderReducer from "./showPageLoaderReducer";
import titleOnDashboardReducer from "./titleOnDashboardReducer";

const reducers = combineReducers({
    darkMode: toggleDarkModeReducer,
    pageLoader: showPageLoaderReducer,
    dashboardTitle: titleOnDashboardReducer
});

export default reducers;