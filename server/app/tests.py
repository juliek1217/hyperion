from django.test import TestCase

from .models import App


class AppModelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        App.objects.create(title='first app')
        App.objects.create(description='a description here')

    def test_title_content(self):
        app = App.objects.get(id=1)
        expected_object_name = f'{app.title}'
        self.assertEquals(expected_object_name, 'first app')

    def test_description_content(self):
        app = App.objects.get(id=2)
        expected_object_name = f'{app.description}'
        self.assertEquals(expected_object_name, 'a description here')
