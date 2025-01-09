const { loadData } = require("./loadData");
const path = require("path");

async function main() {
  const args = process.argv.slice(2);
  const questionNumber = args[0];

  if (!questionNumber) {
    console.error("Please provide a question number. Example: node index.js 1");
    return;
  }

  try {
    const data = await loadData("data.json");
    const quesFile = path.resolve(__dirname, `questions/Q${questionNumber}.js`);
    const question = require(quesFile);
    await question(data);
  } catch (err) {
    console.error(`Error running question ${questionNumber}`, err.message);
  }
}

main();
