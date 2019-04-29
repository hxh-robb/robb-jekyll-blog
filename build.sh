#!/usr/bin/env bash

export _ENTRY=$(readlink -f "$0")
export _HOME=$(dirname "${_ENTRY}")
cd "${_HOME}"

type -t jekyll > /dev/null || {
  echo "fail to build:jekyll is not installed!"
  exit 1
}

jekyll build
