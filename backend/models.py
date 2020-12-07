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
        managed = True
        db_table = 'cards'
