// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(data) {
  let badgeLink;
  let link;
  //'MIT', 'GNU GPLv3', 'Apache License 2.0', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Mozilla Public License 2.0'
  switch (data.license){
    case 'MIT':
      badgeLink = 'https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT'
      link = '(https://opensource.org/licenses/MIT)'
    break;
    case 'GNU GPLv3':
      badgeLink = 'https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0'
      link ='(https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case 'Apache License 2.0':
      badgeLink = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0'
      link = 'https://opensource.org/licenses/Apache-2.0)'
      break;
    case 'BSD 2-Clause "Simplified" License':
      badgeLink = 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause'
      link = '(https://opensource.org/licenses/BSD-2-Clause)'
      break;
    case 'BSD 3-Clause "New" or "Revised" License':
      badgeLink = 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause'
      link = '(https://opensource.org/licenses/BSD-3-Clause)'
      break;
    case 'Mozilla Public License 2.0':
      badgeLink = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0'
      link ='(https://opensource.org/licenses/MPL-2.0)'
      break;
    default :
      badgeLink = 'https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT'
      link ='(https://opensource.org/licenses/MIT)'
  }
  if (data.license) {
    return `${renderLicenseLink(data, link)} 
    [![License](${badgeLink})`
  } else return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data, link) {
//'MIT', 'GNU GPLv3', 'Apache License 2.0', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Mozilla Public License 2.0'
  if (data.license){
    return `${data.license}: [License]${link}`
  } else return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license){ return `${renderLicenseBadge(data)}`
} else return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(fullData) {
  const data = fullData[fullData.length - 1]
  let x;
  let email;

  if (!data.email){email=''} else {email = `For general inquiries or further assistance, you can contact the project maintainer directly via email at [${data.email}](mailto:${data.email})${x}`}
  if (data.x=='false'){x=''} else {x = ` or reach out to us on X/Twitter [@${data.x}](https://twitter.com/${data.x}).`}
  return `
# ${data.fileName} 
${renderLicenseSection(data)}

## Description 
${data.description} 

## Table of Contents
- [Description](Description) 
- [Installation](Installation) 
- [Usage](Usage) 
- [Tests](Tests) 
- [Questions](Questions) 
- [Contact](Contact) 
- [Contributing](Contributing) 
- [License](License) 

## Installation
${data.installation}

## Usage
${data.usage}

## Tests 

### Introduction to Testing
Testing is an essential part of maintaining code quality and ensuring that our project works as expected across different environments and scenarios.

### Testing our project

${data.test}
## Questions

### Usage Instructions
If you have any questions or need assistance with the project, please feel free to reach out to us through GitHub Discussions. You can start a new discussion thread to ask a question or join an existing discussion. To test our project, clone the repository from [Github](https://github.com/${data.github}/${data.fileName.trim()})

### Reporting Issues
If you encounter any bugs or issues with the project, please report them on our [Github](https://github.com/${data.github}/issues) Issues page. When submitting a bug report, please include detailed steps to reproduce the issue, along with any relevant error messages or screenshots.

### Feature Requests
We welcome feature requests and suggestions for improving the project. If you have an idea for a new feature or enhancement, please submit a feature request on our GitHub Issues page. Be sure to provide a clear description of the proposed feature and why you think it would be valuable.
## Contact
- [GitHub](https://github.com/${data.github}) 
${email}

## Contributing
If you're interested in contributing to the project, please read our Contributing Guidelines for instructions on how to get started. We welcome contributions of all kinds, including code, documentation, bug fixes, and feature enhancements.

#### Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

  - Fork the repository
  - Create a new branch (git checkout -b feature/your-feature)
  - Make your changes
  - Commit your changes (git commit -am 'Add some feature')
  - Push to the branch (git push origin feature/your-feature)
  - Create a new Pull Request

## License
This project was created using:<br>
${renderLicenseSection(data)}<br>
For more information about this license, click the above link to view the details of the license.
`;
}

module.exports = generateMarkdown;
