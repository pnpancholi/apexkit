# Changelog

## [Unreleased]

## [0.3.0] - 2026-05-16

### Added
- Core UI Components:
    - Custom Button component for reusability and consistent styling.
    - Input component for standardized form inputs.
    - Alert component for displaying notifications.
    - Base Modal component for dynamic content display.
    - Page Wrapper component for consistent page layout.

### Changed
- Comprehensive UI Refactoring:
    - Refactored Sign-in and Sign-up forms for improved composition, cleanliness, and optimized page rendering, reducing prop drilling.
    - Refactored Reset Password page for co-located form components and streamlined data flow.
    - Refactored Profile page into smaller, manageable chunks.
    - Refactored Landing page and Footer for cleanliness, responsiveness, and visual consistency.
    - Updated Homepage's tools and features section to use a static `_data` directory.
    - Integrated new Button, Input, Modal, and Alert components across various pages (Sign-in, Sign-up, Reset Password, Update Email).
- Authentication Improvements:
    - Refactored `signOut` function to `actions/auth` for better organization and removed redundant profile redirect logic.
    - Ensured consistent server actions for reset password functionality.
- Documentation:
    - Updated README to reflect new folder structure.
- Security Enhancements:
    - Switched to Next 15.5.18 (version with patch) to address recently discovered security vulnerabilities. [Ref](https://x.com/nextjs/status/2052489312944759202)

### Removed
- Removed redundant profile redirect function in `signOut` logic.

### Fixed
- Fixed broken tests related to update email functionality.
- Fixed tests to align with the new reset password function pattern.
- Resolved button display issues on the profile update page.
- Fixed build errors related to dynamic rendering by introducing a dynamic render parameter.
- Resolved dependency issues for Vercel builds.
- Refactored code to use font-aweosome instead of lucide-react throughout the app.

## [0.2.0] - 2026-05-04

### Added
- Vitest Setup
- Added tests for authentication:
        - Implemented comprehensive unit tests for user sign-up, covering success, existing email errors, and unexpected failures.
        - Developed robust unit tests for email-based sign-in, including successful login, invalid credential handling, and error scenarios.
        - Introduced tests for magic link sign-in, verifying link dispatch, unrecognized email flows, and system errors.
        - Created tests for password reset requests, ensuring email dispatch and graceful handling of unknown emails or system issues.
        - Implemented rigorous tests for password reset functionality, validating new password criteria, successful resets, and error conditions.
        - Added tests for Google social sign-in, confirming integration and error resilience.
        - Developed tests for email update functionality, verifying successful updates, invalid email formats, and various error states.
- Style guide with Biome
    - Added a STYLEGUIDE.md file to core rules to maintain code quality.
    - Implemented Biome to lint and format code.
    - Applied changes to the existing codebase to align with the style guide.


### Changed
- Refactored /src/app/sign-up/page.tsx to utilize `useState` instead of `useActionState` to avoid dead code.
- Added environment variable for `BASE_URL` and passed it to auth config at /src/auth/index.ts to handle better-auth warning. Users should ensure `BASE_URL` is configured in their environment variables to avoid warnings.
### Removed

### Fixed

## [0.1.0] - 2026-04-15

### Added
- Initial project setup with ApexKit base features:
    - Next.js 15 with App Router and React Server Components.
    - Drizzle ORM for type-safe database interactions.
    - Better Auth for robust authentication flows.
    - TailwindCSS and DaisyUI for modern UI styling.
    - TypeScript for enhanced type safety and developer experience.


### Changed
- (No significant changes in the initial setup phase)

### Removed
- (No significant removals in the initial setup phase)

### Fixed
- (No specific fixes in the initial setup phase)
