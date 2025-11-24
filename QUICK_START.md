# Quick Start Guide - Collaboration

## For Repository Owner (First Time Setup)

### 1. Create GitHub Repository
- Go to https://github.com/new
- Name: `SunKey`
- Description: `Gene Keys Visualization - Interactive mandala wheel with I-Ching trigram associations`
- **Don't** initialize with README/gitignore/license
- Click "Create repository"

### 2. Connect Local Project
```bash
cd "D:\Web\Sun key Droid\SunKey_visual_idea_no_calc"
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/SunKey.git
git add .
git commit -m "chore: add collaboration infrastructure"
git push -u origin main
```

### 3. Configure Repository
- **Settings → Branches**: Protect `main` branch (require PR reviews)
- **Settings → Collaborators**: Add team members
- **Issues → Labels**: Create labels (bug, enhancement, etc.)

---

## For Team Members

### 1. Clone Repository
```bash
git clone https://github.com/OWNER_USERNAME/SunKey.git
cd SunKey
npm install
```

### 2. Make Changes
```bash
# Update main
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/your-feature-name

# Make changes, then:
git add .
git commit -m "feat: description of changes"
git push origin feature/your-feature-name
```

### 3. Create Pull Request
- Go to GitHub repository
- Click "Compare & pull request"
- Fill out form and request review
- Wait for approval, then merge

---

## Essential Commands

```bash
# Check status
git status

# Update from main
git checkout main
git pull origin main

# Create branch
git checkout -b feature/name

# Commit changes
git add .
git commit -m "feat: description"

# Push branch
git push origin feature/name

# Test code
npm run typecheck
npm run lint
npm run dev
```

---

## Full Documentation

- **Detailed Guide**: See `COLLABORATION_GUIDE.md`
- **Contributing**: See `CONTRIBUTING.md`
- **Setup Help**: See `SETUP_GITHUB.md`

