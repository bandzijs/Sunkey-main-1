# Setting Up GitHub Repository

This guide will help you create a new GitHub repository and push this project to it.

## Step 1: Create GitHub Repository

### Option A: Via GitHub Web Interface

1. Go to https://github.com/new
2. **Repository name**: `SunKey` (or your preferred name)
3. **Description**: `Gene Keys Visualization - Interactive mandala wheel with I-Ching trigram associations`
4. **Visibility**: Choose Private or Public
5. **DO NOT** initialize with:
   - ❌ README
   - ❌ .gitignore
   - ❌ license
   
   (We already have these files)
6. Click **"Create repository"**

### Option B: Via GitHub CLI

If you have GitHub CLI installed:

```bash
gh repo create SunKey --private --description "Gene Keys Visualization - Interactive mandala wheel with I-Ching trigram associations"
```

## Step 2: Update Git Remote

After creating the repository, update your git remote:

```bash
# Navigate to project directory
cd "D:\Web\Sun key Droid\SunKey_visual_idea_no_calc"

# Remove existing remote (if any)
git remote remove origin

# Add your new repository as remote
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/SunKey.git

# Or if you prefer SSH:
# git remote add origin git@github.com:YOUR_USERNAME/SunKey.git

# Verify remote
git remote -v
```

## Step 3: Commit and Push

```bash
# Check status
git status

# Add all files
git add .

# Commit changes
git commit -m "chore: add collaboration infrastructure and setup files"

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Configure GitHub Repository Settings

After pushing, configure your repository:

### Branch Protection

1. Go to **Settings** → **Branches**
2. Add rule for `main` branch:
   - ✅ Require a pull request before merging
   - ✅ Require approvals: 1
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Include administrators

### Collaborators

1. Go to **Settings** → **Collaborators**
2. Click **"Add people"**
3. Enter GitHub usernames or email addresses
4. Choose permission level:
   - **Write**: Can push to repository
   - **Maintain**: Can manage repository settings

### Labels

1. Go to **Issues** → **Labels**
2. Create these labels (or use existing):
   - `bug` (red)
   - `enhancement` (green)
   - `documentation` (blue)
   - `priority: high` (red)
   - `priority: medium` (yellow)
   - `priority: low` (gray)
   - `component: wheel` (purple)
   - `component: roots` (purple)
   - `component: landing` (purple)
   - `good first issue` (green)

### GitHub Actions

The CI workflow will automatically run on:
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

You can view workflow runs in the **Actions** tab.

## Step 5: Verify Setup

1. ✅ Repository is created and code is pushed
2. ✅ Branch protection is enabled
3. ✅ Collaborators are added
4. ✅ Labels are created
5. ✅ CI workflow runs successfully (check Actions tab)

## Next Steps

- Share the repository URL with your team
- Team members should fork or clone the repository
- Start collaborating using the workflow in [CONTRIBUTING.md](CONTRIBUTING.md)

## Troubleshooting

### Authentication Issues

If you encounter authentication errors:

```bash
# Use GitHub CLI to authenticate
gh auth login

# Or set up SSH keys
# See: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
```

### Remote Already Exists

If you get "remote origin already exists":

```bash
# Remove existing remote
git remote remove origin

# Add new remote
git remote add origin https://github.com/YOUR_USERNAME/SunKey.git
```

### Push Rejected

If push is rejected:

```bash
# Force push (only if you're sure - this overwrites remote)
git push -u origin main --force

# Or pull first and merge
git pull origin main --allow-unrelated-histories
```

## Need Help?

- Check [GitHub Documentation](https://docs.github.com)
- Review [CONTRIBUTING.md](CONTRIBUTING.md) for collaboration workflow
- Open an issue in the repository

