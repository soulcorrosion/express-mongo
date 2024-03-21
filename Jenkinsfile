pipeline {
    agent { docker { image 'node:20.11.1-alpine3.19' } }
    stages {
        stage('install') {
            steps {
                echo 'Installing dependencies'
                sh 'node --version'
                sh 'npm install'
            }
        }
        stage('build') {
            steps {
                echo 'Building'                
            }
        } 
        stage('test') {
            steps {
                echo 'Testing'                
                sh 'npm test'
            }
        }
    }
}