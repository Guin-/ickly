import { groupBy, assignWith } from 'lodash';
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

function mergeViolations(violations) {
    return violations.flatMap(violation => {
      if (violation.violation_code && violation.violation_description) {
        return [{
          code: violation.violation_code,
          description: violation.violation_description
        }];
      } else {
        return [];
      }
    })
};

function groupAndMergeInspectionsByDate(json) {

  // group and sort inspections by inspection date
  let groupedByDate = _(json.results)
                .sortBy('inspection_date')
                .reverse()
                .groupBy('inspection_date')
                .value()

  // merge data for each inspection date into one object containing all violations
  var mergedInspectionsByDate = Object.values(groupedByDate).map(
    inspectionsByDate => {
      return {
        grade: inspectionsByDate[0].grade,
        inspection_date: inspectionsByDate[0].inspection_date,
        inspection_type: inspectionsByDate[0].inspection_type,
        action: inspectionsByDate[0].action,
        score: inspectionsByDate[0].score,
        violations: mergeViolations(inspectionsByDate)
      }
    })

  return mergedInspectionsByDate
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
         response.json().then(json => groupAndMergeInspectionsByDate(json)))
    .then(result => dispatch(inspectionsSuccess(business, result)))
    .catch(error => dispatch(inspectionsFailure(error)))
  }
 }

