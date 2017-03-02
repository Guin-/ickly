from __future__ import unicode_literals

from django.db import models

class Business(models.Model):
    camis = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    cuisine_description = models.CharField(max_length=255)

class Inspection(models.Model):
    business = models.ForeignKey(Business)
    record_date = models.DateField()
    inspection_date = models.DateField()
    inspection_type = models.CharField(max_length=255)
    action = models.CharField(max_length=255)
    violation_code = models.CharField(max_length=255)
    violation_description = models.TextField()
    critical_flag = models.CharField(max_length=255)
    score = models.SmallIntegerField(null=True)
    grade = models.CharField(max_length=255)
    grade_date = models.DateField(null=True)
