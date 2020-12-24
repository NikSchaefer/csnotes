from django.contrib import admin
from .models import (Cards, Analytics, Auth, Database,
                     Hosting, Frontend, Backend, Api)
# Register your models here.

admin.site.register(Cards)
admin.site.register(Api)

admin.site.register(Analytics)
admin.site.register(Auth)
admin.site.register(Database)
admin.site.register(Hosting)
admin.site.register(Frontend)
admin.site.register(Backend)
