from rest_framework import serializers

class BusinessSerializer(serializers.Serializer):
    camis = serializers.CharField()
    dba = serializers.CharField(allow_blank=True)
    address = serializers.CharField(allow_blank=True)
    cuisine_description = serializers.CharField(allow_blank=True)
