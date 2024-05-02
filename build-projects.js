/**
 * Copyright (c) 2024 Anthony Mugendi
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

const fs = require('fs');
const path = require('path');

let projects = fs
  .readdirSync(path.join(__dirname, '/projects'))
  .filter((f) => /\.html$/.test(f))
  .map((f) => `/projects/${f}`);

fs.writeFileSync(path.join(__dirname,'/projects/data.json'), JSON.stringify(projects,0,4))
