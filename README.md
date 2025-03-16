# AI Legal Agent 👨‍⚖️

## Overview

AI Legal Agent is an advanced legal assistant designed to streamline legal workflows using artificial intelligence. This project offers multiple functionalities, making legal assistance more accessible and efficient.

### 🔹 Features

✅ **Legal Chatbot** – Ask legal questions and receive accurate answers instantly.\
✅ **Lawyer Booking System** – Users can book consultations with lawyers directly.\
✅ **Lawyer Details Section** – A detailed directory of lawyers with expertise and availability.\
✅ **Legal Content Analyzer** – Analyze user-provided legal content for insights and interpretations.\
✅ **Knowledge Hub** – A dedicated section to learn about articles, sections, and various laws.\
✅ **Document Summarizer** – Upload legal documents and get concise summaries.\
✅ **Interactive Q&A on Summarized Content** – Ask follow-up questions on summarized documents.

---

## 📌 Problems Solved

1️⃣ **Quick Legal Assistance** – Get instant answers to legal questions.\
2️⃣ **Easy Lawyer Access** – Find and book a lawyer easily.\
3️⃣ **Content Analysis** – Understand legal documents better.\
4️⃣ **Legal Knowledge Hub** – Educate users on laws, rights, and regulations.\
5️⃣ **Efficient Document Summarization** – Quickly extract key points from lengthy legal documents.

---

## 🛠️ Tech Stack

- **Groq** – Cloud-based LLM provider.
- **Phidata** – Agentic AI framework.
- **Django** – Backend framework.
- **HTML, CSS, JavaScript** – Frontend.
- **SQLite** – Database.

---

## 🏢 Project Structure

```
AI-Legal-Agent/
│── chatbot_project/
│── Legal_summarizer/
│── chatbot/
│── frontend/
│── staticfiles/
│   │── admin/
│   │── chatbot/
│   │── css/
│   │── images/
│   │── js/
│── LICENSE
│── manage.py
│── .gitignore
│── README.md
│── requirements.txt
```

---

## ⚙️ Setup Instructions

### 1️⃣ Prerequisites

- Install **Python 3.10**.
- Install **pip** for dependency management.
- Install **virtual environment** for project isolation.

---

### 2️⃣ Running the Project

#### 📜 Setting up the Virtual Environment

```sh
# Clone the repository
git clone https://github.com/your-username/AI-Legal-Agent.git  
cd AI-Legal-Agent

# Create & activate a virtual environment
python -m venv venv
source venv/bin/activate  # For Linux/Mac
venv\Scripts\activate  # For Windows

# Install dependencies
pip install -r requirements.txt

# Apply migrations
python manage.py migrate

# Create a superuser for the admin panel
python manage.py createsuperuser

# Start the server
python manage.py runserver
```

---

## 🔎 Usage

- **Ask Legal Questions**: Use the chatbot for quick legal assistance.
- **Book a Lawyer**: Browse lawyer details and schedule consultations.
- **Analyze Legal Content**: Upload content for automated legal insights.
- **Summarize Legal Documents**: Upload documents and get concise summaries.
- **Ask Questions on Summaries**: Interact with summarized content through a chatbot.
- **Learn About Laws**: Use the knowledge hub for legal education.

---

## 🔭 Future Scope

🔥 **Multi-Lingual Legal Support** – Support for Indian regional languages.\
📜 **Legal Case Prediction** – AI-based analysis of legal cases.\
🏦 **Lawyer Consultation & Booking** – Connect users with legal experts.\
🔍 **Integration with Govt Portals** – Access legal databases directly.\
🏦 **Financial & Tax Law Advisory** – Provide tax and corporate legal advice.\
🔗 **Blockchain-based Verification** – Secure legal documents with blockchain.

---

## 📜 License

This project is licensed under the MIT License.
