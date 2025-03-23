pipeline {
    agent {
        docker {
            image 'node:14'
        }
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/aditya-nv-06/Jenkins'
            }
        }

        stage('Test') {
            steps {
                sh 'npm install'
                sh 'npm test'
            }
        }
    }
}
