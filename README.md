
  # AI Engineer Portfolio Website (Community)

  This is a code bundle for AI Engineer Portfolio Website (Community). The original project is available at https://www.figma.com/design/BQyZCjzyN2sONHvC7eojcd/AI-Engineer-Portfolio-Website--Community-.

  ## 🌐 Live Portfolio

  View the live portfolio: https://tapas15.github.io/myai_portfilio/

  ## Running the code
  
  Run `npm i` to install the dependencies.
  
  Run `npm run dev` to start the development server.
  
  ## Deploying to GitHub Pages
  
  ### Prerequisites
  1. Create a GitHub repository for your portfolio
  2. Install dependencies: `npm i`
  
  ### Deployment Steps
  
  1. **Build the project:**
     ```bash
     npm run build
     ```
  
  2. **Deploy to GitHub Pages:**
     ```bash
     npm run deploy
     ```
  
  3. **Configure GitHub Pages:**
     - Go to your repository on GitHub
     - Navigate to Settings → Pages
     - Set the source to "Deploy from a branch"
     - Select the `gh-pages` branch
     - Click Save
  
  4. **Access your live portfolio:**
     Your portfolio will be available at: `https://<your-username>.github.io/<repository-name>/`
  
  ### How It Works
  - The `npm run deploy` script builds the project and pushes the built files to the `gh-pages` branch
  - GitHub Pages serves the content from this branch
  - The `vite.config.ts` is configured with the correct base path for GitHub Pages deployment
  
  ### Troubleshooting
  - If the page shows a 404 error, ensure the base path in `vite.config.ts` matches your repository name
  - Make sure the `gh-pages` branch exists and has the correct content
  - Check that GitHub Pages is enabled in your repository settings
  