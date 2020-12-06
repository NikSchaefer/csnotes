from rest_framework import serializers

from .models import Cards
# create serializers here


class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cards
        fields = ('id', 'type', 'front', 'back', 'known')
