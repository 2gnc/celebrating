FROM alpine:3.11 as deps
WORKDIR /tmp
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN build-client

FROM alpine:3.11
COPY --from=deps /tmp/server ./server

# TODO: дописать сборку multistage
