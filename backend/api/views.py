from rest_framework import viewsets, mixins
from serializers import BusinessSerializer
from models import Business

class BusinessesViewSet(viewsets.ModelViewSet):
    queryset = Business.objects.all()
    serializer_class = BusinessSerializer

