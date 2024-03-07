// Function that returns a license badge based on the license type
function renderLicenseBadge(licenseBadge) {
  switch (licenseBadge) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "GPLv2":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    case "Apache":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "None":
      return "";
  }
}
// Function that returns the license section of the README
function renderLicenseSection(licenseSection) {
  switch(licenseSection) {
    case "MIT":
      return "MIT"; 
    case "GPLv2":
      return "GPLv2";
    case "Apache":
      return "Apache";
    case "None":
      return ""; 
  }
}
// Function to generate markdown for README
function generateReadme(data) {
    // Generate license badge
    const licenseBadge = renderLicenseBadge(data.license);
  
    // Generate license section
    const licenseSection = renderLicenseSection(data.license);

      // Initialize table of contents
      let tableOfContents = '';

      // Check if user inputted table of contents
      if (data.tableofcontents) {
          tableOfContents = `## Table of Contents\n${data.tableofcontents}\n\n`;
      }
  
      // Construct README content
      return `
  ## Title
  ${data.title}
  
  ## Description
  ${data.description}
  
  ${tableOfContents} 
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${licenseBadge}
  
  ${licenseSection}
  
  ## Contributors
  ${data.contributors}
  
  ## Tests
  ${data.tests}
  
  ## Github
  ${data.github}
  
  ## Email
  ${data.question}
  `;
  
  }
  
  module.exports = generateReadme;