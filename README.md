# Boilerplate and Starter for Next JS 13+, Material UI and TypeScript

<p align="center">
  <a href="https://creativedesignsguru.com/demo/Nextjs-Boilerplate/"><img height="300" src="public/assets/images/nextjs-starter-banner.png?raw=true" alt="Next js starter banner"></a>
</p>

🚀 Boilerplate and Starter for Next.js with App Router and Page Router support, Material UI and TypeScript ⚡️ Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, Husky, Lint-Staged, Jest, Testing Library, Commitlint, VSCode, Netlify, PostCSS, Material UI, Authentication with [Clerk](https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate), Database with DrizzleORM (SQLite, PostgreSQL, and MySQL) and [Turso](https://turso.tech/?utm_source=nextjsstarterbp)

### Features

Developer experience first:

-   ⚡ [Next.js](https://nextjs.org) with App Router and Page Router support
-   🔥 Type checking [TypeScript](https://www.typescriptlang.org)
-   💎 Integrate with [Material UI](https://tailwindcss.com)
-   ✅ Strict Mode for TypeScript and React 18
-   💽 Global Database with [Turso](https://turso.tech/?utm_source=nextjsstarterbp)
-   ♻️ Type-safe environment variables with T3 Env
-   ⌨️ Form with React Hook From
-   🔴 Validation library with Zod
-   📏 Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals, Material UI and Airbnb configuration)
-   💖 Code Formatter with [Prettier](https://prettier.io)
-   🚫 Lint-staged for running linters on Git staged files
-   📓 Write standard compliant commit messages with Commitizen
-   🦺 Unit Testing with Jest and React Testing Library
-   🧪 E2E Testing with Cypress
-   👷 Run tests on pull request with GitHub Actions
-   🎉 Storybook for UI development
-   🎁 Automatic changelog generation with Semantic Release
-   🔍 Visual testing with Percy (Optional)
-   💡 Absolute Imports using `@` prefix
-   🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest
-   🤖 SEO metadata, with Next SEO
-   ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

Built-in feature from Next.js:

-   ☕ Minify HTML & CSS
-   💨 Live reload
-   ✅ Cache busting

### Philosophy

-   Nothing is hidden from you, so you have the freedom to make the necessary adjustments to fit your needs and preferences.
-   Easy to customize
-   Minimal code
-   SEO-friendly
-   🚀 Production-ready

### Requirements

-   Node.js 16+ and npm

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/luuphuc6297/nextjs-admin-boilerplate my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev
```

Open <http://localhost:3000> with your favorite browser to see your project.

### Set up authentication

Create a Clerk account at [Clerk.com](https://clerk.com?utm_source=github&utm_medium=sponsorship&utm_campaign=nextjs-boilerplate) and create a new application in Clerk Dashboard. Then, copy `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` into `.env.local` file (not tracked by Git):

```shell
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
CLERK_SECRET_KEY=your_clerk_secret_key
```

Now, you can a fully working authentication system with Next.js: Sign up, Sign in, Sign out, Forgot password, Reset password, Update profile, Update password, Update email, Delete account, and more.

### Project structure

```shell
.
├── README.md                       # README file
├── __mocks__                       # Mocks for testing
├── .github                         # GitHub folder
├── .storybook                      # Storybook folder
├── .vscode                         # VSCode configuration
├── cypress                         # Cypress folder
├── public                          # Public assets folder
├── scripts                         # Scripts folder
├── src
│   ├── __test__                    # Unit test
│   ├── apis                        # APIs configs
│   ├── assets                      # Expose assets form public
│   ├── components                  # React components
│   ├── configs                     # All of configs inside app
│   ├── containers                  # Handles logic components before export to pages
│   ├── context                     # Context components
│   ├── core                        # Core elements
│   ├── hooks                       # Customize hooks
│   ├── layouts                     # Layouts components
│   ├── mocks                       # Mocks
│   ├── pages                       # Next JS Pages (page router)
│   ├── services                    # Handle call apis using react-query
│   ├── stores                      # Handle call apis using react-query
│   ├── stories                     # Story book components
│   ├── styles                      # Styles folder
│   ├── templates                   # Templates for email
│   ├── types                       # All off types
│   ├── utils                       # Utilities folder
│   ├── validations                 # Validations schemas
│   └── views                       # UI components
└── tsconfig.json                   # TypeScript configuration
```

### Customization

You can easily configure Next js Boilerplate by making a search in the whole project with `FIXME:` for making quick customization. Here is some of the most important files to customize:

-   `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your website favicon, you can generate from <https://favicon.io/favicon-converter/>
-   `src/utils/AppConfig.ts`: configuration file
-   `src/templates/Main.tsx`: default theme
-   `next-sitemap.config.js`: sitemap configuration
-   `.env`: default environment variables

You have access to the whole code source if you need further customization. The provided code is only example for you to start your project. The sky is the limit 🚀.

### Commit Message Format

The project enforces [Conventional Commits](https://www.conventionalcommits.org/) specification. This means that all your commit messages must be formatted according to the specification. To help you write commit messages, the project uses [Commitizen](https://github.com/commitizen/cz-cli), an interactive CLI that guides you through the commit process. To use it, run the following command:

```shell
npm run commit
```

One of the benefits of using Conventional Commits is that it allows us to automatically generate a `CHANGELOG` file. It also allows us to automatically determine the next version number based on the types of commits that are included in a release.

### Testing

All tests are colocated with the source code inside the same directory. So, it makes it easier to find them. Unfortunately, it is not possible with the `pages` folder which is used by Next.js for routing. So, what is why we have a `pages.test` folder to write tests from files located in `pages` folder.

### Deploy to Vercel

Deploy this Next JS Boilerplate on Vercel in one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fixartz%2FNext-js-Boilerplate)

During the setup, you need to define the `DATABASE_URL` and `DATABASE_AUTH_TOKEN` environment variables.

### VSCode information (optional)

If you are VSCode user, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

Pro tips: if you need a project-wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug. Totally open to any suggestions and improvements.
