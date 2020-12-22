from rest_framework import serializers

from .models import (Cards, Analytics, Auth, Database,
                     Hosting, Frontend, Backend)
# create serializers here


class CardSerial(serializers.ModelSerializer):
    class Meta:
        model = Cards
        fields = ('id', 'front', 'back')


class AnalyticsSerial(serializers.ModelSerializer):
    class Meta:
        model = Analytics
        fields = '__all__'


class AuthSerial(serializers.ModelSerializer):
    class Meta:
        model = Auth
        fields = '__all__'


class DatabaseSerial(serializers.ModelSerializer):
    class Meta:
        model = Database
        fields = '__all__'


class FrontEndSerial(serializers.ModelSerializer):
    class Meta:
        model = Frontend
        fields = '__all__'


class BackEndSerial(serializers.ModelSerializer):
    class Meta:
        model = Backend
        fields = '__all__'


class HostingSerial(serializers.ModelSerializer):
    class Meta:
        model = Hosting
        fields = '__all__'
