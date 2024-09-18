# Overview
This project involves deploying a Node.js API, a Python Flask web application, and a MongoDB database using Kubernetes. The setup includes Prometheus for collecting metrics and Grafana for visualization.

The CI/CD pipeline, managed by Jenkins, automates the building and pushing of Docker images to Docker Hub. Currently, deployment is handled with Docker Compose, but it will transition to Kubernetes.

## Monitoring
#### Application Metrics (Flask)
The Flask application exposes an `/metrics` endpoint for Prometheus to scrape, with metrics visualized in Grafana.

![Flask App Metrics Dashboard](images/flask-app-dashboard.png)


#### Kubernetes Cluster Metrics
Cluster metrics are collected by kube-state-metrics and scraped by Prometheus. These metrics are then visualized in Grafana for comprehensive monitoring and analysis

![Cluster Metrics Dashboard](images/cluster-metrics-dashboard.png)



## Key Features
- **Containerization:** Docker is used to containerize the Node.js API, Python Flask web application, and MongoDB database.
- **Kubernetes Deployment:** Manages and deploys the stack using Kubernetes for scalability and orchestration.
- **Monitoring Stack:**  Prometheus and Grafana are integrated to collect and visualize both application and cluster-level metrics using Flask-exporter and kube-state-metrics.
- **CI/CD Automation:** Jenkins automates the build, push, and deployment processes.
- **Ansible:** Manages Kubernetes deployments and configurations(TBD Currently Docker Compose).
