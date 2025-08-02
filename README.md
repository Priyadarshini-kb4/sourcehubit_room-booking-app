# 🏨 Room Booking Web App

A simple Node.js + Express web app for booking rooms. Built with Docker, deployed on Azure using Azure DevOps CI/CD pipeline.

---

## 🚀 Live Demo

👉 [Visit the App](https://roombookingwebapp-bqhwc6awawbddxbg.canadacentral-01.azurewebsites.net/)  
📌 Hosted on Azure App Service with container deployment from ACR.

---

## 🧩 Features

- 🔎 View available rooms
- 🏷️ Book rooms with your name
- 📋 View all bookings
- 🐳 Docker containerized
- 🔁 CI/CD pipeline using Azure DevOps

---

## 📁 Project Structure

├── app.js # Node.js + Express app
├── Dockerfile # Docker configuration
├── azure-pipelines.yml # Azure DevOps pipeline
├── package.json # Project dependencies
└── README.md # This file



---

## ⚙️ Tech Stack

- **Backend**: Node.js + Express
- **DevOps**: Azure DevOps Pipelines
- **Containerization**: Docker
- **Hosting**: Azure Web App (Linux)
- **Image Registry**: Azure Container Registry (ACR)

---

## 🔄 Azure DevOps Pipeline

- **Trigger**: On push to `main` branch
- **Stage 1**: Build Docker image and push to ACR
- **Stage 2**: Deploy image to Azure App Service

File: `azure-pipelines.yml`

---

## 📡 API Endpoints

| Method | Route      | Description           |
|--------|------------|-----------------------|
| GET    | /rooms     | Get available rooms   |
| POST   | /book      | Book a room           |
| GET    | /bookings  | List all bookings     |

---

## 📦 Run Locally

```bash
# Clone and install
git clone <repo-url>
cd <repo-folder>
npm install

# Run
node app.js

Visit: http://localhost:3000

=========================================================

# Build image
docker build -t room-booking-app .

# Run container
docker run -p 3000:3000 room-booking-app

