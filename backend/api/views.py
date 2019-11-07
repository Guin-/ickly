from rest_framework import viewsets, filters

from api.models import Business, Inspection
from api.serializers import BusinessSerializer, InspectionSerializer

class BaseEdgeViewSet(viewsets.ReadOnlyModelViewSet):

    def __init__(self, *args, **kwargs):
        super(BaseEdgeViewSet, self).__init__(*args, **kwargs)

    parent_field = ''

    def get_queryset(self):
        """
        Returns QuerySet of all items on the parent
        """
        parent_id = self.kwargs['parent_id']
        return self.queryset.filter(**{self.parent_field: parent_id})

class BusinessesViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Business.objects.all()
    serializer_class = BusinessSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('name',)

class BusinessInspectionEdgeEndpoint(BaseEdgeViewSet):
    queryset = Inspection.objects.all()
    parent_field = 'business'
    serializer_class = InspectionSerializer
