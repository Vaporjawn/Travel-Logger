# Contributing to Travel Logger 🌍

Thank you for your interest in contributing to Travel Logger! This document provides guidelines and instructions for contributing.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Community](#community)

## 📜 Code of Conduct

This project adheres to a Code of Conduct that all contributors are expected to follow. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before contributing.

## 🤝 How Can I Contribute?

### Reporting Bugs 🐛

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** to demonstrate the steps
- **Describe the behavior you observed** and what you expected
- **Include screenshots** if applicable
- **Include your environment details** (OS, Node version, browser)

### Suggesting Enhancements 💡

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the suggested enhancement
- **Explain why this enhancement would be useful**
- **List any alternative solutions** you've considered

### Your First Code Contribution 🎯

Unsure where to begin? Look for issues labeled:

- `good first issue` - Simple issues perfect for newcomers
- `help wanted` - Issues where we need community help
- `beginner friendly` - Great for first-time contributors

### Pull Requests 🔄

- Fill in the pull request template
- Follow the style guidelines
- Include screenshots for UI changes
- Update documentation as needed
- Add tests for new features

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or Atlas)
- Mapbox API token
- Git

### Setup Development Environment

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Travel-Logger.git
   cd Travel-Logger
   ```

2. **Install dependencies**
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Server (.env)
   cd server
   cp .env.example .env
   # Edit .env with your MongoDB URL and API key

   # Client (.env)
   cd ../client
   cp .env.example .env
   # Edit .env with your Mapbox token
   ```

4. **Start development servers**
   ```bash
   # Terminal 1 - Start backend
   cd server
   npm run dev

   # Terminal 2 - Start frontend
   cd client
   npm run dev
   ```

## 💻 Development Workflow

### Branch Naming Convention

- `feature/` - New features (e.g., `feature/add-search-functionality`)
- `bugfix/` - Bug fixes (e.g., `bugfix/fix-map-rendering`)
- `hotfix/` - Critical fixes for production (e.g., `hotfix/security-patch`)
- `docs/` - Documentation updates (e.g., `docs/update-readme`)
- `refactor/` - Code refactoring (e.g., `refactor/optimize-api-calls`)
- `test/` - Adding or updating tests (e.g., `test/add-component-tests`)

### Commit Message Guidelines

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, no logic change)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

**Examples:**
```
feat(client): add user authentication
fix(server): resolve database connection issue
docs(readme): update installation instructions
```

### Running Tests

```bash
# Run server tests
cd server
npm test

# Run client tests
cd client
npm test

# Run all tests
npm run test:all
```

### Linting and Formatting

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

## 🔀 Pull Request Process

1. **Update your fork**
   ```bash
   git checkout master
   git pull upstream master
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Write clean, documented code
   - Follow the style guidelines
   - Add tests for new features
   - Update documentation

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill in the PR template
   - Link any related issues

7. **Code Review**
   - Address review comments
   - Keep the PR updated with master
   - Be patient and responsive

## 🎨 Style Guidelines

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow ESLint configuration
- Use functional components and hooks
- Prefer `const` over `let`, avoid `var`
- Use meaningful variable names
- Add JSDoc comments for functions
- Keep functions small and focused

### React Components

- Use functional components
- Extract reusable logic into custom hooks
- Keep components small and focused
- Use TypeScript interfaces for props
- Follow Material UI patterns

### CSS/Styling

- Use Material UI's `sx` prop for component styling
- Follow the existing theme configuration
- Maintain responsive design
- Use semantic color tokens from theme

### API Design

- Use RESTful conventions
- Return appropriate HTTP status codes
- Include error messages in responses
- Validate input data
- Document endpoints

## 📝 Documentation

- Update README.md for significant changes
- Add JSDoc comments to functions
- Update API documentation
- Include inline comments for complex logic
- Update CHANGELOG.md

## 🧪 Testing Guidelines

- Write unit tests for utilities and helpers
- Write integration tests for API endpoints
- Write component tests for React components
- Aim for >80% code coverage
- Test edge cases and error scenarios

## 🌟 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- GitHub contributors page

## 💬 Community

### Getting Help

- 💬 **[GitHub Discussions](https://github.com/Vaporjawn/Travel-Logger/discussions)** - Ask questions, share ideas
- 🐛 **[Issues](https://github.com/Vaporjawn/Travel-Logger/issues)** - Report bugs, request features
- 📧 **Email** - victor.williams.dev@gmail.com

### Communication Channels

- Be respectful and constructive
- Stay on topic
- Help others when you can
- Follow the Code of Conduct

## 📄 License

By contributing to Travel Logger, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You!

Your contributions make Travel Logger better for everyone. Whether it's code, documentation, bug reports, or feature suggestions - every contribution is valued and appreciated!

---

**Happy Contributing! 🚀**
