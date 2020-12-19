import os
import sys

from django.core.wsgi import get_wsgi_application
from django.core.management import call_command
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")

application = get_wsgi_application()
call_command("migrate")

sysout = sys.stdout
sys.stdout = open('db.json', 'r')
call_command('loaddata', 'db.json')
sys.stdout = sysout
