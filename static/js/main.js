/**
 * Copyright (c) 2024 Anthony Mugendi
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

document.addEventListener('DOMContentLoaded', async (event) => {

  let projectsEl = document.getElementById('projects');
  let html = '';
  let response;

  response = await fetch('/projects/data.json');
  let projects = await response.json()

//   console.log(projects);

  for (let url of projects) {
    response = await fetch(url);
    html += await response.text();
  }

  projectsEl.innerHTML = html;
});
