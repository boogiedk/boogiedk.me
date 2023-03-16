# Base image
FROM node:14.17.5-alpine AS build

# Set working directory
WORKDIR /app

# Copy and install app dependencies
COPY frontend/package.json ./
COPY frontend/package-lock.json ./
RUN npm ci

# Copy app source
COPY . .

# Build app
RUN npm run build

# Create production image
FROM node:14.17.5-alpine

# Set working directory
WORKDIR /app

# Copy built files from previous build stage
COPY --from=build /app/build ./build

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]