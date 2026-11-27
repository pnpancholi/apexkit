// Interactive ApexKit setup: asks a few questions, then updates package.json
// and creates PROJECT.md. Nothing is written before the user approves.
const fs = require("node:fs");
const path = require("node:path");
const readline = require("node:readline");
const pkgPath = path.join(process.cwd(), "package.json");
const projectPath = path.join(process.cwd(), "PROJECT.md");

// Styling; NO_COLOR or a non-TTY keeps the output plain.
const useColor = process.stdout.isTTY && process.env.NO_COLOR === undefined;
const paint = (code) => (text) => (useColor ? `\x1b[${code}m${text}\x1b[0m` : text);
const bold = paint("1");
const dim = paint("2");
const cyan = paint("36");
const green = paint("32");
const yellow = paint("33");
const red = paint("31");

const ruleWidth = Math.max(20, Math.min(60, (process.stdout.columns || 80) - 2));
function rule() {
  console.log(dim("─".repeat(ruleWidth)));
}
function heading(icon, title) {
  console.log(`\n${icon} ${bold(title)}`);
  rule();
}
const ok = (message) => console.log(`${green("✔")} ${message}`);
const info = (message) => console.log(`${yellow("ℹ")} ${message}`);
const fail = (message) => console.error(`${red("✖")} ${message}`);

// Read a file, or return null if it does not exist.
function read(file) {
  return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : null;
}

