#!/bin/env zsh

# JPEG
mogrify -format avif **/*.jpeg
rm -rf **/*.jpeg
sed -i -e 's/.jpeg/.avif/g' **/*.html

# JPG
mogrify -format avif **/*.jpg
rm -rf **/*.jpg
sed -i -e 's/.jpg/.avif/g' **/*.html
