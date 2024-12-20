# Stage 1: Build
FROM node:20 AS builder

# Set the working directory
WORKDIR /app

# Copy only the necessary files for dependency installation
COPY package.json package-lock.json ./
COPY packages/server/package.json packages/server/
COPY packages/server/tsconfig.json packages/server/
COPY packages/server/src packages/server/src
COPY packages/server/public packages/server/public

# Install dependencies for the entire monorepo
RUN yarn install

# Build the server package
RUN yarn build

# Stage 2: Runtime
FROM node:18

# Set the working directory
WORKDIR /app

# Copy built files and dependencies from the builder
COPY --from=builder /app/packages/server/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY packages/server/package.json ./

# Expose the port your app runs on
EXPOSE 3000

# Define the command to run your application
CMD ["yarn", "start"]
