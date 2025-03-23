pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', 
                url: 'https://github.com/aditya-nv-06/Jenkins'
            }
        }

        stage('Install Dependencies') {
            steps {
                withDockerContainer('node:latest') {
                    sh 'apt-get update && apt-get install -y nodejs npm'
                }
            }
        }

        stage('Test') {
            steps {
                withDockerContainer('node:latest') {
                    sh 'npm install'
                    sh 'npm test'
                }
            }
        }
    }
}