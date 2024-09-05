FROM mongo:4.0.4

RUN mkdir -p /data/db-import

COPY data.json /data/db-import/users.json

COPY mongo-init.sh /docker-entrypoint-initdb.d/mongo-init.sh

RUN chmod +x /docker-entrypoint-initdb.d/mongo-init.sh
