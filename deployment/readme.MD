# Deployment Instructions

To run the application locally:

1. Install dependencies:
    ```bash
    npm install
    ```

2. Build the project:
    ```bash
    npm run build
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

For Docker:

1. Build the Docker image:
    ```bash
    docker build -t metasurfai-frontend .
    ```

2. Run the Docker container:
    ```bash
    docker run -p 443:443 -p 80:80 metasurfai-frontend 
    ```

Alternatively, you can use Docker Compose:
```bash
docker-compose up
```

Go to -> http://localhost:80 or http://localhost:443