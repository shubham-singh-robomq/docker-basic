# Docker Basics Practice

This repository contains a simple Node.js application that demonstrates basic Docker concepts and commands. It's designed to help beginners understand Docker fundamentals through hands-on practice.

## What is Docker?

Docker is a platform that enables developers to package applications and their dependencies into containers. Containers are lightweight, standalone, and executable software packages that include everything needed to run an application: code, runtime, system tools, libraries, and settings.

### Key Docker Concepts

1. **Container**: A lightweight, standalone, executable package of software that includes everything needed to run an application.
2. **Image**: A read-only template with instructions for creating a Docker container.
3. **Dockerfile**: A text document that contains all the commands a user could call on the command line to assemble an image.
4. **Docker Hub**: A cloud-based registry service for sharing and managing container images.

## Getting Started

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed on your machine
- Basic understanding of command line operations

### Building and Running the Application

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd docker-basic
   ```

2. Build the Docker image:
   ```bash
   docker build -t node-docker-demo .
   ```

3. Run the container:
   ```bash
   docker run -p 3000:3000 node-docker-demo
   ```

4. Open your browser and visit `http://localhost:3000`

## Common Docker Commands

### Working with Images

- **List all images**:
  ```bash
  docker images
  ```

- **Remove an image**:
  ```bash
  docker rmi <image-name>
  ```

- **Pull an image from Docker Hub**:
  ```bash
  docker pull <image-name>
  ```

### Working with Containers

- **List running containers**:
  ```bash
  docker ps
  ```

- **List all containers (including stopped ones)**:
  ```bash
  docker ps -a
  ```

- **Stop a container**:
  ```bash
  docker stop <container-id>
  ```

- **Remove a container**:
  ```bash
  docker rm <container-id>
  ```

- **Run a container in detached mode**:
  ```bash
  docker run -d <image-name>
  ```

- **View container logs**:
  ```bash
  docker logs <container-id>
  ```

### Container Management

- **Execute a command in a running container**:
  ```bash
  docker exec -it <container-id> <command>
  ```

- **Copy files from container to host**:
  ```bash
  docker cp <container-id>:<path> <host-path>
  ```

- **Copy files from host to container**:
  ```bash
  docker cp <host-path> <container-id>:<path>
  ```

## Best Practices

1. Use `.dockerignore` to exclude unnecessary files from the build context
2. Keep your images small by using multi-stage builds when necessary
3. Use specific version tags instead of 'latest'
4. Run containers with non-root users for better security
5. Use environment variables for configuration
6. Keep your containers stateless when possible

## Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
- [Dockerfile Reference](https://docs.docker.com/engine/reference/builder/)