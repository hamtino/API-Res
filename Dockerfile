FROM node:12
RUN mkdir /api
COPY dist /api
COPY package.json /api
WORKDIR /api
RUN npm install
EXPOSE 4000
CMD node dist/index.js 