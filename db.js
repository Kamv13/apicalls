const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

const db = new Database(':memory:');

function parseCSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8').trim();
  const lines = content.split(/\r?\n/);

  function parseLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (inQuotes && line[i + 1] === '"') {
          current += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (ch === ',' && !inQuotes) {
        result.push(current.trim());
        current = '';
      } else {
        current += ch;
      }
    }
    result.push(current.trim());
    return result;
  }

  const headers = parseLine(lines[0]);
  const rows = lines.slice(1).filter(l => l.trim()).map(parseLine);

  return { headers, rows };
}

function loadCSV(tableName, filePath) {
  const { headers, rows } = parseCSV(filePath);

  const cols = headers.map(h => `"${h}" TEXT`).join(', ');
  db.exec(`DROP TABLE IF EXISTS "${tableName}"`);
  db.exec(`CREATE TABLE "${tableName}" (${cols})`);

  const placeholders = headers.map(() => '?').join(', ');
  const insert = db.prepare(`INSERT INTO "${tableName}" VALUES (${placeholders})`);

  const insertMany = db.transaction(allRows => {
    for (const row of allRows) {
      insert.run(row.slice(0, headers.length));
    }
  });

  insertMany(rows);
  console.log(` Loaded ${rows.length} rows into "${tableName}" | Columns: ${headers.join(', ')}`);
}


loadCSV('employees', path.join(__dirname, 'employees.csv'));
loadCSV('products',  path.join(__dirname, 'Product_v6.csv'));

module.exports = db;
