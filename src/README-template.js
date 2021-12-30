module.exports = readmeData => {
  const { fullName, title, description, installation, usage, credits, license, userName, email } = readmeData;

  return `
  <h1 align="center">${title}</h1>

  > **Created by ${fullName}**

  ## Description
  ${description}

  ---

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contact](#contact)

  ---

  ## Installation
  ${installation}

  ---

  ## Usage
  ${usage}

  ---

  ## Credits
  ${credits}

  ---

  ## License
  ![badge](https://img.shields.io/badge/${license}-license-blue)
  
  ---

  ## Contact
  GitHub account: github.com/${userName}

  email: ${email}`;
};