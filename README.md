﻿# Overview
This project involves deploying a Node.js API, a Python Flask web application, and a MongoDB database using Kubernetes and Helm charts. The setup includes Prometheus for collecting metrics, Grafana for visualization, and an ECK stack for log aggregation using Elasticsearch, Kibana, and Filebeat.

The CI/CD pipeline, managed by Jenkins, automates the building and pushing of Docker images to Docker Hub. Currently, deployment is handled with Docker Compose, but it will transition to Kubernetes.

## Monitoring
#### Application Metrics (Flask)
The Flask application exposes an `/metrics` endpoint for Prometheus to scrape, with metrics visualized in Grafana.

![Flask App Metrics Dashboard](images/flask-app-dashboard.png)


#### Kubernetes Cluster Metrics
Cluster metrics are collected by kube-state-metrics and scraped by Prometheus. These metrics are then visualized in Grafana for comprehensive monitoring and analysis

![Cluster Metrics Dashboard](images/cluster-metrics-dashboard.png)

## Logging
The logging setup leverages the ECK (Elastic Cloud on Kubernetes) stack to aggregate and visualize logs from all containers. The key components include:

- **Elasticsearch:** Acts as the centralized log storage and search engine, where all logs are indexed and stored for efficient querying.
- **Kibana:** Provides a web interface for visualizing and analyzing logs stored in Elasticsearch. It allows users to create dashboards and perform real-time analysis.
- **Filebeat:** A lightweight shipper that collects and forwards logs from all running containers to Elasticsearch. It ensures that logs are sent efficiently and reliably.

## Key Features
- **Containerization:** Docker is used to containerize the Node.js API, Python Flask web application, and MongoDB database.
- **Kubernetes Deployment:** Manages and deploys the stack using Kubernetes for scalability and orchestration.
- **Helm Charts:** Custom Helm charts have been introduced for easier deployment and management of applications.
- **Logging Stack:** Deployed a logging solution using the ECK stack, which includes Elasticsearch, Kibana, and Filebeat.
- **Monitoring Stack:**  Prometheus and Grafana are integrated to collect and visualize both application and cluster-level metrics using Flask-exporter and kube-state-metrics.
- **CI/CD Automation:** Jenkins automates the build, push, and deployment processes.
- **Ansible:** Manages Kubernetes deployments and configurations(TBD Currently Docker Compose).
