#!/bin/bash


npm --prefix Frontend/vue-frontend run build

git add .

git add Frontend/vue-frontend/dist -f

MYVAR=$(date +"%Y-%d-%m %I:%M%p")

git commit -m "$MYVAR"

git subtree push --prefix Frontend/vue-frontend/dist origin gh-pages

