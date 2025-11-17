# AI Rules for bellas! Application

This document outlines the core technologies used in this project and provides clear guidelines on which libraries to use for specific functionalities.

## Tech Stack Description

*   **Frontend Framework**: React (version 18.x) for building dynamic user interfaces.
*   **Language**: TypeScript for type safety and improved code quality.
*   **Build Tool**: Vite for a fast development experience and optimized builds.
*   **Styling**: Tailwind CSS for utility-first CSS styling, enabling rapid UI development.
*   **UI Components**: shadcn/ui, a collection of re-usable components built on Radix UI and styled with Tailwind CSS.
*   **Routing**: React Router DOM for declarative client-side routing.
*   **Icons**: Lucide React for a comprehensive set of customizable SVG icons.
*   **State Management/Data Fetching**: React Query for managing server state, caching, and data synchronization.
*   **Form Handling**: React Hook Form for efficient form management and Zod for schema validation.
*   **Date Management**: React Day Picker for date selection and Date-fns for date manipulation.
*   **Toast Notifications**: Sonner for elegant and accessible toast notifications.

## Library Usage Rules

To maintain consistency and leverage the strengths of our chosen tech stack, please adhere to the following rules:

*   **UI Components**:
    *   Always prioritize `shadcn/ui` components for building the user interface.
    *   If a required component is not available in `shadcn/ui`, create a new, custom component in `src/components/` using Tailwind CSS for styling.
    *   **Do not modify existing `shadcn/ui` component files directly.** If a `shadcn/ui` component needs customization beyond its props, create a wrapper component or a new component from scratch.
*   **Styling**:
    *   Use **Tailwind CSS exclusively** for all styling. Avoid writing custom CSS classes in separate `.css` files for components.
    *   Utilize Tailwind's utility classes for layout, spacing, colors, typography, and responsiveness.
*   **Routing**:
    *   All client-side navigation must be handled using `react-router-dom`.
    *   Define all main application routes within `src/App.tsx`.
    *   Use the `NavLink` component (or `RouterNavLink` directly) for navigation links.
*   **Icons**:
    *   Use icons from the `lucide-react` library.
*   **Forms**:
    *   Implement all forms using `react-hook-form` for state management and validation.
    *   Use `zod` for defining form schemas and validation rules.
*   **Date Handling**:
    *   For date input and selection, use `react-day-picker`.
    *   For any date formatting or manipulation, use `date-fns`.
*   **Toast Notifications**:
    *   Use `sonner` for displaying all types of notifications (success, error, info, loading). The `Sonner` component is already integrated into `src/App.tsx`.
*   **Data Fetching**:
    *   For fetching, caching, and synchronizing server data, use `@tanstack/react-query`.
*   **Utility Functions**:
    *   Place general utility functions (e.g., `cn` for Tailwind class merging) in `src/lib/utils.ts`.
*   **Component Structure**:
    *   Create a new, dedicated file for every new React component or custom hook.
    *   Aim for small, focused components (ideally 100 lines of code or less).
    *   Components should reside in `src/components/` and pages in `src/pages/`.