export const REQUEST_BUSINESS_DETAIL = 'REQUEST_BUSINESS_DETAIL'
export const RECEIVE_BUSINESS_DETAIL = 'RECEIVE_BUSINESS_DETAIL'
export const BUSINESS_DETAIL_FAILURE = 'BUSINESS_DETAIL_FAILURE'

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

export function recieveBusinessDetailFailure(error) {
  return {
    type: BUSINESS_DETAIL_FAILURE,
    error
  }
}

export function fetchBusiness(business) {
  return function (dispatch) {
    dispatch(requestBusinessDetail(business))
    return fetch('/api/v1/businesses/' + business['camis'])
    .then((response) => {
      if(!response.ok) {
        dispatch(recieveBusinessDetailFailure(error))
          return error
      }
   })
    .then(response => response.json())
    .then(json =>
      dispatch(receiveBusinessDetail(business, json)))
  }
 }
