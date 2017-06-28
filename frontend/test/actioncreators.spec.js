import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../app/actions/index'
import fetchMock from 'fetch-mock'
import { expect } from 'chai';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const business = {"camis":"40394054",
                  "name":"GARDEN OF EAT-IN",
                  "address":"1416 AVENUE J BROOKLYN 11230",
                  "phone":"7182525289",
                  "cuisine_description":"Jewish/Kosher"}

describe('fetch business async actions', () => {
  /*
  afterEach(() => {
    nock.cleanAll()
  })
*/
  it('creates RECEIVE_BUSINESS_DETAIL when fetching business has been done', () => {
    /*
    nock('http://localhost:8000')

      .get('/api/v1/businesses/40394054/')
      .reply(200, business)
*/
    fetchMock.getOnce('/api/v1/businesses/40394054/', business)

    const expectedActions = [
      { business, type: actions.REQUEST_BUSINESS_DETAIL },
      { type: actions.RECEIVE_BUSINESS_DETAIL, businessDetail: business }
    ]

    const store = mockStore()

    return store.dispatch(actions.fetchBusiness(business)).then(() => {
      // return of async actions
      expect(store.getActions()).to.deep.equal(expectedActions)
    })
  })
})
