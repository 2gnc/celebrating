FROM node:10.19.0-alpine as deps
WORKDIR /tmp
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn run deps-client
RUN yarn run build-client

FROM node:10.19.0-alpine as production
ENV NODE_ENV production
WORKDIR /usr/local/app
COPY --from=deps /tmp/server ./server
COPY --from=deps /tmp/node_modules ./node_modules
COPY --from=deps /tmp/client/build ./public
RUN ls -la 
RUN ls -la server
CMD ["node ./server/app.js"]
