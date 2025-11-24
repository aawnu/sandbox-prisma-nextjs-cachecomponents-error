import { Pool } from "pg";
import { cache } from "react";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const loadTestIds = cache(() =>
  pool.query("SELECT 1").then(
    (r) => console.log("OK", r.rows),
    (err) => console.error("ERR", err)
  )
);

export default async function Home() {
  await loadTestIds();
  return <div>123D</div>;
}
