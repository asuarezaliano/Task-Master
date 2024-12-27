# TaskMaster

A modern task management application that helps you organize and prioritize your daily activities with a clean and intuitive interface.

![TaskMaster Logo](/public/images/logo.png)

## Demo

Check out the live demo: [TaskMaster App](https://task-master-aaaaaaa.vercel.app/)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
   git clone https://github.com/asuarezaliano/Task-Master.git

2. Install dependencies
   npm install

# or

yarn install

3. Run the development server
   npm run dev

# or

yarn dev

## Tech Stack

### Core

- **Next.js 14**: Leveraging the latest features of Next.js for server-side rendering, routing, and API handling, providing a robust and performant foundation.
- **TypeScript**: Ensuring type safety and better developer experience with static typing.

### Styling

- **Tailwind CSS**: Utilizing utility-first CSS framework for rapid UI development
- **class-variance-authority**: Managing component variants and styles with type-safe utilities
- **Shadcn UI**: Modern component library for building consistent and accessible interfaces
- **Lucide Icons**: Beautiful and consistent icon set

### Data Management & API

- **Axios**: Making HTTP requests with a promise-based HTTP client
- **React Hook Form**: Efficient form handling with easy validation
- **Zod**: Type-safe schema validation for forms and data

### Development & Testing

- **Storybook**: Component documentation and development environment
- **Jest**: Unit testing framework
- **React Testing Library**: Testing React components
- **ESLint**: Code linting and formatting

### Design

- **Logo AI**: AI-powered logo generation for brand identity

## Technical Implementation Details

### Backend-for-Frontend (BFF) Architecture

The application implements three BFF endpoints to handle different data requirements:

1. **Tasks Endpoint (`/api/tasks`)**:

   - Manages pre-loaded tasks

2. **Labels Endpoint (`/api/labels`)**:

   - Provides access to pre-defined labels

3. **Colors Endpoint (`/api/colors`)**:
   - Manages color assignment for new labels
   - Implements a color indexing system stored in local storage to prevent color duplication
   - Ensures consistent color distribution across labels

### Performance Optimizations

- **Component Memoization**: Implemented using:
  - `React.memo` for pure components
  - `useCallback` for event handlers
  - `useMemo` for computed values
  - Prevents unnecessary re-renders in complex component trees

### Component Architecture

- Follows a modular component architecture:
  - Atomic design pattern with small, reusable components
  - Composition of larger components from smaller building blocks
  - Encapsulated functionality for better maintainability

### Styling and Theme Consistency

- Utilizes global color declarations for consistent theming
- Implements design tokens through Tailwind CSS configuration
- Ensures consistent styling across all components

### Error Handling and Loading States

Created dedicated pages for different application states:

- Custom 404 Not Found page
- Loading state components with skeleton loaders
- Error boundary implementation with error page

## How to Use

TaskMaster provides an intuitive interface with three priority-based lists to manage your tasks effectively:

![TaskMaster Interface](/public/demo/demo3.png)

### Key Features:

- **Priority Lists**: Organize tasks across three priority levels:

  - 🟢 Low Priority
  - 🟡 Medium Priority
  - 🔴 High Priority

- **Task Management**:

1. **Adding a Task**: Create new tasks with custom titles and descriptions, prority and label
2. **Editing**: Click the edit on any card to edit the task
3. **Labels**: Add labels through the task edit interface
4. **Priority Change**: when you edit the card you can change the priority
5. **Delete**: Click the delete button on any card to remove the task

![TaskMaster Interface](/public/demo/demo1.png)

![TaskMaster Interface](/public/demo/demo2.png)
