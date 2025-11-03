from django.urls import path
from . import views

urlpatterns = [
    path('', views.inicio, name='inicio'),
    path('destaques/', views.destaques, name='destaques'),
    path('noticias/', views.noticias, name='noticias'),
]
