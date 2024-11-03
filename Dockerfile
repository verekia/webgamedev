FROM oven/bun:1.1.34

ARG BUNNY_ACCESS_KEY
ARG BUNNY_PULLZONE_ID

WORKDIR /app

RUN apk add --no-cache curl

COPY bun.lockb package.json .

RUN bun i

COPY . .

RUN bun run build

RUN curl --request POST --url https://api.bunny.net/pullzone/${BUNNY_PULLZONE_ID}/purgeCache --header "content-type: application/json" --header "AccessKey: ${BUNNY_ACCESS_KEY}"

CMD ["bun", "start"]
