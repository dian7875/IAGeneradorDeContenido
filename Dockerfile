FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

ARG VITE_BASE_URL
ENV VITE_BASE_URL=$VITE_BASE_URL

EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
