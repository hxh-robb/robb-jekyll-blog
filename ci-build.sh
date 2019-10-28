#!/usr/bin/env bash

set -e # halt script on error

# rm Gemfile.lock
# bundle install --full-index

bundle exec jekyll build
bundle exec htmlproofer ./_site
