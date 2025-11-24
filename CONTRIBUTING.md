# Contributing to SunKey

Thank you for your interest in contributing to SunKey! This document provides guidelines and instructions for contributing to the project.

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git
- A code editor (VS Code recommended)

### Setup

1. **Fork the repository** on GitHub

2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/SunKey.git
   cd SunKey
   ```

3. **Add the upstream remote**:
   ```bash
   git remote add upstream https://github.com/bandzijs/Sunkey-main-1.git
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

## Development Workflow

### Branch Naming

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `test/description` - Adding tests

### Making Changes

1. **Create a branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our coding standards

3. **Test your changes**:
   ```bash
   npm run typecheck
   npm run lint
   npm run build
   ```

4. **Commit your changes** using conventional commits:
   ```bash
   git commit -m "feat: add new feature description"
   ```

   Commit types:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation
   - `style:` - Formatting
   - `refactor:` - Code restructuring
   - `test:` - Adding tests
   - `chore:` - Maintenance tasks

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** on GitHub

## Coding Standards

### TypeScript/React

- Use TypeScript for all new code
- Follow React best practices (functional components, hooks)
- Use kebab-case for component file names (e.g., `gene-key-wheel.tsx`)
- Prefer React Server Components where possible
- Minimize client components (`'use client'`) to small, isolated components

### Code Style

- Use 2 spaces for indentation
- Use single quotes for strings
- Add semicolons at the end of statements
- Maximum line length: 100 characters
- Use meaningful variable and function names

### Component Structure

```typescript
// Imports
import React from 'react';

// Types/Interfaces
interface ComponentProps {
  // props
}

// Component
export const Component: React.FC<ComponentProps> = ({ prop }) => {
  // Component logic
  return (
    // JSX
  );
};
```

### File Organization

- Keep components in `src/components/`
- Keep data files in `src/data/`
- Keep utilities in `src/utils/`
- Use index files for clean imports when appropriate

## Testing

Before submitting a PR, ensure:

- [ ] Type checking passes: `npm run typecheck`
- [ ] Linting passes: `npm run lint`
- [ ] Build succeeds: `npm run build`
- [ ] Application runs without errors: `npm run dev`
- [ ] No console errors in browser
- [ ] Changes work across different screen sizes (responsive)

## Pull Request Process

1. **Update documentation** if you've changed functionality
2. **Add tests** if you've added new features
3. **Ensure all checks pass** (CI will run automatically)
4. **Request review** from at least one team member
5. **Address feedback** and update your PR as needed

### PR Checklist

- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex logic
- [ ] Documentation updated
- [ ] No new warnings or errors
- [ ] Changes tested locally
- [ ] PR description explains what and why

## Project Structure

```
src/
├── components/          # React components
│   ├── LandingPage.tsx
│   ├── ResultPage.tsx
│   ├── GeneKeyWheel.tsx
│   ├── RootsView.tsx
│   └── ConsciousnessMap.tsx
├── data/               # Static data files
│   ├── geneKeys.ts
│   ├── geneKeyOrder.ts
│   ├── geneKeyTrigrams.ts
│   └── trigramColors.ts
├── utils/              # Utility functions
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

## Component Ownership

- `LandingPage.tsx` - Birth data input form
- `ResultPage.tsx` - Gene Key results display
- `GeneKeyWheel.tsx` - Interactive mandala wheel visualization
- `RootsView.tsx` - Elemental roots breakdown
- `ConsciousnessMap.tsx` - All 64 Gene Keys grid view

## Questions?

- Open an issue for discussion
- Reach out to the maintainers
- Check existing issues and PRs

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Focus on what's best for the project

Thank you for contributing to SunKey! 🎉

