FROM node:14.16.0-alpine3.12
WORKDIR /usr/app/
RUN npm i -g nodemon
EXPOSE 9090
CMD ["nodemon", "--trace-warnings", "./api.bundle.js"]
