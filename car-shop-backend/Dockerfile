# Node.js image to use
FROM node:latest

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY ./ ./

# Uninstall and install bcrypt to ensure proper installation
RUN npm uninstall bcrypt && npm install bcrypt
RUN npm install -g nodemon

# Expose port 5000 for the app to run on
EXPOSE 5000

# Start the app
CMD ["npm", "start"]
