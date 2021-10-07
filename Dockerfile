FROM node:alpine3.14
RUN npm install -g typescript
WORKDIR /app
COPY . . 
RUN tsc ./app.ts
CMD [ "node", "./app/app.js" ]

