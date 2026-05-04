# Changelog

## [Unreleased]

### Added

### Changed

### Removed

### Fixed

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
