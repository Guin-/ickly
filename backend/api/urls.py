from django.conf.urls import url, include
from rest_framework import routers

from api.views import BusinessesViewSet, BusinessInspectionEdgeEndpoint

router = routers.DefaultRouter()
router.register(r'businesses', BusinessesViewSet)
router.register(r'businesses/(?P<parent_id>\d+)/inspections', BusinessInspectionEdgeEndpoint)

urlpatterns = [
    url(r'^', include(router.urls)),
]

