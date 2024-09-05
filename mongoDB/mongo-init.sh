#!/bin/bash
mongoimport --host localhost --db cr-db --collection users --type json --file /data/db-import/users.json --jsonArray
