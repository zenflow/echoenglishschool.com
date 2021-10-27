#!/bin/sh

rm -rf db
mongodump --out=db/temp $MONGODB_URI
mv db/temp/*/* db
rm -rf db/temp
