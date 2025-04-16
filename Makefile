# Help: Default target
help:
	@echo ""
	@echo "Available make commands:"
	@echo ""
	@echo "  make dev      - Run docker-compose dev environment for backend"
	@echo "  make stop     - Stop and remove docker containers"
	@echo "  make build    - Build app manually"
	@echo "  make migrate  - Run Prisma migrations"
	@echo "  make generate - Generate Prisma client"
	@echo ""

# Start dev environment
dev:
	cd .docker && docker-compose -f ./docker-compose-dev.yaml --env-file ../.env up --build

# Stop docker
stop:
	cd .docker && docker-compose -f ./docker-compose-dev.yaml down

# Build app
build:
	docker-compose exec web npm run build

# Prisma commands
migrate:
	docker exec docker-web-1 npm run prisma:migrate

generate:
	docker exec docker-web-1 npm run prisma:generate
