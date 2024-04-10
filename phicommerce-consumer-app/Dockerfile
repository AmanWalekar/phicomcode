FROM node:20.12.0-alpine3.19

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the project
RUN npm run build

# Expose the port that your app runs on
EXPOSE 4173

# Command to run the application
CMD ["npx", "vite", "preview", "--host"]
