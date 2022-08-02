from django.db import router
from django.urls import path, include
from . import views
from rest_framework import routers


router = routers.DefaultRouter()
router.register("category", views.CategoryView)
router.register("dish", views.DishView)
router.register("Order", views.OrdersView)

urlpatterns = [
    path('', include(router.urls))
]
