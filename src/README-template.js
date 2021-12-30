module.exports = readmeData => {
  const { title, description, installation, usage, credits, license } = readmeData;

  return `
  # ${title}

  ## Description
  ${description}

  ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## Credits
  ${credits}

  ## License
  ${license}

  ## Contact
  Contact me on my GitHub account or via email:
  Github: https://github.com/cmdebrosse
  email: cmdebrosse@outlook.com
  `;
};