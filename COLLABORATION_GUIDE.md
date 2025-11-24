# Step-by-Step Collaboration Guide

This guide provides detailed instructions for both repository owners and team members.

---

## Part 1: Repository Owner Setup

### Step 1: Create GitHub Repository

1. **Go to GitHub**: https://github.com/new
2. **Repository name**: Enter `SunKey` (or your preferred name)
3. **Description**: `Gene Keys Visualization - Interactive mandala wheel with I-Ching trigram associations`
4. **Visibility**: 
   - Choose **Private** (only team can see) or **Public** (anyone can see)
5. **Important**: Do NOT check any of these:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
   
   (We already have these files)
6. Click **"Create repository"**

### Step 2: Update Git Remote

Open your terminal in the project directory and run:

```bash
# Navigate to project
cd "D:\Web\Sun key Droid\SunKey_visual_idea_no_calc"

# Check current remote
git remote -v

# Remove old remote (if pointing to different repo)
git remote remove origin

# Add your new repository
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/SunKey.git

# Verify it's set correctly
git remote -v
```

**Example** (if your username is `johndoe`):
```bash
git remote add origin https://github.com/johndoe/SunKey.git
```

### Step 3: Commit and Push All Files

```bash
# Check what files need to be committed
git status

# Add all files (including new collaboration files)
git add .

# Commit with descriptive message
git commit -m "chore: add collaboration infrastructure and setup files"

# Push to GitHub
git push -u origin main
```

If you get an error about the branch name, use:
```bash
git branch -M main
git push -u origin main
```

### Step 4: Configure Repository Settings

#### A. Set Up Branch Protection

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Branches** (left sidebar)
4. Under **Branch protection rules**, click **Add rule**
5. In **Branch name pattern**, enter: `main`
6. Check these options:
   - ✅ **Require a pull request before merging**
     - Check: **Require approvals** (set to 1)
   - ✅ **Require status checks to pass before merging**
     - Check: **Require branches to be up to date before merging**
   - ✅ **Include administrators** (applies rules to you too)
7. Click **Create**

#### B. Add Collaborators

1. In repository **Settings**, click **Collaborators** (left sidebar)
2. Click **Add people** button
3. Enter GitHub usernames or email addresses of team members
4. Choose permission level:
   - **Write**: Can push code, create branches, open PRs
   - **Maintain**: Can manage repository settings (use sparingly)
5. Click **Add [username] to this repository**
6. Collaborators will receive an email invitation

#### C. Create Labels

1. Go to **Issues** tab
2. Click **Labels** (on the right)
3. Click **New label** and create these:

   **Type Labels:**
   - `bug` (red) - Something isn't working
   - `enhancement` (green) - New feature or request
   - `documentation` (blue) - Documentation improvements
   - `question` (purple) - Further information is requested

   **Priority Labels:**
   - `priority: high` (red)
   - `priority: medium` (yellow)
   - `priority: low` (gray)

   **Component Labels:**
   - `component: wheel` (purple)
   - `component: roots` (purple)
   - `component: landing` (purple)
   - `component: map` (purple)

   **Other:**
   - `good first issue` (green) - Good for newcomers
   - `help wanted` (blue) - Extra attention is needed

### Step 5: Verify CI/CD is Working

1. Go to **Actions** tab in your repository
2. You should see the CI workflow running (or completed)
3. If it shows a checkmark ✅, everything is working!

---

## Part 2: Team Member Setup

### Step 1: Get Access

1. **Accept invitation**: Check your email for GitHub invitation
2. **Or clone directly**: If repository is public or you have access
   ```bash
   git clone https://github.com/OWNER_USERNAME/SunKey.git
   cd SunKey
   ```

### Step 2: Initial Setup

```bash
# Navigate to project
cd SunKey

# Install dependencies
npm install

# Verify everything works
npm run typecheck
npm run lint
npm run dev
```

### Step 3: Configure Git (First Time Only)

```bash
# Set your name and email (if not already set)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Verify
git config --global user.name
git config --global user.email
```

---

## Part 3: Daily Collaboration Workflow

### For Team Members: Making Changes

#### Step 1: Update Your Local Repository

```bash
# Make sure you're on main branch
git checkout main

# Pull latest changes
git pull origin main
```

#### Step 2: Create a Feature Branch

```bash
# Create and switch to new branch
git checkout -b feature/your-feature-name

# Examples:
# git checkout -b feature/add-user-authentication
# git checkout -b fix/wheel-rendering-bug
# git checkout -b docs/update-readme
```

**Branch Naming Convention:**
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation
- `refactor/description` - Code restructuring
- `test/description` - Adding tests

#### Step 3: Make Your Changes

1. Edit files in your code editor
2. Test your changes:
   ```bash
   npm run typecheck  # Check for TypeScript errors
   npm run lint       # Check code quality
   npm run dev        # Test in browser
   ```

#### Step 4: Commit Your Changes

```bash
# Check what files changed
git status

# Add specific files (recommended)
git add src/components/YourComponent.tsx
git add src/data/yourData.ts

# Or add all changes
git add .

# Commit with descriptive message
git commit -m "feat: add user authentication form"
```

**Commit Message Format:**
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting
- `refactor:` - Code restructuring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

**Good Examples:**
```
feat: add birth date validation
fix: correct wheel color rendering
docs: update contributing guidelines
refactor: simplify GeneKeyWheel component
```

#### Step 5: Push Your Branch

```bash
# Push branch to GitHub
git push origin feature/your-feature-name

# First time pushing a new branch? Use:
git push -u origin feature/your-feature-name
```

#### Step 6: Create Pull Request

