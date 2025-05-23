# Jenkins
---

# Jenkins GitHub Integration Demo

This project demonstrates how to integrate Jenkins with GitHub for seamless Continuous Integration and Continuous Deployment (CI/CD) workflows. It provides a simple Node.js application and a ready-to-use Dockerfile to help you quickly set up a Jenkins pipeline that automatically builds and tests your code whenever changes are pushed to your GitHub repository.

## 🚀 Project Overview

- **Purpose:**  
  To showcase the integration of Jenkins with GitHub, enabling automated builds and tests for a Node.js application using Docker.
- **Tech Stack:**  
  - Node.js  
  - Docker  
  - Jenkins  
  - GitHub

## 🛠️ Features

- Sample Node.js application for demonstration.
- Dockerfile for containerized builds.
- Jenkins pipeline configuration for automated CI/CD.
- Example GitHub webhook setup for triggering Jenkins jobs on code changes.

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/aditya-nv-06/Jenkins.git
cd Jenkins
```

### 2. Build the Docker Image

```bash
docker build -t jenkins-demo-app .
```

### 3. Run the Application (Locally)

```bash
npm install
npm start
```

### 4. Set Up Jenkins

- Install Jenkins (locally or via Docker).
- Install required plugins: **Git**, **Docker**, **NodeJS**, etc.
- Create a new Jenkins pipeline and point it to this repository.
- Configure your GitHub repository webhook to notify Jenkins of pushes and pull requests.

### 5. Trigger Builds

Push code changes to your GitHub repository. Jenkins will automatically build and test your application.

## 📂 Repository Structure

```
.
├── Dockerfile
├── app.js
├── package.json
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository, open issues, or submit pull requests.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

**Maintained by [Aditya N V](https://github.com/aditya-nv-06)**

---
