# Publishing Guide

This guide will help you publish your Next.js 15 + shadcn/ui starter template to npm.

 ## 🚀 Pre-Publishing Checklist
 
 ### 1. **Switch to Starter Branch**
 ```bash
 # Make sure you're on the starter branch
 git checkout starter
 git pull origin starter
 ```
 
 ### 2. **Update Package Information**
 - [ ] Update `package.json` with your information:
   - `author.name`
   - `author.email` 
   - `author.url`
   - `repository.url`
   - `bugs.url`
   - `homepage`

 ### 3. **Test the CLI**
```bash
 # Test locally
 npm link
 nextjs-shadcn-starter test-project
cd test-project
npm run dev
```

 ### 4. **Prepare for Publishing**
```bash
# Build the project
npm run build

# Test the package locally
npm pack
```

 ## 📦 Publishing Steps
 
 ### 1. **Ensure You're on Starter Branch**
 ```bash
 # Verify you're on the starter branch
 git branch
 # Should show: * starter
 ```
 
 ### 2. **Login to npm**
```bash
npm login
```

 ### 3. **Publish the Package**
```bash
npm publish
```

 ### 4. **Verify Publication**
 - Check [npmjs.com](https://www.npmjs.com/package/nextjs-shadcn-starter)
 - Test installation: `npx nextjs-shadcn-starter@latest test-project`

## 🎯 Usage After Publishing

Users can now install your starter template with:

```bash
 # Using npx
 npx nextjs-shadcn-starter@latest my-app
 
 # Using npm
 npm create nextjs-shadcn-starter@latest my-app
 
 # Using yarn
 yarn create nextjs-shadcn-starter my-app
 
 # Using pnpm
 pnpm create nextjs-shadcn-starter my-app
```

 ## 🔄 Updating the Package
 
 ### 1. **Switch to Starter Branch**
 ```bash
 git checkout starter
 git pull origin starter
 ```
 
 ### 2. **Update Version**
```bash
npm version patch  # 1.0.0 -> 1.0.1
npm version minor  # 1.0.0 -> 1.1.0
npm version major  # 1.0.0 -> 2.0.0
```

 ### 3. **Publish Updates**
```bash
npm publish
```

## 📋 Package Features

### **Branded CLI Experience**
- ASCII art banner
- Colored terminal output
- Comprehensive welcome message
- Error handling with helpful messages
- Progress indicators

### **Post-Install Experience**
- Welcome message after installation
- Feature highlights
- Quick start instructions
- Documentation links
- Customization tips

### **User-Friendly Features**
- Project name validation
- Git repository initialization
- Automatic dependency installation
- Clear error messages
- Graceful error handling

## 🎨 Customization

### **Update Branding**
- Modify the ASCII art in `bin/cli.js`
- Update colors and styling
- Change welcome messages
- Add your logo or branding

### **Add Features**
- Interactive prompts for customization
- Template selection options
- Configuration options
- Additional post-install scripts

## 📚 Documentation

### **README Updates**
- Update installation instructions
- Add usage examples
- Include troubleshooting section
- Add contributing guidelines

### **Package Description**
- Clear, compelling description
- Relevant keywords
- Feature highlights
- Usage examples

## 🔧 Troubleshooting

### **Common Issues**
1. **Package name already exists**: Choose a different name
2. **Invalid package name**: Use only lowercase letters, numbers, hyphens
3. **Missing files**: Check the `files` field in package.json
4. **CLI not working**: Ensure `bin` field is correctly set

 ### **Testing**
 ```bash
 # Make sure you're on starter branch
 git checkout starter
 
 # Test the CLI locally
 npm link
 nextjs-shadcn-starter test-project

# Test the package
npm pack
tar -tf *.tgz

# Test installation
npm install -g .
```

## 🎉 Success!

Once published, your starter template will be available to developers worldwide with a professional, branded experience!