1. Go to your repository on GitHub
2. You'll see a banner: **"feature/your-feature-name had recent pushes"**
3. Click **"Compare & pull request"** button
4. **Fill out the PR form:**
   - Title: Clear description (e.g., "Add user authentication form")
   - Description: Explain what and why
   - Check the boxes in the checklist
   - Request reviewers (select team members)
5. Click **"Create pull request"**

#### Step 7: Address Review Feedback

If reviewers request changes:

```bash
# Make the requested changes
# ... edit files ...

# Commit the fixes
git add .
git commit -m "fix: address review feedback - improve error handling"

# Push updates (PR will automatically update)
git push origin feature/your-feature-name
```

#### Step 8: After PR is Merged

```bash
# Switch back to main
git checkout main

# Pull the merged changes
git pull origin main

# Delete your local branch (optional cleanup)
git branch -d feature/your-feature-name

# Delete remote branch (GitHub usually does this automatically)
git push origin --delete feature/your-feature-name
```

---

## Part 4: Common Workflows

### Workflow 1: Fixing a Bug

```bash
# 1. Update main
git checkout main
git pull origin main

# 2. Create fix branch
git checkout -b fix/description-of-bug

# 3. Make changes and test
# ... fix the bug ...
npm run typecheck
npm run lint
npm run dev

# 4. Commit
git add .
git commit -m "fix: resolve wheel rendering issue on mobile"

# 5. Push and create PR
git push origin fix/description-of-bug
# Then create PR on GitHub
```

### Workflow 2: Adding a New Feature

```bash
# 1. Update main
git checkout main
git pull origin main

# 2. Create feature branch
git checkout -b feature/new-feature-name

# 3. Develop feature
# ... write code ...
npm run typecheck
npm run lint
npm run build  # Ensure it builds

# 4. Commit frequently with clear messages
git add src/components/NewComponent.tsx
git commit -m "feat: add new component structure"

git add src/data/newData.ts
git commit -m "feat: add data for new feature"

# 5. Push and create PR
git push origin feature/new-feature-name
# Create PR when feature is complete
```

### Workflow 3: Updating Documentation

```bash
# 1. Create docs branch
git checkout -b docs/update-instructions

# 2. Edit documentation
# ... update README.md or CONTRIBUTING.md ...

# 3. Commit
git add README.md
git commit -m "docs: update installation instructions"

# 4. Push and create PR
git push origin docs/update-instructions
```

---

## Part 5: Reviewing Pull Requests

### For Repository Owners/Reviewers

1. **Go to Pull Requests tab**
2. **Click on a PR** to review
3. **Review the changes:**
   - Check the code diff
   - Look for code quality
   - Verify tests pass (check CI status)
4. **Leave comments:**
   - Click on line numbers to add comments
   - Use "Request changes" if fixes needed
   - Use "Approve" if it looks good
5. **Merge when ready:**
   - Click "Merge pull request"
   - Choose merge type (usually "Create a merge commit")
   - Confirm merge

### Review Checklist

- [ ] Code follows project style
- [ ] TypeScript types are correct
- [ ] No console errors
- [ ] Responsive design works
- [ ] Documentation updated if needed
- [ ] CI checks pass
- [ ] No security issues

---

## Part 6: Resolving Conflicts

If your branch is out of date:

```bash
# 1. Update main
git checkout main
git pull origin main

# 2. Switch back to your branch
git checkout feature/your-feature-name

# 3. Merge main into your branch
git merge main

# 4. Resolve conflicts in your editor
# Look for <<<<<<< markers
# Edit to keep the correct code
# Remove conflict markers

# 5. Commit the merge
git add .
git commit -m "merge: resolve conflicts with main"

# 6. Push
git push origin feature/your-feature-name
```

---

## Part 7: Quick Reference Commands

### Essential Commands

```bash
# Check status
git status

# View changes
git diff

# View commit history
git log --oneline

# Switch branches
git checkout branch-name

# Create and switch branch
git checkout -b branch-name

# Pull latest changes
git pull origin main

# Push changes
git push origin branch-name

# Undo uncommitted changes
git restore filename.tsx

# See all branches
git branch -a
```

### Project Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type check
npm run typecheck

# Lint code
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Part 8: Best Practices

### ✅ DO:

- **Pull before starting work**: Always update main first
- **Use descriptive branch names**: `feature/user-login` not `feature/update`
- **Write clear commit messages**: Explain what and why
- **Test before committing**: Run typecheck and lint
- **Keep PRs focused**: One feature/fix per PR
- **Request reviews**: Don't merge your own PRs
- **Communicate**: Comment on PRs, discuss in issues

### ❌ DON'T:

- **Don't commit to main directly**: Always use branches
- **Don't force push to main**: This can break things
- **Don't skip tests**: Always verify your code works
- **Don't ignore CI failures**: Fix issues before merging
- **Don't create huge PRs**: Break into smaller pieces
- **Don't commit secrets**: Use environment variables

---

## Troubleshooting

### Problem: "Permission denied"
**Solution**: Make sure you've accepted the collaborator invitation

### Problem: "Branch is behind"
**Solution**: Merge main into your branch (see Part 6)

### Problem: "Merge conflicts"
**Solution**: Resolve conflicts manually (see Part 6)

### Problem: "CI failing"
**Solution**: 
1. Check the error message in Actions tab
2. Run `npm run typecheck` and `npm run lint` locally
3. Fix the issues
4. Push again

### Problem: "Can't push"
**Solution**: 
- Check you're on the right branch
- Verify you have write access
- Make sure remote is set: `git remote -v`

---

## Getting Help

- **Read**: `CONTRIBUTING.md` for detailed guidelines
- **Check**: GitHub Issues for known problems
- **Ask**: Open an issue or contact repository owner
- **Review**: Existing PRs to see examples

---

**Happy Collaborating!** 🚀

Remember: Communication is key. When in doubt, ask questions!

