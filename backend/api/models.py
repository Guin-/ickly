from __future__ import unicode_literals

from django.db import models

class Business(models.Model):
    camis = models.CharField(max_length=255, primary_key=True)
    name = models.CharField(max_length=255, db_index=True)
    address = models.CharField(max_length=255)
    phone = models.CharField(max_length=32)
    cuisine_description = models.CharField(max_length=255)

class Inspection(models.Model):
    GRADE_A = 'A'
    GRADE_B = 'B'
    GRADE_C = 'C'
    NOT_YET_GRADED = 'Not Yet Graded'
    GRADE_PENDING_REOPENING = 'P'
    GRADE_PENDING = 'Z'

    GRADE_CHOICES = (
        (GRADE_A, 'A'),
        (GRADE_B, 'B'),
        (GRADE_C, 'C'),
        (NOT_YET_GRADED, 'Not Yet Graded'),
        (GRADE_PENDING_REOPENING, 'Grade Pending issued on re-opening following an initial inspection that resulted in a closure'),
        (GRADE_PENDING, 'Grade Pending'),
    )

    CRITICAL = 'Critical'
    NOT_CRITICAL = 'Not Critical'
    NOT_APPLICABLE = 'Not Applicable'

    CRITICAL_FLAG_CHOICES = (
        (CRITICAL, 'Critical'),
        (NOT_CRITICAL, 'Not Critical'),
        (NOT_APPLICABLE, 'Not Applicable'),
    )

    business = models.ForeignKey(Business)
    record_date = models.DateField()
    inspection_date = models.DateField()
    inspection_type = models.CharField(max_length=255)
    action = models.CharField(max_length=255)
    violation_code = models.CharField(max_length=3)
    violation_description = models.TextField()
    critical_flag = models.CharField(max_length=64, choices=CRITICAL_FLAG_CHOICES)
    score = models.SmallIntegerField(null=True)
    grade = models.CharField(max_length=64, choices=GRADE_CHOICES)
    grade_date = models.DateField(null=True)

