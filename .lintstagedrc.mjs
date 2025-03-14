import { relative } from "path";

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => relative(process.cwd(), f))
    .join(" --file ")}`;

const rules = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand, "prettier . --write"],
};

export default rules;
