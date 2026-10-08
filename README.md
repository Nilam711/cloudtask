# CloudTask

CloudTask is a cloud-native task and project management platform built as an individual MCA capstone and resume project.

## Stack

- React + Vite
- Node.js + Express
- MongoDB + Mongoose
- JWT + bcryptjs
- Docker + Docker Compose
- Nginx
- Jest + Supertest
- GitLab CI/CD
- Terraform starter structure
- AWS-ready architecture

## Local run with Docker

Requirements:
- Docker Desktop
- Git

From the project root:

```bash
docker compose up --build
```

Open:

```text
http://localhost
```

Backend health:

```text
http://localhost/api/health
```

Stop:

```bash
docker compose down
```

The MongoDB data is stored in a named Docker volume.

## Local development without Docker

Backend:

```bash
cd backend
npm install
npm run dev
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```

For local non-Docker frontend development, create `frontend/.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

For local non-Docker backend development, create `backend/.env`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/cloudtask
JWT_SECRET=change_this_to_a_long_random_secret
CLIENT_URL=http://localhost:5173
```

## Main features

- Register/login/logout
- JWT-protected routes
- Dashboard statistics
- Project CRUD
- Task CRUD
- Task status updates
- Categories
- Due dates
- Search and filtering
- REST API
- Validation
- Centralized error handling
- Dockerized development/production-style environment
- Nginx reverse proxy
- Backend tests
- CI pipeline
- Terraform starter structure

## Important

Do not commit `.env` files or real secrets.

The project is intentionally built incrementally. AWS infrastructure, production secrets, monitoring dashboards, performance measurements, and deployment automation should only be documented as completed after they are actually implemented and tested.
