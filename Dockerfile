# Use the official Node.js image as a base for building the application
FROM node:latest as build

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Install Tailwind CSS
RUN npm install tailwindcss

# Build the Next.js application
RUN npm run build

# Install NGINX
RUN apt-get update && apt-get install -y nginx

# Copy NGINX configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Remove default NGINX website
RUN rm -rf /var/www/html/*

# Copy built application to NGINX public directory
RUN cp -r /usr/src/app/public /var/www/html

# Copy SSL/TLS certificates
#COPY nginx.crt /etc/nginx/certs/nginx.crt
#COPY nginx.key /etc/nginx/certs/nginx.key

COPY /ssl/certificate.crt /etc/nginx/certs/certificate.crt
COPY /ssl/private.key /etc/nginx/certs/private.key
COPY /ssl/ca_bundle.crt /etc/nginx/certs/ca_bundle.crt 

# Install PM2 globally
RUN npm install pm2 -g

# Expose ports 80 and 443
EXPOSE 80
EXPOSE 443

# Start NGINX and Node.js application using PM2
CMD service nginx start && pm2-runtime start npm -- start
