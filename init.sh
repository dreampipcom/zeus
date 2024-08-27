#!/bin/bash
source ./.env
origin="_defaultTemplate.yml"
destination="defaultTemplate.yml"
tmpfile=$(mktemp)
cp -p $origin $tmpfile
cat $origin | envsubst > $tmpfile && mv $tmpfile $destination