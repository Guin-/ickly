import pytest
from django.test import Client

client = Client()


def test_api_root(client):
    response = client.get('/api/v1/')
    assert response.status_code == 200


@pytest.mark.django_db
def test_businesses_endpoint_list_response(client):
    response = client.get('/api/v1/businesses/')
    expected_keys = ['camis', 'name', 'address', 'phone', 'cuisine_description']
    assert response.status_code == 200
    assert response.data['count'] == 20619
    assert len(response.data['results']) == 100
    for d in response.data['results']:
        assert d.keys() == expected_keys


@pytest.mark.django_db
def test_businesses_endpoint_detail_response(client):
    response = client.get('/api/v1/businesses/40394054/')
    expected_keys = ['camis', 'name', 'address', 'phone', 'cuisine_description']
    assert response.status_code == 200
    assert expected_keys == response.data.keys()
    assert len(response.data) == 5
    assert response.data['camis'] == '40394054'


@pytest.mark.django_db
def test_business_inspection_edge_endpoint_response(client):
    response = client.get('/api/v1/businesses/40394054/inspections/')
    expected_keys = ['business', 'record_date', 'inspection_date', 'inspection_type',
                     'action', 'violation_code', 'violation_description', 'critical_flag',
                     'score', 'grade', 'grade_date']
    assert response.status_code == 200
    for d in response.data['results']:
        assert d.keys() == expected_keys
        assert d['business'] == '40394054'

