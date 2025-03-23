pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', // Replace with the branch you want to checkout
          url: 'https://github.com/aditya-nv-06/Jenkins' // Replace with the repository URL
      }
    }

    stage('Install Dependencies') {
      steps {
        withDocker {
          image 'node:latest'
          step {
            sh 'npm install'
          }
        }
      }
    }

    stage('Test') {
      steps {
        withDocker {
          image 'node:latest'
          step {
            sh 'npm test'
          }
        }
      }
    }
  }
}