#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// ASCII Art Banner
const banner = `
${chalk.cyan.bold(`
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║  ${chalk.white.bold('Next.js 15 + shadcn/ui Starter Template')}              ║
║  ${chalk.gray('Professional, production-ready starter template')}           ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
`)}`;

// Success message
const successMessage = `
${chalk.green.bold('🎉 Success! Your Next.js 15 + shadcn/ui starter is ready!')}

${chalk.cyan.bold('📁 What\'s included:')}
  • ${chalk.white('Next.js 15 with App Router and Turbopack')}
  • ${chalk.white('All 56 shadcn/ui components pre-installed')}
  • ${chalk.white('TypeScript with strict configuration')}
  • ${chalk.white('Tailwind CSS v4 with OKLCH colors')}
  • ${chalk.white('Dark mode with system preference detection')}
  • ${chalk.white('Web Interface Guidelines applied')}
  • ${chalk.white('JetBrains Mono typography')}
  • ${chalk.white('Sonner toast notifications')}
  • ${chalk.white('Complete documentation in /docs')}

${chalk.cyan.bold('🚀 Next steps:')}
  ${chalk.yellow('cd')} your-project-name
  ${chalk.yellow('npm run dev')}          # Start development server
  ${chalk.yellow('npm run build')}        # Build for production

${chalk.cyan.bold('📚 Documentation:')}
  • Visit ${chalk.blue.underline('http://localhost:3000/docs')} for component guides
  • Check ${chalk.blue.underline('https://ui.shadcn.com')} for shadcn/ui docs
  • Read ${chalk.blue.underline('https://nextjs.org/docs')} for Next.js docs

${chalk.cyan.bold('🎨 Customization:')}
  • Edit ${chalk.gray('src/app/page.tsx')} to replace welcome content
  • Modify ${chalk.gray('src/components/main-navigation.tsx')} for navigation
  • Update colors in ${chalk.gray('src/app/globals.css')}
  • Replace logos in ${chalk.gray('public/')} directory

${chalk.green.bold('✨ Happy coding!')}

${chalk.gray('💡 Tip: Check out the README.md for detailed setup instructions.')}
`;

// Error message
const errorMessage = `
${chalk.red.bold('❌ Error: Could not create the starter template.')}

${chalk.yellow('Please make sure:')}
  • You have Node.js 18+ installed
  • You have npm 8+ installed
  • You have write permissions in the current directory
  • The project name is valid and doesn't already exist

${chalk.blue('For help, visit:')} ${chalk.blue.underline('https://github.com/mo0hamed-shoaib/nextjs-shadcn-starter/issues')}
`;

function main() {
  const args = process.argv.slice(2);
  const projectName = args[0];

  if (!projectName) {
    console.log(banner);
    console.log(chalk.red('❌ Error: Please provide a project name.'));
    console.log(chalk.yellow('Usage: npx nextjs-shadcn-starter@latest my-app'));
    process.exit(1);
  }

  // Validate project name
  if (!/^[a-zA-Z0-9-_]+$/.test(projectName)) {
    console.log(banner);
    console.log(chalk.red('❌ Error: Project name contains invalid characters.'));
    console.log(chalk.yellow('Use only letters, numbers, hyphens, and underscores.'));
    process.exit(1);
  }

  const projectPath = path.resolve(projectName);

  if (fs.existsSync(projectPath)) {
    console.log(banner);
    console.log(chalk.red(`❌ Error: Directory "${projectName}" already exists.`));
    console.log(chalk.yellow('Please choose a different project name.'));
    process.exit(1);
  }

  try {
    console.log(banner);
    console.log(chalk.cyan(`🚀 Creating your Next.js 15 + shadcn/ui starter...`));
    console.log(chalk.gray(`Project name: ${projectName}`));
    console.log('');

    // Create project directory
    fs.mkdirSync(projectPath, { recursive: true });

    // Copy template files
    const templatePath = path.join(__dirname, '..', 'template');
    if (fs.existsSync(templatePath)) {
      copyDirectory(templatePath, projectPath);
    } else {
      // Fallback: copy current directory files
      copyCurrentProject(projectPath);
    }

    // Initialize git repository
    try {
      execSync('git init', { cwd: projectPath, stdio: 'ignore' });
      console.log(chalk.green('✅ Git repository initialized'));
    } catch {
      console.log(chalk.yellow('⚠️  Could not initialize git repository'));
    }

    // Install dependencies
    console.log(chalk.cyan('📦 Installing dependencies...'));
    execSync('npm install', { cwd: projectPath, stdio: 'inherit' });

    console.log('');
    console.log(successMessage);

  } catch (error) {
    console.log('');
    console.log(errorMessage);
    console.log(chalk.gray(`Error details: ${error.message}`));
    process.exit(1);
  }
}

function copyDirectory(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function copyCurrentProject(destPath) {
  const currentDir = path.join(__dirname, '..');
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });

  const excludeFiles = [
    'node_modules',
    '.git',
    '.next',
    'bin',
    'template',
    'package-lock.json',
    'yarn.lock',
    'pnpm-lock.yaml',
    '.env.local',
    '.env.example'
  ];

  for (const entry of entries) {
    if (excludeFiles.includes(entry.name)) continue;

    const srcPath = path.join(currentDir, entry.name);
    const destFilePath = path.join(destPath, entry.name);

    if (entry.isDirectory()) {
      fs.mkdirSync(destFilePath, { recursive: true });
      copyDirectory(srcPath, destFilePath);
    } else {
      fs.copyFileSync(srcPath, destFilePath);
    }
  }
}

// Handle process termination
process.on('SIGINT', () => {
  console.log(chalk.yellow('\n\n⚠️  Installation cancelled by user.'));
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log(chalk.yellow('\n\n⚠️  Installation terminated.'));
  process.exit(0);
});

// Run the CLI
if (require.main === module) {
  main();
}
