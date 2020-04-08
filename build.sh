#!/bin/bash

docker run --rm --volume="$PWD:/srv/jekyll" -it jekyll/jekyll:3.8 jekyll build
