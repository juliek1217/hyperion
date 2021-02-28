from rest_framework import serializers

from .models import App


class AppSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'title',
            'description',
        )
        model = App
