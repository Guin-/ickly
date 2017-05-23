export const HAS_BUSINESS_SELECTION = 'HAS_BUSINESS_SELECTION'
export const REQUEST_BUSINESS_DETAIL = 'REQUEST_BUSINESS_DETAIL'
export const RECEIVE_BUSINESS_DETAIL = 'RECEIVE_BUSINESS_DETAIL'


export function hasBusinessSelection(business) {
  return {
    type: HAS_BUSINESS_SELECTION,
    business
  }
}


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
    businessDetail: json.results
    receivedAt: Date.now()
  }
}

