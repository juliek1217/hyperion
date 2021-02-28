from rest_framework import generics

from .models import App
from .serializers import AppSerializer


class ListApp(generics.ListCreateAPIView):
    queryset = App.objects.all()
    serializer_class = AppSerializer


class DetailApp(generics.RetrieveUpdateDestroyAPIView):
    queryset = App.objects.all()
    serializer_class = AppSerializer
