# Project Name README

This project utilizes [Turbo Repo](https://turbo.build/repo/) for managing a monorepo structure, enabling seamless management of multiple packages and applications within a single repository.

## Getting Started

To get started with the project:

1. Ensure you have [pnpm](https://pnpm.io/installation) installed on your system.
1. Clone this repository.
1. Install dependencies for each package or app by running `pnpm install` in the root directory.
1. Run all the applications with just `pnpm run dev`

   - Access the dashboard at [http://localhost:3000/](http://localhost:3000/).
   - Preview our Storybook at [http://localhost:6006/](http://localhost:6006/).
   - Access the email templates at [http://localhost:3001](http://localhost:3001).

## Project Structure

The repository consists of the following main components:

- **/packages**

  - `/ui`: Contains reusable components for our brand.
  - `/transactional`: Contains email templates for our brand, utilizing React-Email under the hood.
  - `/eslint-config`: Custom ESLint configuration.
  - `/tailwind-config`: Tailwind CSS configuration.
  - `/tsconfig`: TypeScript configuration.

- **/apps**
  - `/dashboard`: Deployable application.
  - `/storybook`: Application for previewing and testing UI components in isolation.

## Tools and Configurations

Each app and package has its own configuration for TypeScript (tsconfig) and ESLint. This allows for tailored linting and building processes specific to each component.

- **GitHub Actions**
  - **release-please**: Automates the release process using `release-please`.
  - **ci**: Executes builds and linting for packages on every push.

---

You can find more information about the tools used in this project:

- [Turbo](https://turbo.build/repo/)
- [Next.js](https://nextjs.org/)
- [Storybook](https://storybook.js.org/)
- [React Email](https://react.email/)

These resources will provide additional insights into the technologies employed in this project.

Now you're all set to start developing!
