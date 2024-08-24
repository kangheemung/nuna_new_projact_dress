export const productAction = {
    getProducts,
    resetProducts
};

function resetProducts() {
    return { type: 'RESET_PRODUCTS' };
}

export function getProducts(keyword) {
    return async (dispatch, getState) => {
        dispatch(resetProducts());
        let url = `https://my-json-server.typicode.com/kangheemung/nuna_new_projact_dress/products?q=${keyword}`;
        let response = await fetch(url);
        let jsonData = await response.json();
        console.log('jsonData입니다', jsonData);
        dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: { jsonData } });
    };
}
