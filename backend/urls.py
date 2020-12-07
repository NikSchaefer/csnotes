from django.urls import path
from rest_framework import generics
from .models import (Cards, Analytics, Auth, Database,
                     Hosting, Frontend, Backend)
from .serializers import (
    CardSerial, AnalyticsSerial,
    AuthSerial, DatabaseSerial,
    FrontEndSerial, HostingSerial, BackEndSerial)  # , ToolSerializer
# pylint: disable=no-member


class CardView(generics.RetrieveAPIView):
    queryset = Cards.objects.all()
    serializer_class = CardSerial


class Analytics_data(generics.ListAPIView):
    queryset = Analytics.objects.all()
    serializer_class = AnalyticsSerial


class Authentication_data(generics.ListAPIView):
    queryset = Auth.objects.all()
    serializer_class = AuthSerial


class Database_data(generics.ListAPIView):
    queryset = Database.objects.all()
    serializer_class = DatabaseSerial


class FrontEnd_data(generics.ListAPIView):
    queryset = Frontend.objects.all()
    serializer_class = FrontEndSerial


class BackEnd_data(generics.ListAPIView):
    queryset = Backend.objects.all()
    serializer_class = BackEndSerial


class Hosting_data(generics.ListAPIView):
    queryset = Hosting.objects.all()
    serializer_class = HostingSerial


urlpatterns = [
    path('coding-university/<int:pk>', CardView.as_view()),
    path('analytics', Analytics_data.as_view()),
    path('auth', Authentication_data.as_view()),
    path('database', Database_data.as_view()),
    path('frontend', FrontEnd_data.as_view()),
    path('backend', BackEnd_data.as_view()),
    path('hosting', Hosting_data.as_view()),
]
