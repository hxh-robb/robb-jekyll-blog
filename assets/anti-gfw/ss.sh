#!/usr/bin/env bash

echo "ss://$(echo 'chacha20-ietf-poly1305:R066paSs@54.179.138.101:55109' | base64)" >> ss.txt
cat ss.txt | qrencode -o ss.png
