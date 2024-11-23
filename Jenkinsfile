pipeline{
    agent any
    stages{
        stage('SCM'){
            steps{
                checkout scm
            }
        }
        stage('Test'){
            steps{
                bat '''
                choco install nodejs -y
                npm install
                '''
                bat 'npm test'
            }
        }
        stage('Build'){
            steps{
                bat 'npm run build'
            }
        }
        stage('Deploy'){
            steps{
                script{
                    echo 'Deploying application...'
                }
            }
        }
    }
}