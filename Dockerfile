# Define the base image as a slim Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json file to install dependencies
COPY package*.json ./

# Install dependencies based on package.json
RUN npm install

# Copy the entire application code
COPY . .

# Expose port 3000 where the React app typically runs
EXPOSE 3000

# Start the application (assuming a start script in package.json)
CMD [ "npm", "start" ]
