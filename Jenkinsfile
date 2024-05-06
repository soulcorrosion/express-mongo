pipeline {
    agent any
    stages {
        stage('install') {
            steps {
                echo 'Installing dependencies'
                //sh 'node --version'
                //sh 'npm install'
                bat 'call npm install'
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
                //sh 'npm test'
                bat 'call npm test'
            }
        }
    }
}