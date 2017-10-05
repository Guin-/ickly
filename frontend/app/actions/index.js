import { isEqual, union, groupBy, merge } from 'lodash';
export const BUSINESS_DETAIL_REQUEST = 'BUSINESS_DETAIL_REQUEST'
export const BUSINESS_DETAIL_SUCCESS = 'BUSINESS_DETAIL_SUCCESS'
export const BUSINESS_DETAIL_FAILURE = 'BUSINESS_DETAIL_FAILURE'
export const INSPECTIONS_REQUEST = 'INSPECTIONS_REQUEST'
export const INSPECTIONS_SUCCESS = 'INSPECTIONS_SUCCESS'
export const INSPECTIONS_FAILURE = 'INSPECTIONS_FAILURE'
export const RESET_ERROR = 'RESET_ERROR'


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

export function inspectionsRequest(business) {
  return {
    type: INSPECTIONS_REQUEST,
    business
  }
}


export function inspectionsSuccess(business, result) {
  return {
    type: INSPECTIONS_SUCCESS,
    business,
    inspectionsList: result
  }
}


export function inspectionsFailure(error) {
  return {
    type: INSPECTIONS_FAILURE,
    error: error.message || 'Something went wrong'
  }
}


export function resetError() {
  return {
    type: RESET_ERROR
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText)
  }
  return response
}

/*
  let result = _(json.results)
                .groupBy('inspection_date')
                .map(function(group) {
                  return _.mergeWith.apply(_, [{}].concat(group, function(obj, src) {
                // merge all items, and if a property is a string concat the content
                  if (_.isString(obj)) {
                    let merged = obj.concat(src)
                     return merged
                    }
                  }))
                })
                .values()
                .value()
*/


/*
  let result = _(json.results)
                .groupBy('inspection_date')
                .map(_.spread(_.assign))
                .value();
*/

function dedupeDates(json) {
  let result = _(json.results)
                .groupBy('inspection_date')
                .map(objs => _.assignWith({}, ...objs, function(val1, val2) {
                      console.log(val1, val2)
                      if(val1 && val1 != val2) {
                        return val1 + ' , ' + val2
                       }
                    })
                  )
                .value()
  console.log(result)
  return result
}


export function fetchBusiness(business) {
  return function (dispatch) {
    dispatch(businessDetailRequest(business))
    return fetch('/api/v1/businesses/' + business['camis'] + '/')
    .then(handleErrors)
    .then(response =>
         response.json().then(json => dispatch(businessDetailSuccess(business, json))))
    .catch(error => dispatch(businessDetailFailure(error)))
  }
 }

 export function fetchInspections(business) {
  return function (dispatch) {
    dispatch(inspectionsRequest(business))
    return fetch('/api/v1/businesses/' + business['camis'] + '/inspections/')
    .then(handleErrors)
    .then(response =>
         response.json().then(json => dedupeDates(json)))
    .then(result => dispatch(inspectionsSuccess(business, result)))
    .catch(error => dispatch(inspectionsFailure(error)))
  }
 }

