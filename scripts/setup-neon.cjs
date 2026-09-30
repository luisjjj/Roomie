// Sets up the Roomie waitlist table on Neon.
// Reads NEON_DATABASE_URL from .env.local (server-side only, never committed).
// Usage: npm run db:setup
const fs = require("fs");
const path = require("path");
const { Client } = require("pg");

async function main() {
  const envPath = path.join(__dirname, "..", ".env.local");
  const env = fs.readFileSync(envPath, "utf8");
  const line = env.split(/\r?\n/).find((l) => l.startsWith("NEON_DATABASE_URL="));
  if (!line) throw new Error("NEON_DATABASE_URL not found in .env.local");
  // node-postgres doesn't understand channel_binding; the pooler URL works without it.
  const url = line
    .slice("NEON_DATABASE_URL=".length)
    .trim()
    .replace("&channel_binding=require", "")
    .replace("?channel_binding=require", "?");

  const client = new Client({ connectionString: url, ssl: { rejectUnauthorized: true } });
  await client.connect();

  const schema = fs.readFileSync(path.join(__dirname, "..", "sql", "schema.sql"), "utf8");
  const stmts = schema
    .split("\n")
    .filter((l) => !l.trim().startsWith("--"))
    .join("\n")
    .split(";")
    .map((s) => s.trim())
    .filter(Boolean);

  for (const s of stmts) {
    await client.query(s);
    console.log("OK:", s.split("\n")[0].slice(0, 80));
  }
  const { rows } = await client.query("select count(*)::int as n from waitlist");
  console.log("waitlist rows:", rows[0].n);
  await client.end();
}

main().catch((e) => {
  console.error("FAILED:", e.message);
  process.exit(1);
});
