
## Quick Start

Make sure you have Node and NPM installed


```bash
# Clone the repository
git clone https://github.com/sivaish/flyb-test-repo.git

# Go inside the directory
cd <script folder>

# Install dependencies
npm install prompt-sync

# Start script 
node GeneratePayslip.js

# Feed Input from console / terminal
How can I serve you ? : GenerateMonthlyPayslip "Mary Song" 195000
```

#### Sample Input Feeds:
GenerateMonthlyPayslip "Mary Song" 20001
GenerateMonthlyPayslip "Mary Song" 7000
GenerateMonthlyPayslip "Mary Song" 170000
GenerateMonthlyPayslip "Mary Song" 195000
GenerateMonthlyPayslip "Mary Song" -15
GenerateMonthlyPayslip "Mary Song" testing
GenerateMonthlyPayslip Mary 96200

---
## Documentation

The prompt-sync Node module provides an easy-to-use alternative to this callback-based syntax.

The prompt() function returns the user feedback, so simply store that return value to a variable to use it later.

By default, most terminal programs will exit with Ctrl + C (This sends a SIGINT, or “signal interrupt” message indicating that a user wants to exit a program). With prompt-sync, in order to make sure that your users can exit at will, add a configuration object with sigint: true when invoking the prompt-sync function.

Please let me know if you find any issues in accesing the script - Happy to provide details.