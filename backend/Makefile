build:
	@echo "make: Building Operator microservice"
	@go build -o dist/operator
	@echo "make: API build complete"

run:
	@make build
	@echo "make: Running Operator microservice"
	@./dist/operator

dev:
	go run -race main.go