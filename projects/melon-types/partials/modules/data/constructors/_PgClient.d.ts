import { DatabaseProviderInternal } from "../../../../types/data/DatabaseProviderInternal";
import { DatabaseProviderOptions } from "../../../../types/data/DatabaseProviderOptions";
declare class _PgClient implements DatabaseProviderInternal {
    #private;
    constructor(options: DatabaseProviderOptions);
    executeNonQuery(sql: string): any;
    executeQuery<T>(sql: string): T;
}
export { _PgClient };
