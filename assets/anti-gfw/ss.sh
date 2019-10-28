#!/usr/bin/env bash

echo "ss://$(echo 'chacha20-ietf-poly1305:R066paSs' | base64)@54.179.138.101:55109#ss.robbtsang.me" >> ss.txt
cat ss.txt | qrencode -o ss.png
