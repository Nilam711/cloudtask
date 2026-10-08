# Architecture

Current local architecture:

User
  |
  v
Nginx
  |
  +--> React frontend
  |
  +--> Node/Express REST API
             |
             v
          MongoDB

Future capstone layers:

GitLab
  |
  v
CI/CD
  |
  v
Docker image build
  |
  v
AWS deployment
  |
  v
Terraform-managed infrastructure
  |
  v
Monitoring and performance analysis

Only mark future components as implemented after they are actually deployed and tested.
