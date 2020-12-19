from django.db import models
 

class Cards(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    type = models.TextField(default=u"")
    front = models.TextField()
    back = models.TextField()

    def __str__(self):
        return str(self.id)

    class Meta:
        managed = True
        db_table = 'cards'


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
