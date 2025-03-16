from django.shortcuts import render, redirect
import MySQLdb
from django.contrib import messages
from django.contrib.auth.hashers import make_password, check_password

def get_db_connection():
    try:
        return MySQLdb.connect(
            host="localhost", 
            user="root", 
            password="Aastha1811", 
            database="legal_aid", 
            charset="utf8"
        )
    except MySQLdb.Error as e:
        print(f"Database Connection Error: {e}")
        return None

def signlogin(request):
    if request.method == "POST":
        action = request.POST.get("action", "").strip()

        if action == "signup":
            first_name = request.POST.get("firstName", "").strip()
            last_name = request.POST.get("lastName", "").strip()
            email = request.POST.get("signupEmail", "").strip()
            phone = request.POST.get("phone", "").strip()
            legal_issue_category = request.POST.get("legalIssue", "").strip()
            password = make_password(request.POST.get("signupPassword", "").strip())  # Hashed password

            if not all([first_name, last_name, email, phone, legal_issue_category, password]):
                messages.error(request, "All fields are required!")
                return redirect('/signlogin/')

            try:
                with get_db_connection() as conn:
                    with conn.cursor() as cursor:
                        cursor.execute("SELECT id FROM users WHERE email = %s", (email,))
                        if cursor.fetchone():
                            messages.error(request, "Email already exists. Please use another email.")
                            return redirect('/signlogin/')
                        
                        query = """INSERT INTO users (first_name, last_name, email, phone, legal_issue_category, password) 
                                   VALUES (%s, %s, %s, %s, %s, %s)"""
                        cursor.execute(query, (first_name, last_name, email, phone, legal_issue_category, password))
                        conn.commit()
                        messages.success(request, "Account created successfully! Please login.")
            except Exception as e:
                messages.error(request, f"Error: {str(e)}")
                print(f"Signup Error: {e}")

            return redirect('/signlogin/')

        elif action == "login":
            email = request.POST.get("email", "").strip()
            password = request.POST.get("password", "").strip()

            if not email or not password:
                messages.error(request, "Email and password are required.")
                return redirect('/signlogin/')

            try:
                with get_db_connection() as conn:
                    with conn.cursor() as cursor:
                        cursor.execute("SELECT id, first_name, password FROM users WHERE email = %s", (email,))
                        user = cursor.fetchone()

                        if user and check_password(password, user[2]):
                            request.session['user_id'] = user[0]
                            request.session['user_name'] = user[1]
                            return redirect('/home/')
                        else:
                            messages.error(request, "Invalid email or password.")
            except Exception as e:
                messages.error(request, f"Error: {str(e)}")
                print(f"Login Error: {e}")

    return render(request, "signlogin.html")

def logout_view(request):
    request.session.flush()
    return redirect('/signlogin/')

def index(request):
    return render(request, "index.html")

def chat_page(request):
    return render(request, "chat.html")

def case_study(request):  # Fixed function name
    return render(request, "case.html")

def booking(request):
    if request.method == "POST":
        first_name = request.POST.get("firstName", "").strip()
        last_name = request.POST.get("lastName", "").strip()
        email = request.POST.get("email", "").strip()
        phone = request.POST.get("phone", "").strip()
        address = request.POST.get("address", "").strip()
        lawyer_name = request.POST.get("lawyer", "").strip()
        specialization = request.POST.get("specialization", "").strip()
        case_type = request.POST.get("caseType", "").strip()
        case_description = request.POST.get("caseDescription", "").strip()
        consultation_date = request.POST.get("consultationDate", "").strip()
        urgency = request.POST.get("urgency", "").strip()
        consultation_mode = request.POST.get("consultationMode", "").strip()

        if not all([first_name, last_name, email, phone, lawyer_name, case_type, case_description, consultation_date]):
            messages.error(request, "All required fields must be filled!")
            return redirect('/booking/')

        try:
            with get_db_connection() as conn:
                with conn.cursor() as cursor:
                    booking_query = """
                    INSERT INTO booking (first_name, last_name, email, phone, address, lawyer_name, specialization, 
                                         case_type, case_description, consultation_date, urgency, consultation_mode, status)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, 'Pending')
                    """
                    cursor.execute(booking_query, 
                        (first_name, last_name, email, phone, address, lawyer_name, specialization, 
                         case_type, case_description, consultation_date, urgency, consultation_mode))
                    conn.commit()
                    messages.success(request, "Booking successfully created!")
        except Exception as e:
            messages.error(request, f"Error: {str(e)}")
            print(f"Booking Error: {e}")

        return redirect('/booking/')

    return render(request, "booking.html")

def lawyer(request):
    return render(request, "lawyer.html")
