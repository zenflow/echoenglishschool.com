#!/bin/sh
set -e

export UPLOADS_DIR_USER=$( echo $UPLOADS_DIR | cut -d ':' -f 1 )
export UPLOADS_DIR_PASS=$( echo $UPLOADS_DIR | cut -d ':' -f 2 | cut -d '@' -f 1 )
export UPLOADS_DIR_HOST_AND_PATH=$( echo $UPLOADS_DIR | cut -d '@' -f 2- )

rsync \
  --recursive --delete --checksum --verbose \
  --rsh="sshpass -p $UPLOADS_DIR_PASS ssh -o StrictHostKeyChecking=no" \
  $UPLOADS_DIR_USER@$UPLOADS_DIR_HOST_AND_PATH/  public/uploads
