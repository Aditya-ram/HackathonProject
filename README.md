# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:
-It is a project containing two web pages.
-The first webpage contains a list of repositories given by the github search API.
-The owner of the repository, description, star count, fork count, and primary language are also displayed.
-Repositories can be filtered based on language.
-They can be sorted based on either the star counts or the fork counts.
-Clicking on any displayed repo leads you to a new page that displays the recent commits and the contributors to that repository.

The webpage can operate on two themes/modes: dark and light.
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
