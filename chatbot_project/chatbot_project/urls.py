from django.contrib import admin
from django.urls import path, include
from frontend.views import index, chat_page,signlogin , booking ,lawyer,knowledge,court
from frontend import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path('', views.signlogin, name='signlogin'),  
    path("home/api/chatbot/", include("chatbot.urls")),  #  chatbot API URLs
    path("home/", index, name="index"),  #  Homepage (index.html)
    path("chat/", chat_page, name="chat_page"),  #  Chat Page (chat.html)
    path("case/", signlogin, name="case"),  #  Case Studys
    path("booking/", booking, name="booking"),  # Booking Page Route ✅
    path("lawyer/", lawyer, name="lawyer"),
    path("knowledge/", knowledge, name="knowledge"),
    path("court/", court, name="court") 


]
