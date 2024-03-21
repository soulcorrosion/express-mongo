pipeline {
    agent { docker { image 'node:20-alpine' } }
    stages {
        stage('install') {
            steps {
                echo 'Installing dependencies'
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