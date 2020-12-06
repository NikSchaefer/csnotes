# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Cards(models.Model):
    id = models.AutoField(primary_key=True)
    type = models.TextField()  # This field type is a guess.
    front = models.TextField()
    back = models.TextField()
    known = models.BooleanField(blank=True, null=True)

    def __str__(self):
        return str(self.id)

    class Meta:
        managed = False
        db_table = 'cards'
