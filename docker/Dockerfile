FROM node:18

WORKDIR /app

# Copy package.json from app folder
COPY app/package*.json ./

# Install dependencies
RUN npm install

# Copy rest of app
COPY app/ .

EXPOSE 3000

CMD ["node", "server.js"]