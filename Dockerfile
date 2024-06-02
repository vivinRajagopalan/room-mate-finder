# Use the official Node.js image as the base image
FROM node:14

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the application port
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "run", "start:prod"]
