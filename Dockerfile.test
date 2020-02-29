# Stage 1 - the build process
FROM node:12.16 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn typescript
RUN yarn test --watchAll=false
RUN exit 0