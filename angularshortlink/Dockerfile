# Pull the latest Node image from Docker
FROM node:latest

# Copy the current directory contents into the container at /app
COPY ./ /app/

# Set the working directory to /app
WORKDIR /app

# Install Node Modules
RUN npm install

# Make port 4200 available to the world outside this container
EXPOSE 4200/tcp

# Start Angular in Watch mode
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--poll", "500"]