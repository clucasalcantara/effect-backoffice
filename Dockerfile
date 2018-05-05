FROM node:8

COPY package*.json ./
COPY yarn.lock ./
COPY webpack.config.js ./
COPY node_modules ./

RUN yarn

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

WORKDIR /
COPY package.json /
RUN yarn

RUN mkdir -p /usr/src/effect
WORKDIR /usr/src/effect
RUN cp -a /node_modules /usr/src/effect

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY . /usr/src/effect

EXPOSE 4000

CMD ["yarn","dev"]
