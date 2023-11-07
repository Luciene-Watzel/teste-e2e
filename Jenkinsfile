pipeline{
    agent any

{
    agent any

    stages {
        stage('Clonar o repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/Luciene-Watzel/teste-e2e-ebac.git'
              }
            
        }

        stage('Instalar dependenciais') {
            steps {
                bat 'npm install'
            }
        }

        stage('Executar teste') {
            steps {
                bat 'npm run cy:run'
            }
        
        }
      }
   }
}