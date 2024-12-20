# Stage 1: Build the React app
FROM node:20 AS builder

COPY packages/frontend/package.json packages/frontend/yarn.lock ./

WORKDIR /app/packages/frontend

# Install dependencies
RUN yarn install

# Copy the entire project
COPY . .

# Build the React app
RUN yarn build

# Stage 2: Serve the app with nginx
FROM nginx:stable-alpine

# Copy the build files to nginx's default public directory
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
