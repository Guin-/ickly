from rest_framework import viewsets, mixins
from serializers import BusinessSerializer
from ickly import secret_settings
from sodapy import Socrata

class Business(object):
    def __init__(self, camis, dba, cuisine_description, address):
        self.camis = camis
        self.dba = dba
        self.cuisine_description = cuisine_description
        self.address = address


class BusinessesViewSet(mixins.ListModelMixin,
                        viewsets.GenericViewSet):

    serializer_class = BusinessSerializer

    def get_queryset(self):
        client = Socrata("data.cityofnewyork.us", secret_settings.APP_TOKEN)
        businesses_data = client.get("9w7m-hzhe", content_type="json",
                                limit="100",
                                select="camis, dba, boro, building, street, zipcode, cuisine_description")

        # Get all unique businesses
        businesses_data = {v['camis']:v for v in businesses_data}.values()

        businesses = [Business(camis=business.get('camis', ''),
                                dba=business.get('dba', ''),
                                cuisine_description=business.get('cuisine_description', ''),
                                address=business.get('building', '') + ' ' +
                                        business.get('street', '') + ' ' +
                                        business.get('boro', '') + ' ' +
                                        business.get('zipcode', '')) for business in businesses_data]
        return businesses

