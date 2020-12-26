from django.contrib import admin
from .models import (Cards, Tool, Api, MetaContent, DevTools)
# Register your models here.

admin.site.register(Cards)
admin.site.register(Api)
admin.site.register(Tool)
admin.site.register(MetaContent)
admin.site.register(DevTools)