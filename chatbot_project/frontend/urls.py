from django.urls import path
from .views import index, chat_page, signlogin, booking, case_study,lawyer,court,knowledge

urlpatterns = [
    path("", signlogin, name="signlogin"),  # Signup/Login Page
    path("home/", index, name="index"),  # Homepage
    path("chat/", chat_page, name="chat_page"),  # Chatbot UI
    path("case/", case_study, name="case"),  # Case Study Page (assuming case_study is the correct view)
    path("booking/", booking, name="booking"),  # Booking Page
    path("lawyer/", lawyer, name="lawyer"), 
    path("knowledge/", knowledge, name="knowledge"), 
    path("court/", court, name="court") 

]
