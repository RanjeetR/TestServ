FROM node:alpine
WORKDIR package.json package.json 
COPY . .
RUN npm install
EXPOSE 8086
CMD [ "npm","start" ]
