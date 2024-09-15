/* A query to get records from a table outside the default public schema */
/* @name GetCustomSchemaRecords */
SELECT * FROM tableincustomschema WHERE id = :id!;
