# Description - Example-sequalize-one2n-docker

It is an example of how to configure and run sequalize and docker in a one-2-n relationship. It used typescript and populate a dummy database from json data. 
The Model is a shopping list order with items within 

## Table of Contents

1. [Technology Stack](#Technology-Stack)
2. [Installation & Running](#Installation-&-Running)
3. [Running the app](#Running-the-app)
4. [Project Layout (Brief Explanation Frontend)](#Project-Layout-(Brief-Explanation-Frontend))
5. [Demo](#Demo)

## Technology Stack
    - nodejs 12.22.9
    - npm 9.5.1
    - Typescript 4.7.
    - docker 24.0.7
    - docker-compose 1.29.2
    - sequelize 6.20.1
    - express 4.18.1


## Environment variables 

  I didn't want to complicate the example. do I did not use dotenv. you might see the variables in src/server.ts  
  ```  
    const sequelize = new Sequelize({
      dialect: "postgres",
      database: "postgres",
      username: "postgres",
      password: "postgres",
      host: "db", // Use the service name defined in docker-compose.yml
      port: 5432,
    });
  ```


## Installation & Running 


```bash
$ docker-compose build
$ docker-compose up
```
if you need to restart or remove containers or images you may want to use 

```bash
$ docker rm $(docker ps -a -q)
$ docker rmi $(docker images -q)
```


 ## Project Layout (Brief Explanation Frontend)
 ```
├── DockerFile
├── Docker-compose.yml
├── server.tsx (main root, it has the sequalize config, initialize the models and its mappings, and call the population of the db)
├── data
│   └── data.ts (json file with data for items and shopping list) 
├── src
│   ├── controllers (controllers that call the model and being called by the routes)
│   ├── db (populate the sequalize model from the json within the data folder.)
│   ├── routes 
│   ├── models (Contains all the main typescript model classes and the sequalize ORM mapping models)
└── 
``` 
   
 ## Demo

 When you run it you should see 

```

.................
.................
db_1   | 2023-12-11 14:43:32.406 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
db_1   | 2023-12-11 14:43:32.406 UTC [1] LOG:  listening on IPv6 address "::", port 5432
db_1   | 2023-12-11 14:43:32.408 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
db_1   | 2023-12-11 14:43:32.412 UTC [24] LOG:  database system was shut down at 2023-12-11 14:43:15 UTC
db_1   | 2023-12-11 14:43:32.421 UTC [1] LOG:  database system is ready to accept connections
db_1   | 2023-12-11 14:44:40.915 UTC [1] LOG:  received fast shutdown request
db_1   | 2023-12-11 14:44:40.916 UTC [1] LOG:  aborting any active transactions
db_1   | 2023-12-11 14:44:40.919 UTC [1] LOG:  background worker "logical replication launcher" (PID 27) exited with exit code 1
db_1   | 2023-12-11 14:44:40.920 UTC [22] LOG:  shutting down
db_1   | 2023-12-11 14:44:40.921 UTC [22] LOG:  checkpoint starting: shutdown immediate
db_1   | 2023-12-11 14:44:40.930 UTC [22] LOG:  checkpoint complete: wrote 32 buffers (0.2%); 0 WAL file(s) added, 0 removed, 0 recycled; write=0.003 s, sync=0.002 s, total=0.010 s; sync files=7, longest=0.001 s, average=0.001 s; distance=136 kB, estimate=136 kB; lsn=0/154E488, redo lsn=0/154E488
db_1   | 2023-12-11 14:44:40.937 UTC [1] LOG:  database system is shut down
db_1   | 
db_1   | PostgreSQL Database directory appears to contain a database; Skipping initialization
db_1   | 
db_1   | 2023-12-11 14:44:43.320 UTC [1] LOG:  starting PostgreSQL 16.1 on x86_64-pc-linux-musl, compiled by gcc (Alpine 13.2.1_git20231014) 13.2.1 20231014, 64-bit
db_1   | 2023-12-11 14:44:43.320 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
db_1   | 2023-12-11 14:44:43.320 UTC [1] LOG:  listening on IPv6 address "::", port 5432
db_1   | 2023-12-11 14:44:43.322 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
db_1   | 2023-12-11 14:44:43.326 UTC [24] LOG:  database system was shut down at 2023-12-11 14:44:40 UTC
db_1   | 2023-12-11 14:44:43.334 UTC [1] LOG:  database system is ready to accept connections
web_1  | 
web_1  | > nodejs-template@0.0.0 start /usr/src/app
web_1  | > node dist/src/server.js
web_1  | 
web_1  | Starting application
web_1  | App listening on port 3000
web_1  | Executing (default): DROP TABLE IF EXISTS "Items" CASCADE;
web_1  | Executing (default): DROP TABLE IF EXISTS "ShoppingLists" CASCADE;
web_1  | Executing (default): SELECT DISTINCT tc.constraint_name as constraint_name, tc.constraint_schema as constraint_schema, tc.constraint_catalog as constraint_catalog, tc.table_name as table_name,tc.table_schema as table_schema,tc.table_catalog as table_catalog,tc.initially_deferred as initially_deferred,tc.is_deferrable as is_deferrable,kcu.column_name as column_name,ccu.table_schema  AS referenced_table_schema,ccu.table_catalog  AS referenced_table_catalog,ccu.table_name  AS referenced_table_name,ccu.column_name AS referenced_column_name FROM information_schema.table_constraints AS tc JOIN information_schema.key_column_usage AS kcu ON tc.constraint_name = kcu.constraint_name JOIN information_schema.constraint_column_usage AS ccu ON ccu.constraint_name = tc.constraint_name WHERE constraint_type = 'FOREIGN KEY' AND tc.table_name = 'Items' AND tc.table_catalog = 'postgres'
web_1  | Executing (default): SELECT DISTINCT tc.constraint_name as constraint_name, tc.constraint_schema as constraint_schema, tc.constraint_catalog as constraint_catalog, tc.table_name as table_name,tc.table_schema as table_schema,tc.table_catalog as table_catalog,tc.initially_deferred as initially_deferred,tc.is_deferrable as is_deferrable,kcu.column_name as column_name,ccu.table_schema  AS referenced_table_schema,ccu.table_catalog  AS referenced_table_catalog,ccu.table_name  AS referenced_table_name,ccu.column_name AS referenced_column_name FROM information_schema.table_constraints AS tc JOIN information_schema.key_column_usage AS kcu ON tc.constraint_name = kcu.constraint_name JOIN information_schema.constraint_column_usage AS ccu ON ccu.constraint_name = tc.constraint_name WHERE constraint_type = 'FOREIGN KEY' AND tc.table_name = 'ShoppingLists' AND tc.table_catalog = 'postgres'
web_1  | Executing (default): DROP TABLE IF EXISTS "Items" CASCADE;
web_1  | Executing (default): DROP TABLE IF EXISTS "ShoppingLists" CASCADE;
web_1  | Executing (default): DROP TABLE IF EXISTS "ShoppingLists" CASCADE;
web_1  | Executing (default): CREATE TABLE IF NOT EXISTS "ShoppingLists" ("id"  SERIAL , "buyerName" VARCHAR(255) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, PRIMARY KEY ("id"));
web_1  | Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'ShoppingLists' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;
web_1  | Executing (default): DROP TABLE IF EXISTS "Items" CASCADE;
web_1  | Executing (default): CREATE TABLE IF NOT EXISTS "Items" ("id"  SERIAL , "name" VARCHAR(255) NOT NULL, "unit" VARCHAR(255), "quantity" INTEGER, "price" FLOAT, "ShoppingListId" INTEGER NOT NULL REFERENCES "ShoppingLists" ("id") ON DELETE NO ACTION ON UPDATE CASCADE, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL, PRIMARY KEY ("id"));
web_1  | Executing (default): SELECT i.relname AS name, ix.indisprimary AS primary, ix.indisunique AS unique, ix.indkey AS indkey, array_agg(a.attnum) as column_indexes, array_agg(a.attname) AS column_names, pg_get_indexdef(ix.indexrelid) AS definition FROM pg_class t, pg_class i, pg_index ix, pg_attribute a WHERE t.oid = ix.indrelid AND i.oid = ix.indexrelid AND a.attrelid = t.oid AND t.relkind = 'r' and t.relname = 'Items' GROUP BY i.relname, ix.indexrelid, ix.indisprimary, ix.indisunique, ix.indkey ORDER BY i.relname;
web_1  | Executing (default): INSERT INTO "ShoppingLists" ("id","buyerName","createdAt","updatedAt") VALUES (DEFAULT,$1,$2,$3) RETURNING "id","buyerName","createdAt","updatedAt";
web_1  | Executing (default): INSERT INTO "ShoppingLists" ("id","buyerName","createdAt","updatedAt") VALUES (DEFAULT,$1,$2,$3) RETURNING "id","buyerName","createdAt","updatedAt";
web_1  | Executing (default): INSERT INTO "Items" ("id","name","unit","quantity","price","ShoppingListId","createdAt","updatedAt") VALUES (DEFAULT,$1,$2,$3,$4,$5,$6,$7) RETURNING "id","name","unit","quantity","price","ShoppingListId","createdAt","updatedAt";
web_1  | Executing (default): INSERT INTO "Items" ("id","name","unit","quantity","price","ShoppingListId","createdAt","updatedAt") VALUES (DEFAULT,$1,$2,$3,$4,$5,$6,$7) RETURNING "id","name","unit","quantity","price","ShoppingListId","createdAt","updatedAt";
web_1  | Executing (default): INSERT INTO "Items" ("id","name","unit","quantity","price","ShoppingListId","createdAt","updatedAt") VALUES (DEFAULT,$1,$2,$3,$4,$5,$6,$7) RETURNING "id","name","unit","quantity","price","ShoppingListId","createdAt","updatedAt";
web_1  | Executing (default): INSERT INTO "Items" ("id","name","unit","quantity","price","ShoppingListId","createdAt","updatedAt") VALUES (DEFAULT,$1,$2,$3,$4,$5,$6,$7) RETURNING "id","name","unit","quantity","price","ShoppingListId","createdAt","updatedAt";
...............
...............

```
