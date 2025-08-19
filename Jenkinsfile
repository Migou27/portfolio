pipeline {
    agent any

    environment {
        GITLAB_TOKEN = credentials('gitlab-token')
        PROJECT_ID = '73357393'
        BRANCH = 'master'
        DEPLOY_PATH = "/Users/miguelfenerol/Documents/Dev/Autres/DevOpsControle"
    }

    stages {

        stage('Check trigger') {
            steps {
                script {
                    echo "Vérification du trigger GitLab..."
                    sh """
                    curl --header "PRIVATE-TOKEN: $GITLAB_TOKEN" \\
                    "https://gitlab.com/api/v4/projects/$PROJECT_ID/jobs/artifacts/$BRANCH/raw/trigger-jenkins.txt?job=trigger-jenkins" \\
                    -o trigger-jenkins.txt || true
                    """
                    if (!fileExists('trigger-jenkins.txt')) {
                        error "Aucun trigger détecté. Pipeline Jenkins arrêtée."
                    }
                    echo "Trigger détecté !"
                }
            }
        }

        stage('Download artifacts') {
            steps {
                echo "Téléchargement des artefacts depuis GitLab..."
                sh """
                curl --header "PRIVATE-TOKEN: $GITLAB_TOKEN" \\
                "https://gitlab.com/api/v4/projects/$PROJECT_ID/jobs/artifacts/$BRANCH/download?job=package" \\
                -o artifacts.zip
                unzip -o artifacts.zip
                """
            }
        }

        stage('Deploy') {
            steps {
                echo "Déploiement dans un dossier local..."
                sh "tar -xzf react-build.tar.gz -C $DEPLOY_PATH"
            }
        }

        stage('Clean trigger') {
            steps {
                echo "Suppression du trigger..."
                sh "rm -f trigger-jenkins.txt"
            }
        }

        stage('Notify') {
            steps {
                echo "Envoi mail de notification..."
                mail to: 'miguel.fenerol@ynov.com',
                     subject: "Jenkins Deployment terminé",
                     body: "Le déploiement du build React a été effectué avec succès."
            }
        }

    }
}
