module.exports = readmeData => {
  const { fullName, title, description, installation, usage, credits, license, userName, email } = readmeData;

  return `
  # ${title}
  #### **Created by ${fullName}**

  ## Description
  ${description}

  ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    * [Contact](#contact)

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## Credits
  ${credits}

  ## License
  ${license}

  ## Contact
  Contact me on my [GitHub account](github.com/${userName}) or via [email](${email})`;
};