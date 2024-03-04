<div align="center">
  <img align="left" height="40" src="https://raw.githubusercontent.com/matro-ui/matro-ui.github.io/5e28aebe3e73835a4f102161f47a373fd59fc737/static/img/icon.svg">
  <h1 align="left">Contributing to Matro UI Documentation</h1>
</div>

Thank you for considering contributing to Matro UI Documentation! This guide will help you get started with building the documentation locally and making contributions.

## Prerequisites

Before you can contribute to the documentation, ensure that you have the following installed on your machine:

- Node.js (v14.x or higher)
- npm (v7.x or higher) or yarn (v1.x or higher)

## Getting Started

1. **Fork the Repository:** Fork the [Matro UI Documentation repository](https://github.com/matro-ui/matro-ui.github.io) to your GitHub account by clicking the "Fork" button at the top right of the repository page.

2. **Clone the Repository:** Clone your fork of the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/matro-ui/matro-ui.github.io.git
   ```

3. **Navigate to the Project Directory:** Change your current directory to the cloned repository:

   ```bash
   cd matro-ui.github.io
   ```

4. **Install Dependencies:** Install the project dependencies using npm or yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

## Local Development

To build and run the documentation site locally, use the following steps:

1. **Start the Development Server:** Run the following command to start the local development server:

   ```bash
   npm run start
   # or
   yarn start
   ```

2. **View the Documentation:** Once the development server is running, open your web browser and navigate to `http://localhost:3000` to view the documentation site.

3. **Make Changes:** Make changes to the documentation content located in the `docs` directory. The site will automatically update with your changes as you save the files.

## Contributing

If you'd like to contribute to the documentation, follow these steps:

1. **Create a Branch:** Create a new branch for your changes:

   ```bash
   git checkout -b feature/new-feature
   ```

2. **Make Changes:** Make your desired changes to the documentation.

3. **Commit Changes:** Commit your changes to your branch:

   ```bash
   git commit -am "Add new feature documentation"
   ```

4. **Push Changes:** Push your changes to your forked repository:

   ```bash
   git push origin feature/new-feature
   ```

5. **Create a Pull Request:** Once your changes are pushed to your forked repository, create a pull request against the `main` branch of the original repository.

## License
- The Matro UI Documentation is based on Docusaurus that is [MIT Licensed](./LICENSE).
- The Matro UI .md files (e.g., .md files in the /docs or any other folder) is [Creative Commons licensed](./LICENSE-docs).

By contributing to Matro UI Documentation, you agree that your contributions will be licensed under the [MIT License](./LICENSE).
