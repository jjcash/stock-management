from django.db import models

class StoneType(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()

class Slab(models.Model):
    code = models.CharField(max_length=100, unique=True)
    length = models.FloatField()
    width = models.FloatField()
    thickness = models.FloatField()
    stone_type = models.ForeignKey(StoneType, on_delete=models.CASCADE)
    surface_defects = models.TextField()
    qr_code = models.ImageField(upload_to='qrcodes/')
    storage_position = models.CharField(max_length=100)

