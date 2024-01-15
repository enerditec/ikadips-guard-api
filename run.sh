#!/bin/bash

if [ $# -eq 1 ]; then
    mode="$1"
    if [ "$mode" = "prod" ] || [ "$mode" = "dev" ]; then
        echo "Execution du mode : $mode"
        docker-compose -f "docker-compose.$mode.yml" up --build -d
        docker-compose -f "docker-compose.$mode.yml" logs -f
    else
        echo "Mode invalide. Utilisez 'prod' ou 'dev'."
    fi
else
    echo "Veuillez spécifier le mode 'prod' ou 'dev'."
fi