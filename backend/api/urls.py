from django.conf.urls import url, include
from rest_framework import routers
from views import BusinessesViewSet

router = routers.DefaultRouter()
router.register(r'businesses', BusinessesViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]

