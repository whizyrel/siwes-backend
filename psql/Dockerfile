FROM postgres:12.6-alpine
ENV POSTGRES_PASSWORD=Anything5000
COPY models/db.setup.sql /docker-entrypoint-initdb.d/
COPY models/entities.setup.sql /docker-entrypoint-initdb.d/
EXPOSE 5432