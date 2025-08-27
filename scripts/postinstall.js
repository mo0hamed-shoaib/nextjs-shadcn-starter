#!/usr/bin/env node

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

// Welcome message
const welcomeMessage = `
${chalk.green.bold('🎉 Welcome to Next.js 15 + shadcn/ui Starter!')}

${chalk.cyan.bold('✨ What you get:')}
  • ${chalk.white('Next.js 15 with App Router and Turbopack')}
  • ${chalk.white('All 56 shadcn/ui components pre-installed')}
  • ${chalk.white('TypeScript with strict configuration')}
  • ${chalk.white('Tailwind CSS v4 with OKLCH colors')}
  • ${chalk.white('Dark mode with system preference detection')}
  • ${chalk.white('Web Interface Guidelines applied')}
  • ${chalk.white('JetBrains Mono typography')}
  • ${chalk.white('Sonner toast notifications')}
  • ${chalk.white('Complete documentation in /docs')}

${chalk.cyan.bold('🚀 Quick start:')}
  ${chalk.yellow('npm run dev')}          # Start development server
  ${chalk.yellow('npm run build')}        # Build for production
  ${chalk.yellow('npm run lint')}         # Run linting

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
${chalk.gray('🌟 Star us on GitHub if you find this template helpful!')}
`;

// Show the welcome message
console.log(banner);
console.log(welcomeMessage);
