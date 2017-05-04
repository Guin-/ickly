from rest_framework import viewsets, filters
from serializers import BusinessSerializer
from models import Business

class BusinessesViewSet(viewsets.ModelViewSet):
    queryset = Business.objects.all()
    serializer_class = BusinessSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('name',)

