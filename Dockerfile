# pull official base image
FROM node:13.12.0-alpine as debug
#
RUN mkdir /app/
WORKDIR /app/
#
ENV PATH /app/node_modules/.bin:$PATH
#
## install app dependencies
COPY package.json /app/package.json
RUN npm install
#RUN npm install react-scripts@3.4.1 -g
#
COPY . ./app/
#
## start app
FROM debug as prod

CMD ["npm", "start"]