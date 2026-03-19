const fs = require("fs");
const path = require("path");

const MONTHS_ES = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

const now = new Date();
const month = MONTHS_ES[now.getUTCMonth()];
const year = now.getUTCFullYear();
const isoDate = `${year}-${String(now.getUTCMonth() + 1).padStart(2, "0")}-01`;

const content = `export const LAST_UPDATED_MONTH = "${month}";
export const LAST_UPDATED_YEAR = "${year}";
export const LAST_UPDATED = \`\${LAST_UPDATED_MONTH} \${LAST_UPDATED_YEAR}\`;
export const LAST_UPDATED_ISO = "${isoDate}";
`;

const configPath = path.join(__dirname, "..", "src", "data", "config.ts");
fs.writeFileSync(configPath, content, "utf-8");

console.log(`Updated to: ${month} ${year} (${isoDate})`);
