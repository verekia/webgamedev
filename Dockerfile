FROM oven/bun:1.1.34-slim

# sharp doesn't work on alpine

ARG BUNNY_ACCESS_KEY
ARG BUNNY_PULLZONE_ID

WORKDIR /app

RUN apt-get update && \
    apt-get install -y --no-install-recommends curl ca-certificates && \
    rm -rf /var/lib/apt/lists/*

COPY bun.lockb package.json .

RUN bun i

COPY . .

RUN bun run build

RUN curl --request POST --url https://api.bunny.net/pullzone/${BUNNY_PULLZONE_ID}/purgeCache --header "content-type: application/json" --header "AccessKey: ${BUNNY_ACCESS_KEY}"

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 CMD curl -f http://localhost:3000/ || exit 1

CMD ["bun", "start"]
