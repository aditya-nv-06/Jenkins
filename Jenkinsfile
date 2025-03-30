pipeline {
  agent any
  tools{
    nodejs 'Nodejs'
  }
  stages {
     stage('Checkout the code'){
      steps{ 
        git url:'https://github.com/aditya-nv-06/Jenkins', branch: 'main'
      }
     }

      stage('Install dependencies') {
        steps {
            sh 'npm install'
        }
      }

      stage('Run tests'){
        steps {
            sh 'npm test'
        }
      }

      stage('Build the docker image'){
        steps {
            sh 'docker build -t ironcrush2006/jenkins-nodejs-app .'
        }
      }

      stage('Push the docker image'){
        steps {
            sh 'docker push ironcrush2006/jenkins-nodejs-app'
        }
      }
  }
}