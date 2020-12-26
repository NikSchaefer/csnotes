from rest_framework import serializers
from .models import (Cards, Tool, Api, MetaContent, DevTools)
# create serializers here


class CardSerial(serializers.ModelSerializer):
    class Meta:
        model = Cards
        fields = ('id', 'front', 'back')


class ApiSerial(serializers.ModelSerializer):
    class Meta:
        model = Api
        fields = ('name', 'link', 'description', 'Auth', 'HTTPS')


class DevToolsSerial(serializers.ModelSerializer):
    class Meta:
        model = DevTools
        fields = '__all__'


class ToolSerial(serializers.ModelSerializer):
    class Meta:
        model = Tool
        fields = '__all__'


class MetaSerial(serializers.ModelSerializer):
    class Meta:
        model = MetaContent
        fields = '__all__'
