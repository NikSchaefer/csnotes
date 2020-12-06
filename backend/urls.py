from django.urls import path
from rest_framework import generics
from .models import Cards
from .serializers import CardSerializer
# pylint: disable=no-member

class CardView(generics.RetrieveAPIView):
    queryset = Cards.objects.all()
    serializer_class = CardSerializer


urlpatterns = [
    path('card/<int:pk>', CardView.as_view())
]