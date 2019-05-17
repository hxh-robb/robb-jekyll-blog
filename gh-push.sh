#!/usr/bin/env bash

export _ENTRY=$(readlink -f "$0")
export _HOME=$(dirname "${_ENTRY}")
cd "${_HOME}"

message="${1:-$(date) update}"

git add .
git commit -m "${message}"
git push
