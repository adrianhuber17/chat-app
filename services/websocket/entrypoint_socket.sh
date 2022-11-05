#!/bin/sh

echo "Waiting for postgres..."

while ! nc -z db 5432; do
  sleep 0.1
done

echo "PostgreSQL started"

gunicorn 'manage_socket:create_app()' --worker-class eventlet --workers 1 --bind 0.0.0.0:5001 --reload