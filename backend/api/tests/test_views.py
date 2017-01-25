import pytest
import vcr
import requests

@vcr.use_cassette()
def test_api_root():
    response = requests.get('http://localhost:8000/api/v1/')
    assert response.status_code == 200
    assert 'businesses' in response.text

@vcr.use_cassette()
def test_businesses_endpoint():
    response = requests.get('http://localhost:8000/api/v1/businesses/')
    assert response.status_code == 200
