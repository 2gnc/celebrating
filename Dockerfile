FROM alpine:3.11 as deps
ENV NODE_VERSION 10.16.0
WORKDIR /tmp
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN build-client

FROM alpine:3.11
COPY --from=deps /tmp/server ./server

# дописать сборку multistage
