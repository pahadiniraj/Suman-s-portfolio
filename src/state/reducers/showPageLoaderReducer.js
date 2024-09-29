const showPageLoaderReducer = (status = true, action) => {
    switch (action.type) {
        case 'pageLoader':
            return action.payload;
        default:
            return status;
    }
}

export default showPageLoaderReducer;