//function to generate the markdown here
function generateMarkdown(data) {
  return `
# Project Title
${data.title}
${data.getLicense}
Node.js Challenge: Professional README Generator

# Description
${data.description}

- [For-Installation](-----Installation Guide-----)
- [For-Usage](-----Usage Guide-----)
- [For-License](-----Installation Guide-----)
- [For-Contributing](-----Contributing Guide-----)
- [For-Tests](-----Tests Guide-----)
- [For-Questions](-----Contact-Information Guide-----)
    
# Installation
${data.installation}

# Usage
${data.usage}
Use NPM install

- Clone the repo

- "GitHub Clone Repo Link"

- Move to the project root directory

- cd "foldername"

- Run npm install

- npm install

- node index.js

# License 
${data.license}
MIT License

Copyright (c) [2021] [Benji-Francis]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the Node.js Challenge: Professional README Generator), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# Contributing 
${data.contributing}
Email me

# Tests
${data.tests}
Use Unit testing with Jest


# Contact Information 
* GitHub Username: ${data.userName}
* Contact Email: ${data.userEmail}

`;
}

//need to export the generateMarkdown function
module.exports = generateMarkdown;