// Step 0: what still needs setting up?
const pkgText = read(pkgPath);
if (pkgText === null) {
  fail("No package.json found. Run this from the project root.");
  process.exit(1);
}
const projectText = read(projectPath);
const pkgPending = JSON.parse(pkgText).apexkitSetupPerformed !== true;
const projectPending = !projectText || projectText.includes("apexkitSetupPerformed: false");
if (!pkgPending && !projectPending) {
  info("Project setup already performed.");
  process.exit(0);
}
if (!process.stdin.isTTY) {
  info("Run this in your terminal: npm run setup");
  process.exit(0);
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.on("SIGINT", () => process.exit(0)); // Ctrl+C: quit without writing
rl.on("close", () => process.exit(0)); // input closed: quit as well

// Ask one question, re-asking until the answer is not empty.
function ask(question) {
  return new Promise((resolve) => {
    const prompt = () =>
      rl.question(`${cyan("?")} ${question} `, (answer) => {
        if (answer.trim()) resolve(answer.trim());
        else prompt();
      });
    prompt();
  });
}

// Step 1: questions, asked one at a time.
const questions = {
  name: "What's your project called?",
  description: "In one sentence, what does it do?",
  author: "Who's building it? (the name to credit)",
  audience: "Who is it for?",
  goal: "What do you want to build or achieve? A few lines is ideal.",
};

// Step 2: show the answers and let the user change them.
const approvals = ["yes", "y", "looks good", "perfect", "confirmed"];
const icons = {
  name: "📦",
  description: "📝",
  author: "✍️",
  audience: "📣",
  goal: "🎯",
};
function showAnswers(answers) {
  const keys = Object.keys(questions);
  const labels = keys.map((key) => `${key[0].toUpperCase() + key.slice(1)}:`);
  const width = Math.max(...labels.map((label) => label.length));
  heading(cyan("◆"), "Here's what I have");
  keys.forEach((key, i) => {
    console.log(`  ${icons[key]} ${bold(labels[i].padEnd(width))}  ${answers[key]}`);
  });
  rule();
}
async function confirmAnswers(answers) {
  while (true) {
    showAnswers(answers);
    if (approvals.includes((await ask("Does everything look correct?")).toLowerCase())) return;
    const fields = Object.keys(questions).join(", ");
    const field = (await ask(`Which one should change? (${fields})`)).toLowerCase();
    if (questions[field]) answers[field] = await ask(questions[field]);
    else console.log(`Please pick one of: ${fields}.`);
  }
}

// Step 4: update package.json.
const slugify = (text) =>
  text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "project";
function updatePackageJson(answers) {
  if (!pkgPending) return;
  heading(cyan("◆"), "Updating package.json with your project info.");
  const pkg = JSON.parse(pkgText);
  const apexVersion = pkg.version; // read before overwriting it
  const indent = (pkgText.match(/\n([ \t]+)"/) || [null, 2])[1];

  pkg.name = slugify(answers.name);
  pkg.description = answers.description;
  pkg.author = answers.author;
  pkg.version = "1.0.0";
  pkg.apexkitSetupPerformed = true;
  delete pkg.bootstrappedWith;
  pkg.bootstrappedWith = apexVersion ? `ApexKit ${apexVersion}` : "ApexKit"; // last field
  fs.writeFileSync(pkgPath, `${JSON.stringify(pkg, null, indent)}\n`);
  ok("Successfully package.json updated");
}

// Step 5: create PROJECT.md.
function createProjectFile(answers) {
  if (!projectPending) {
    info("PROJECT.md already exists. Leaving it unchanged.");
    return;
  }
  heading(cyan("◆"), "Creating PROJECT.md.");
  fs.writeFileSync(
    projectPath,
    `# ${answers.name}

${answers.description}

<!-- Written by the setup skill. Agents: read this file first. -->

## About this repository

This is **${answers.name}**, a project by ${answers.author}. It was started from the ApexKit starter kit.
ApexKit is only the scaffold. It is not the product.

- Treat all work here as work on **${answers.name}**, not on ApexKit.
- Do not describe this project as ApexKit.
- Leftover "ApexKit" references in the code are template residue.

## Audience

${answers.audience}

## Goals

- ${answers.goal}
`,
  );
  ok("PROJECT.md created.");
}

// Step 7: git reset instructions (never run them).
function printGitMessage() {
  heading(cyan("◆"), "One last step, which you should do yourself: reset the git history");
  console.log(`
This project still carries ApexKit's commit history. Deleting it is irreversible, so it is safer for you to run it than for an agent to, after checking you are in the project root.
`);
  const commands = [
    "rm -rf .git",
    "git init",
    "git add .",
    'git commit -m "Initial commit"',
    "git remote add origin <your-repo-url>",
  ];
  for (const command of commands) console.log(`${dim("│")} ${command}`);
  console.log(`\nReplace ${cyan("<your-repo-url>")} with your own repository.`);
}

// Compact block banner for the welcome screen.
const banner = [
  "█▀█ █▀█ █▀▀ █ █ █ █ ▀█▀ ▀█▀   █▀▀ █▀▀ ▀█▀ █ █ █▀█",
  "█▀█ █▀▀ █▀▀ ▄▀▄ █▀▄  █   █    ▀▀█ █▀▀  █  █ █ █▀▀",
  "▀ ▀ ▀   ▀▀▀ ▀ ▀ ▀ ▀ ▀▀▀  ▀    ▀▀▀ ▀▀▀  ▀  ▀▀▀ ▀",
];

// Welcome message, shown only when setup will run.
function printWelcome() {
  console.log();
  for (const line of banner) console.log(line);
  console.log(`\n  ${dim("Let's set up ApexKit to work for you.")}`);
}

// Final links and a nudge to start building.
function printFooter() {
  console.log();
  rule();
  console.log(`📚 Docs: ${cyan("https://docs.apexkit.site")}`);
  console.log(`⭐ Star the repo if ApexKit helped: ${cyan("https://github.com/pnpancholi/apexkit")}`);
  console.log(`🐛 Open an issue if something is broken or missing: ${cyan("https://github.com/pnpancholi/apexkit/issues/new")}`);
  console.log(`\n🚀 ${green("Now go build something great.")}`);
}

async function main() {
  printWelcome();
  heading("✨", "A few quick questions");
  const answers = {};
  for (const key of Object.keys(questions)) answers[key] = await ask(questions[key]);
  await confirmAnswers(answers);
  updatePackageJson(answers);
  createProjectFile(answers);
  printGitMessage();
  printFooter();
  rl.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
