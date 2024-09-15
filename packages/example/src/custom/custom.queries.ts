/** Types generated for queries found in "src/custom/custom.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetCustomSchemaRecords' parameters type */
export interface IGetCustomSchemaRecordsParams {
  id: number;
}

/** 'GetCustomSchemaRecords' return type */
export interface IGetCustomSchemaRecordsResult {
  id: number;
  name: string | null;
}

/** 'GetCustomSchemaRecords' query type */
export interface IGetCustomSchemaRecordsQuery {
  params: IGetCustomSchemaRecordsParams;
  result: IGetCustomSchemaRecordsResult;
}

const getCustomSchemaRecordsIR: any = {"usedParamSet":{"id":true},"params":[{"name":"id","required":true,"transform":{"type":"scalar"},"locs":[{"a":45,"b":48}]}],"statement":"SELECT * FROM tableincustomschema WHERE id = :id!"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM tableincustomschema WHERE id = :id!
 * ```
 */
export const getCustomSchemaRecords = new PreparedQuery<IGetCustomSchemaRecordsParams,IGetCustomSchemaRecordsResult>(getCustomSchemaRecordsIR);


