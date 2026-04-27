# Changelog

## [Unreleased]

### Added

### Changed

### Removed

### Fixed

## [0.2.0] - 2026-04-20

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

### Changed

### Removed

### Fixed

## [0.1.0] - 2026-04-20

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
