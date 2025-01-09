const fs = require("fs").promises;
const path = require("path");

async function loadData(filePath) {
  const fullPath = path.resolve(__dirname, filePath);
  try {
    const data = await fs.readFile(fullPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error(`Failed to load data!`, error);
    throw error;
  }
}

module.exports = { loadData };
