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


class Note(models.Model):
    title = models.CharField(max_length=30, default='')
    body = models.TextField(default='')
    date = models.DateTimeField(auto_now_add=True)
    user = models.CharField(max_length=30, default='', primary_key=True)

    def __str__(self):
        return self.title


class Tool(models.Model):
    product = models.CharField(max_length=20, default="")
    product_type = models.CharField(max_length=20, blank=True, default="")
    free_tier = models.BooleanField(default=False, blank=True)
    free_limit = models.CharField(max_length=20, default='N/A', blank=True)
    link = models.CharField(max_length=40, default='/')
    img_source = models.CharField(default='/static/Images/', max_length=60)

    def __str__(self):
        return self.product

    class Meta:
        abstract = True


class Analytics(Tool):
    pass


class Database(Tool):
    pass


class Auth(Tool):
    pass


class Frontend(Tool):
    pass


class Backend(Tool):
    pass


class Hosting(Tool):
    pass
