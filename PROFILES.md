# Portfolio Profiles

This portfolio supports multiple professional profiles that can be easily switched between. Currently, two profiles are available:

1. **Data Analyst Profile** - Focused on data analysis, visualization, and data engineering skills.
2. **Java Stack Profile** - Focused on Java backend development and related technologies.

## Switching Between Profiles

To switch between profiles, update the `VITE_ACTIVE_PROFILE` environment variable in your `.env.local` file:

```bash
# For Data Analyst profile
VITE_ACTIVE_PROFILE=data-analyst

# For Java Stack profile
VITE_ACTIVE_PROFILE=java-stack
```

## Profile Structure

Each profile has its own data directory containing the following files:

- `skills.ts` - Professional skills and technologies
- `projects.ts` - Portfolio projects
- `experience.ts` - Work experience
- `education.ts` - Educational background
- `certifications.ts` - Professional certifications
- `hobbies.ts` - Personal interests and hobbies
- `languages.ts` - Language proficiencies

## Adding a New Profile

1. Create a new directory under `src/profiles/` with your profile name (e.g., `full-stack`)
2. Copy the data files from an existing profile
3. Update the data files with your new profile's information
4. Update the `VITE_ACTIVE_PROFILE` type in `src/env.d.ts` to include your new profile

## Development

When running the development server, changes to profile data will be hot-reloaded. However, if you modify the environment variables, you'll need to restart the development server for the changes to take effect.

## Building for Production

Make sure to set the `VITE_ACTIVE_PROFILE` environment variable in your production environment to control which profile is displayed.
