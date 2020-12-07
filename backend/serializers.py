from rest_framework import serializers

from .models import (Cards, Analytics, Auth, Database,
                     Hosting, Frontend, Backend)
# create serializers here


class CardSerial(serializers.ModelSerializer):
    class Meta:
        model = Cards
        fields = ('id', 'type', 'front', 'back', 'known')


class AnalyticsSerial(serializers.ModelSerializer):
    class Meta:
        model = Analytics
        fields = ('product', 'product_type', 'free_tier', 'free_limit')


class AuthSerial(serializers.ModelSerializer):
    class Meta:
        model = Auth
        fields = ('product', 'product_type', 'free_tier', 'free_limit')


class DatabaseSerial(serializers.ModelSerializer):
    class Meta:
        model = Database
        fields = ('product', 'product_type', 'free_tier', 'free_limit')


class FrontEndSerial(serializers.ModelSerializer):
    class Meta:
        model = Frontend
        fields = ('product', 'product_type', 'free_tier', 'free_limit')


class BackEndSerial(serializers.ModelSerializer):
    class Meta:
        model = Backend
        fields = ('product', 'product_type', 'free_tier', 'free_limit')


class HostingSerial(serializers.ModelSerializer):
    class Meta:
        model = Hosting
        fields = ('product', 'product_type', 'free_tier', 'free_limit')