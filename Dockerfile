FROM alpine:3.11 as deps
WORKDIR /tmp
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN build-client

FROM alpine:3.11
ENV NODE_ENV "production"
WORKDIR /usr/local/app
COPY --from=deps /tmp/server ./server
COPY --from=deps /tmp/node_modules ./node_modules
COPY --from=deps /tmp/client/build ./public

CMD ["node /usr/local/app/server/app.js"]
