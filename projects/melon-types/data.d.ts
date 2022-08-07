import { CompareExpression } from "./types/data/CompareExpression";
import { CompareResult } from "./types/data/CompareResult";
import { DatabaseProviderConstructor } from "./types/data/DatabaseProviderConstructor";

type Data = {
    clone<T>(target: T): T
    compare<T>(target: T, value: T, expression?: CompareExpression<T>): CompareResult,
    PgClient: DatabaseProviderConstructor,
    MySqlClient: DatabaseProviderConstructor,
    SqlServerClient: DatabaseProviderConstructor
}

declare const data: Data;