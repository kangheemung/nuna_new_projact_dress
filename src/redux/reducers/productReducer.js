let initialState = {
    products: [],
};

function productReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case 'GET_PRODUCT_SUCCESS':
            return { ...state, products: payload.jsonData };
        default:
            return { ...state };
    }
}

export default productReducer;
