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
    type = models.CharField(max_length=30, default='Hosting')
    product = models.CharField(max_length=20, default="")
    product_type = models.CharField(max_length=20, blank=True, default="")
    free_tier = models.BooleanField(default=False, blank=True)
    free_limit = models.CharField(max_length=20, default='N/A', blank=True)
    link = models.CharField(max_length=40, default='/')
    img_source = models.CharField(default='/static/Images/', max_length=60)

    def __str__(self):
        return self.product


class Api(models.Model):
    type = models.CharField(max_length=40, default="")
    name = models.CharField(max_length=40, default="")
    link = models.TextField(default="")
    description = models.TextField(default="")
    Auth = models.CharField(max_length=15, default="")
    HTTPS = models.CharField(max_length=15, default="")

    def __str__(self):
        return self.name


class DevTools(models.Model):
    type = models.CharField(max_length=40, default="")
    title = models.CharField(max_length=40, default="")
    link = models.CharField(max_length=80, default="")
    text = models.TextField()

    def __str__(self):
        return self.title


class MetaContent(models.Model):
    name = models.CharField(max_length=40)
    content = models.JSONField()

    def __str__(self):
        return self.name
