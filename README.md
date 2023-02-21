# HRnet

HRnet is an excellent software tool that has been specially designed to cater to the needs of the company by providing an efficient and effective way to manage employee records. It is a powerful, user-friendly, and secure application that is used internally by our company to streamline employee record-keeping and ensure that information is up-to-date and accessible when needed. With HRnet, you can easily create, view, and update employee records, making it an essential tool for all your human resources management needs. So, whether you are a manager or a human resources professional, you can rely on HRnet to help you manage employee information more efficiently and effectively.

# Table of contents

1. [Front-End](#1-front-end) <br>
 1.1 [Front-End stack](#11-front-end-stack)<br>
 1.2 [Libraries used](#12-libraries-used)<br>
 1.3 [Front-End installation guide](#13-front-end-installation-guide)<br>
 1.4 [Launching the project](#14-launching-the-project)<br>
 1.5 [Other commands](#15-other-commands)<br>

2. [Miscellaneous](#2-miscellaneous) <br>
   2.1 [Folder-app structure](#21-folder-app-structure) <br>
   2.2 [Naming conventions](#22-naming-conventions) <br>
   2.3 [Trivial information](#23-trivial-information) <br>

# 1. Front-End

## 1.1 Front-End stack

- HTML
- SASS
- TypeScript
- React
- Next.js

<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer" title="HTML5"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
<a href="https://sass-lang.com/" target="_blank" rel="noreferrer" title="SASS"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg" width="36" height="36" alt="Sass" /></a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer" title="TypeScript"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" /></a>
<a href="https://reactjs.org/" target="_blank" rel="noreferrer" title="React"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="36" height="36" alt="React" /></a>
<a href="https://nextjs.org/docs" target="_blank" rel="noreferrer" title="Next.js"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg" width="36" height="36" alt="NextJs" /></a>

## 1.2 Libraries used

- Jest with React Testing Library
- Redux with React-Redux and Redux Toolkit

<a href="https://jestjs.io/" target="_blank" rel="noreferrer" title="Jest"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" width="36" height="36" alt="Jest" /></a>
<a href="https://redux.js.org" target="_blank" rel="noreferrer" title="Redux"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg" width="36" height="36" alt="Redux" /></a>

## 1.3 Front-End installation guide

The project uses Node packages and uses `npm`, so the installation of Node.js in your IDE is required

> [Install Node.js](https://nodejs.org/en/)

Once Node.js has been successfully added to your IDE, you'll need to:

1. Fork the Front-End repository
2. Clone it locally with with `git clone`

Afterwards you'll need to install all the project dependencies with `npm install`

## 1.4 Launching the project

For the Front-end, you will need to compile the Next.js app with the command:

```bash
npm run dev
```

## 1.5 Other commands

This app has 2 other executable scripts:

1. To run all tests with Jest and get a code coverage percentage:

```bash
npm run test
```
  
2. To run a test with Jest on a particular file:

```bash

npm  run  test -- [file-name].tsx --silent=false --coverage=false

```

---

# 2. Miscellaneous

## 2.1 Folder app structure

Here's the current folders structure for the application as an ASCII tree:

```bash
# Public folder
public/  
 # Source folder
src/
├─ __tests__/ # Folder for the tests
├─ assets/ # Folder for static assets at runtime
├─ components/ # Folder for React components of the app
├─ pages/ # Folder for the pages of the app
├─ react-utils/ # Utilities such as function and services
├─ redux/ # Folder to handle the state management with Redux
├─ sass/ # Folder for the styling of the app

```

## 2.2 Naming conventions

- File and folder names: `kebab-case`

   example: `helper-functions.ts`

- CSS: `kebab-case`

 examples:

  ```css
  .main-page {...};
  --bg-primary: red;
  ```

- JS: `camelCase`, ⁣`PascalCase` and `SNAKE_CASE`

 1. For variable names: `camelCase`
 2. For class and component names: `PascalCase`
 3. For contextualized constants names: `SNAKE_CASE`

 examples:

 ```js
 let dataValues = [{value: 5}, {value: 2}];

 class WebStorageService{...}

 export default function Header(){...}

 const MAX_32_BIT_UNSIGNED_INTEGER = 2_147_483_647;
 ```

## 2.3 Trivial information

This project:

- Has a responsive design
- Has a dark/light theme
- Uses SSR (Server-side rendering)
- Uses the 7-1 pattern for SASS
  