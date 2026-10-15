# 🚀 DevOps & Kubernetes Playground

A hands-on public repository dedicated to learning and practicing modern **DevOps**, **Docker**, and **Kubernetes (Minikube)** tools and practices.

---

## 🎯 Project Overview

The main objective of this project is to build a complete end-to-end continuous integration and deployment pipeline for a sample application — covering everything from containerization and local orchestration to automated CI/CD and deployment on a local Kubernetes cluster.

---

## 🛠️ Tech Stack & DevOps Tools

- **Containerization:** Docker, Docker Compose
- **Orchestration:** Kubernetes (Minikube), `kubectl`
- **Package Manager:** Helm *(optional / in progress)*
- **CI/CD:** GitHub Actions
- **Monitoring & Observability:** Prometheus, Grafana *(planned)*
- **Application Stack:** 
  - **Frontend:** React (Vite / JavaScript)
  - **Backend:** Python FastAPI

---

## 🏗️ Architecture Overview

```mermaid
graph TD
    classDef client fill:#4f9db8,stroke:#333,stroke-width:2px;
    classDef ingress fill:#514fb8,stroke:#333,stroke-width:2px;
    classDef service fill:#a3932a,stroke:#333,stroke-width:2px;
    classDef pod fill:#2ca32a,stroke:#333,stroke-width:2px;
    classDef config fill:#eee,stroke:#333,stroke-dasharray: 5 5;

    Client["💻Client / Browser (my-app.local)"] -->|HTTP / Request| Ingress["Ingress Controller (nginx)"]
    
    subgraph K8s["Kubernetes Cluster (Minikube)"]
    
        Ingress -->|TCP: 8000| AppService(["App Service (ClusterIP)"])
        
            PodApp["App - Pod"]

            PodDB["PostgreSQL DB - Pod"]
        
        AppService --> PodApp

        PodApp -->|TCP: 5432 | DBService(["DB Service"])

        DBService --> PodDB
        
    end

    class Client client;
    class Ingress ingress;
    class AppService,DBService service;
    class PodApp,PodDB pod;
    class ConfigMapApp,SecretApp,ConfigMapDB,SecretDB config;