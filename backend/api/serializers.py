from rest_framework import serializers

class BusinessSerializer(serializers.Serializer):
    camis = serializers.CharField()
    dba = serializers.CharField(required=False)
    boro = serializers.CharField(required=False)
    street = serializers.CharField(required=False)
    building = serializers.CharField(required=False)
    zipcode = serializers.CharField(required=False)
    cuisine_description = serializers.CharField(required=False)
