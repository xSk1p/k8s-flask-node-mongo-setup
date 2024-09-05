pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials'
        IMAGE_NAME_API = 'xskip/cr-api'
        IMAGE_NAME_APP = 'xskip/cr-app'
        IMAGE_NAME_MONGO ='xskip/cr-mongo'
    }

  stages {
        stage('Build Images') {
            steps {
                script {
                    echo "Building ${IMAGE_NAME_MONGO} Image..."
                    docker.build("${IMAGE_NAME_MONGO}:latest", "./mongoDB")

                    echo "Building ${IMAGE_NAME_API} Image..."
                    docker.build("${IMAGE_NAME_API}:latest", "./backend")

                    echo "Building ${IMAGE_NAME_APP} Image..."
                    docker.build("${IMAGE_NAME_APP}:latest", "./app")
                }
            }
        }

        stage('Push Images') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', "${DOCKER_CREDENTIALS_ID}") {
                        docker.image("${IMAGE_NAME_MONGO}:latest").push('latest')
                    }

                    docker.withRegistry('https://index.docker.io/v1/', "${DOCKER_CREDENTIALS_ID}") {
                        docker.image("${IMAGE_NAME_API}:latest").push('latest')
                    }

                    docker.withRegistry('https://index.docker.io/v1/', "${DOCKER_CREDENTIALS_ID}") {
                        docker.image("${IMAGE_NAME_APP}:latest").push('latest')
                    }
                }
            }
        }

        stage('Deploy Images') {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: 'ssh-deploy-credentials', keyFileVariable: 'SSH_KEY', usernameVariable: 'SSH_USER')]) {
                    script {
                        ansiblePlaybook(
                            playbook: 'ansible/deploy-cr-services.yaml',
                            inventory: 'ansible/inventory.ini',
                            extras: '-e ansible_user=${SSH_USER} -e ansible_ssh_private_key_file=${SSH_KEY}'
                        )
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
