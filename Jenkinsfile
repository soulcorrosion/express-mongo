pipeline {
    agent any
    stages {
        stage('install') {
            steps {
                echo 'Installing dependencies'
                //sh 'node --version'
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
                //sh 'npm test'
            }
        }
    }
}