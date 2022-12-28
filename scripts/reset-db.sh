export $(grep -v '^#' .env | xargs)
squid-mikroorm-codegen
npm run build
rm -rf db/migrations/*.js
docker-compose down
sleep 3
docker-compose up -d
sleep 5
squid-mikroorm-migration generate
squid-mikroorm-migration apply
