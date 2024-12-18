# TMA Backend

## Prerequisites

To work with this Go service, ensure you have the following installed on your system:

- **Go:** Ensure that you have Go version `1.23.2` or later installed. You can download it
  from [here](https://go.dev/dl/).
- **Dependencies:** The required dependencies are managed using `go.mod` and can be installed using the command below.

## Installation

Follow these steps to set up the service locally:

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```sh
   go mod download
   ```

3. Build the service:
   ```sh
   go build -o service
   ```

## Running the Service

To run the service, use the following command:

```sh
./service
```

### Configuration

You can configure the service using environment variables or a configuration file. Update the `.env` file in the
repository or pass variables directly when running the service.

## Project Structure

Here’s an overview of the project structure: