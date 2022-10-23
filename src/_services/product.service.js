import {Config} from '../config';

const apiPath = Config().serverUrl;

export const productService = {
    getAllProducts,
    getProductsByBrand,
    getProductsByCategory,
    getProductDetail,
    getRecommendedProducts
};

async function getRecommendedProducts(locId) {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    };

    return await fetch(apiPath + 'inventory/recommendation?locId=' + locId, requestOptions).then(handleResponse)

}

function getAllProducts(offset, brnId, searchVal, locId, count) {

    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    };


    var queryParams = "locId=" + locId + '&brndIds=' + brnId + "&page=" + offset + "&pageCount=" + count;

    // eslint-disable-next-line
    if (searchVal != undefined && searchVal != '')
        // eslint-disable-next-line
        queryParams += "&searchVal=" + searchVal
    return fetch(apiPath + 'inventory?' + queryParams, requestOptions).then(handleResponse);
}

function getProductsByBrand(brandId) {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    };

    return fetch(apiPath + 'products?type=brnd-vsbl&typeId=' + brandId, requestOptions).then(handleResponse);
}

function getProductsByCategory(categoryId) {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    };

    return fetch(apiPath + 'products?type=bsns-vsbl&typeId=' + categoryId, requestOptions).then(handleResponse);
}

function getProductDetail(productId) {
    const requestOptions = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    };

    return fetch(apiPath + 'inventory/variant/' + productId, requestOptions).then(handleResponse);
}

async function handleResponse(response) {
    if (!response.ok) {
        return Promise.reject(response.statusText);
    }

    return await response.json();
}
