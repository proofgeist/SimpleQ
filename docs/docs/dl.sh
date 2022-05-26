#!/bin/bash

###################################################################
# Script Name    : get-md-images.sh
# Description    : Download all remote images written as markdown
#                  in our files and replace URLs by local path.
# Author         : Yann Defretin
# Email          : yann@defret.in
###################################################################

# stop on errors
set -e

# match any image written in markdown format
PATTERN="!\[.*\]\(https?[^]]+\.(png|gif|jpe?g|bmp|svg|tiff)\)"

echo "Checking if any md/ipynb file needs to download images..."

# get the files (markdown files and jupyter notebooks) that have markdown images
FILES=$(LC_ALL=C grep -r -s -i -l --include \*.md --include \*.ipynb -E "$PATTERN" .)

echo "$FILES" | while read -r FILE ; do

    # store the directory of the file
    FILE_DIRECTORY=$(dirname "$FILE")

    # Get the images markdown URLs
    URLS=$(grep -o -i -E "$PATTERN" "$FILE")

    # go to next file if no image urls were found
    [ -z "$URLS" ] && continue

    # create images folder if it's not here already
    [ ! -d "$FILE_DIRECTORY/images" ] && mkdir -p "$FILE_DIRECTORY/images"

    echo "Downloading images for $FILE..."

    echo "$URLS" | while read -r url ; do

        CORRECT_URL=$(echo -e ${url##*]} | tr -d '()')
        START_OF_CORRECT_URL="${CORRECT_URL%/*}"
        FILE_NAME=${CORRECT_URL##*/}

        # download images to the "images" folder
        [ ! -f "$FILE_DIRECTORY/images/$FILE_NAME" ] && wget "$CORRECT_URL" -P "$FILE_DIRECTORY/images/" -q

        # replace URL by the local path in the markdown file
        # macOS needs a blank -i argument
        if [[ "$OSTYPE" == "darwin"* ]]; then
            sed -i '' -e "s|$START_OF_CORRECT_URL|images|g" "$FILE"
        else
            sed -e "s|$START_OF_CORRECT_URL|images|g" "$FILE"
        fi

    done

done