export const productAction = {
    getProducts,
    resetProducts,
    getDetailPage
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
export function getDetailPage(id) {
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/kangheemung/nuna_new_projact_dress/products/${id}`;
        let res = await fetch(url);
        let data = await res.json();
        console.log('jsonData상세페이지입니다', data);
        dispatch({ type: 'GET_PRODUCT_DETAIL_SUCCESS', payload: { data } });
    };
}
