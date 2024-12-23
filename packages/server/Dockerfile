# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Copy the rest of the application code
COPY . .

# Install dependencies, including devDependencies
RUN yarn install

# Build the application
RUN yarn build

# Expose the backend port
EXPOSE 8080

# Start the application
CMD ["node", "dist/index.js"]
