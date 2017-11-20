### Global environments
```
SCHEMA_NAME=schema_name
PG_USER_NAME=account_name
PG_USER_PASSWORD=account_password
DB_NAME=db_name
DB_HOSTNAME=hostname
```
 
### Migrating 
    $ psql -U <username> -d <db_name> -f db/schema.sql    
 
### Seeding 
    $ psql -U <username> -d <db_name> -f db/seeds.sql
    
### Usage
    $ yarn install
    $ yarn dev
        
## Testing 
    $ yarn test