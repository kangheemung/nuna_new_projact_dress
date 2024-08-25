let initialState = {
    products: [],
    selectedProduct: null,
};

function productReducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case 'GET_PRODUCT_SUCCESS':
            return { ...state, products: payload.jsonData };
            case 'GET_PRODUCT_DETAIL_SUCCESS':
                // Update the state to include the fetched product detail
                return { ...state, selectedProduct: payload.data }; 
            default:
                return state;
    }
}

export default productReducer;
