docker buildx build --platform linux/arm64 --load -t verekia/webgamedev .
docker save -o /tmp/webgamedev.tar verekia/webgamedev
scp /tmp/webgamedev.tar midgar:/tmp/
ssh midgar docker load --input /tmp/webgamedev.tar
ssh midgar docker compose up -d webgamedev
