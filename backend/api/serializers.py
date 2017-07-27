from rest_framework import serializers
from models import Business, Inspection

class BusinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Business
        fields = ('camis', 'name', 'address', 'phone', 'cuisine_description')

class InspectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inspection
        fields = ('business', 'record_date', 'inspection_date', 'inspection_type', 'action',
                  'violation_code', 'violation_description', 'critical_flag', 'score',
                  'grade', 'grade_date')

