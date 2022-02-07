#!/bin/sh
DOCKER_BUILDKIT=1 docker build -f ../base.Dockerfile -t jerasin/base-angular-nest:${1:-latest} ../..