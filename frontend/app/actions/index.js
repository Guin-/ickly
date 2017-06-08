export const REQUEST_BUSINESS_DETAIL = 'REQUEST_BUSINESS_DETAIL'
export const RECEIVE_BUSINESS_DETAIL = 'RECEIVE_BUSINESS_DETAIL'

export function requestBusinessDetail(business) {
  return {
    type: REQUEST_BUSINESS_DETAIL,
    business
  }
}

export function receiveBusinessDetail(business, json) {
  return {
    type: RECEIVE_BUSINESS_DETAIL,
    business,
    businessDetail: json,
  }
}

export function fetchBusiness(business) {
  return function (dispatch) {
    dispatch(requestBusinessDetail(business))
    return fetch('/api/v1/businesses/' + business['camis'])
    .then(resp => resp.json())
    .then(json =>
      dispatch(receiveBusinessDetail(business, json)))
  }
 }
