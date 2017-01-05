from rest_framework import viewsets, mixins
from serializers import BusinessSerializer

from sodapy import Socrata

class BusinessesViewSet(mixins.ListModelMixin,
                        viewsets.GenericViewSet):

    serializer_class = BusinessSerializer

    def get_queryset(self):
        client = Socrata("data.cityofnewyork.us", "z9bHXnSMLOVBFTGrELvWCcCBN")
        businesses = client.get("9w7m-hzhe", content_type="json",
                                limit="500000",
                                select="camis, dba, boro, building, street, zipcode, cuisine_description")
        # Get all unique businesses
        businesses = {v['camis']:v for v in businesses}.values()
        return businesses

