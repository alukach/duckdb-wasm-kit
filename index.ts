import { AsyncDuckDB } from "@duckdb/duckdb-wasm";

import { useDuckDb } from "./src/hooks/useDuckDb";
import { useDuckDbQuery } from "./src/hooks/useDuckDbQuery";
import initializeDuckDb, { getDuckDB } from "./src/init/initializeDuckDb";
import DuckDbProvider, { DuckDbContext } from "./src/provider/DuckDbProvider";
import { runQuery } from "./src/util/runQuery";
import { getTempFilename } from "./src/util/tempfile";
import { toParquet } from "./src/util/toParquet";

export * from "./src/files";
export * from "./src/io";
export * from "./src/util/queries";

export {
  AsyncDuckDB,
  DuckDbContext,
  DuckDbProvider,
  getDuckDB,
  getTempFilename,
  initializeDuckDb,
  runQuery,
  toParquet,
  useDuckDb,
  useDuckDbQuery,
};
