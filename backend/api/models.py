from __future__ import unicode_literals

from django.db import models

class Business(models.Model):
    camis = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    cuisine_description = models.CharField(max_length=255)
