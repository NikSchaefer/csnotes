from django.urls import path
from rest_framework import generics, response
from .models import (Cards, Api, Tool, MetaContent, DevTools)
from .serializers import (ApiSerial, CardSerial,
                          ToolSerial, MetaSerial, DevToolsSerial)
# pylint: disable=no-member


class CardView(generics.RetrieveAPIView):
    queryset = Cards.objects.all()
    serializer_class = CardSerial


class ApiView(generics.ListAPIView):
    serializer_class = ApiSerial

    def get_queryset(self):
        queryset = Api.objects.all()
        type = self.request.query_params.get('type')

        queryset = queryset.filter(type=type)
        return queryset


class Tool_data(generics.ListAPIView):
    serializer_class = ToolSerial

    def get_queryset(self):
        queryset = Tool.objects.all()
        type = self.request.query_params.get('type')
        queryset = queryset.filter(type=type)
        return queryset


class DevTool_data(generics.ListAPIView):
    serializer_class = DevToolsSerial
    queryset = DevTools.objects.all()


class MetaView(generics.ListAPIView):
    serializer_class = MetaSerial

    def get_queryset(self):
        queryset = MetaContent.objects.all()
        type = self.request.query_params.get('type')

        queryset = queryset.filter(name=type)
        return queryset


urlpatterns = [
    path('api', ApiView.as_view()),
    path('dataset/coding-university/<int:pk>', CardView.as_view()),
    path('resources', Tool_data.as_view()),
    path('devtools', DevTool_data.as_view()),
    path('meta', MetaView.as_view()),
]
