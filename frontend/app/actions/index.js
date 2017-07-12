export const BUSINESS_DETAIL_REQUEST = 'BUSINESS_DETAIL_REQUEST'
export const BUSINESS_DETAIL_SUCCESS = 'BUSINESS_DETAIL_SUCCESS'
export const BUSINESS_DETAIL_FAILURE = 'BUSINESS_DETAIL_FAILURE'

export function businessDetailRequest(business) {
  return {
    type: BUSINESS_DETAIL_REQUEST,
    business
  }
}

export function businessDetailSuccess(business, json) {
  return {
    type: BUSINESS_DETAIL_SUCCESS,
    business,
    businessDetail: json,
  }
}

export function businessDetailFailure(error) {
  return {
    type: BUSINESS_DETAIL_FAILURE,
    error: error.message || 'Something went wrong'
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}

export function fetchBusiness(business) {
  return function (dispatch) {
    dispatch(businessDetailRequest(business))
    return fetch('/api/v1/businesses/' + business['camis'])
    // uncomment following line to see how an error message displays in ui
    //return fetch('api/v1/businesses/2')
    .then(handleErrors)
    .then(response =>
         response.json().then(json => dispatch(businessDetailSuccess(business, json))))
    .catch(error => dispatch(businessDetailFailure(error)))
  }
 }
