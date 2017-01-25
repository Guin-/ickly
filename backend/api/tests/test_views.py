import pytest
import vcr
from django.test import Client

client = Client()

@vcr.use_cassette()
def test_api_root(client):
    response = client.get('/api/v1/')
    assert response.status_code == 200


@vcr.use_cassette(record_mode='new_episodes')
def test_businesses_endpoint(client):
    response = client.get('/api/v1/businesses/')
    assert response.status_code == 200

