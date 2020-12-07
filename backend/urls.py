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

    def get(self, request, *args, **kwargs):
        response = super(Analytics_data, self).get(request, *args, **kwargs)
        response.data = {
            'meta': {
                'product': 'Analytics',
                'columns': ['Product', '', "Free Tier", 'Free Limit'],
                'path': 'analytics'
            },
            'content': response.data
        }
        return response


class Authentication_data(generics.ListAPIView):
    queryset = Auth.objects.all()
    serializer_class = AuthSerial

    def get(self, request, *args, **kwargs):
        response = super(Authentication_data, self).get(request, *args, **kwargs)
        response.data = {
            'meta': {
                'product': 'Authentication',
                'columns': ['Product', 'Type', "Free Tier", 'Free Limit'],
                'path': 'auth'
            },
            'content': response.data
        }
        return response



class Database_data(generics.ListAPIView):
    queryset = Database.objects.all()
    serializer_class = DatabaseSerial

    def get(self, request, *args, **kwargs):
        response = super(Database_data, self).get(
            request, *args, **kwargs)
        response.data = {
            'meta': {
                'product': 'Database',
                'columns': ['Product', 'Type', "Free Tier", 'Free Limit'],
                'path': 'database'
            },
            'content': response.data
        }
        return response



class FrontEnd_data(generics.ListAPIView):
    queryset = Frontend.objects.all()
    serializer_class = FrontEndSerial

    def get(self, request, *args, **kwargs):
        response = super(FrontEnd_data, self).get(
            request, *args, **kwargs)
        response.data = {
            'meta': {
                'product': 'Frontend Frameworks',
                'columns': ['Product', 'Size'],
                'path': 'frontend'
            },
            'content': response.data
        }
        return response



class BackEnd_data(generics.ListAPIView):
    queryset = Backend.objects.all()
    serializer_class = BackEndSerial

    def get(self, request, *args, **kwargs):
        response = super(BackEnd_data, self).get(
            request, *args, **kwargs)
        response.data = {
            'meta': {
                'product': 'Backend Frameworks',
                'columns': ['Product', 'Type'],
                'path': 'backend'
            },
            'content': response.data
        }
        return response



class Hosting_data(generics.ListAPIView):
    queryset = Hosting.objects.all()
    serializer_class = HostingSerial

    def get(self, request, *args, **kwargs):
        response = super(Hosting_data, self).get(
            request, *args, **kwargs)
        response.data = {
            'meta': {
                'product': 'Hosting',
                'columns': ['Product', 'Type', "Free Tier", 'Free Limit'],
                'path': 'hosting'
            },
            'content': response.data
        }
        return response



urlpatterns = [
    path('coding-university/<int:pk>', CardView.as_view()),
    path('resource/analytics', Analytics_data.as_view()),
    path('resource/auth', Authentication_data.as_view()),
    path('resource/database', Database_data.as_view()),
    path('resource/frontend', FrontEnd_data.as_view()),
    path('resource/backend', BackEnd_data.as_view()),
    path('resource/hosting', Hosting_data.as_view()),
]
