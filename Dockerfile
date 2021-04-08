FROM node:14.16.0-alpine3.12
WORKDIR /usr/app/
EXPOSE 9090
CMD ["node", "--trace-warnings", "./api.bundle.js"]