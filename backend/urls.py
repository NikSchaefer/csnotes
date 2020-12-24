from django.urls import path
from rest_framework import generics, response
from .models import (Cards, Api, Tool)
from .serializers import (ApiSerial, CardSerial, ToolSerial)
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

    def get(self, request, *args, **kwargs):
        response = super(Tool_data, self).get(request, *args, **kwargs)
        response.data = {
            'meta': {
                'product': 'Analytics',
                'columns': ['Product', '', "Free Tier", 'Free Limit'],
                'path': 'analytics'
            },
            'content': response.data
        }
        return response


urlpatterns = [
    path('api', ApiView.as_view()),
    path('dataset/coding-university/<int:pk>', CardView.as_view()),
    path('resources', Tool_data.as_view()),
]
