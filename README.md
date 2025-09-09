# TB Product - Learning Management System (LMS)

A modern, full-stack Learning Management System built with Next.js 15, TypeScript, and Tailwind CSS. This platform provides role-based access for students, mentors, and administrators to manage courses, track progress, and facilitate learning.

## 🚀 Tech Stack

- **Frontend**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: ---
- **Forms**: React Hook Form with Zod validation
- **HTTP Client**: Axios
- **UI Components**: Radix UI + Custom Components
- **Database**: Prisma ORM
- **Authentication**: Custom JWT-based auth

## 📁 Project Structure

### `/app` - Next.js App Router
The main application directory following Next.js 15 App Router conventions.

#### `/app/(auth)` - Authentication Routes
- **`login/page.tsx`** - User login page with form validation
- **`register/page.tsx`** - User registration page for new accounts

#### `/app/(dashboard)` - Protected Dashboard Routes
- **`layout.tsx`** - Dashboard layout wrapper with authentication checks
- **`admin/page.tsx`** - Admin dashboard for system management
- **`companies/page.tsx`** - Company management interface
- **`mentor/page.tsx`** - Mentor dashboard for course management
- **`student/page.tsx`** - Student dashboard for course access and progress

#### `/app/api` - API Routes
- **`auth/route.ts`** - Authentication endpoints (login, register, logout)
- **`courses/route.ts`** - Course management API endpoints
- **`users/route.ts`** - User management API endpoints

### `/components` - Reusable UI Components

#### `/components/common` - Shared Components
- **`EmptyState.tsx`** - Empty state component for when no data is available
- **`Loader.tsx`** - Loading spinner component
- **`RoleBadge.tsx`** - User role display component

#### `/components/forms` - Form Components
- Reusable form components for consistent UI across the application

#### `/components/layout` - Layout Components
- **`DashboardShell.tsx`** - Main dashboard layout wrapper
- **`Sidebar.tsx`** - Navigation sidebar component
- **`Topbar.tsx`** - Top navigation bar component

#### `/components/ui` - UI Component Library
Complete set of reusable UI components built with Radix UI and Tailwind CSS:
- Form controls (Button, Input, Select, Checkbox, etc.)
- Layout components (Card, Sheet, Dialog, etc.)
- Data display (Table, Badge, Avatar, etc.)
- Navigation (Breadcrumb, Pagination, etc.)
- Feedback (Alert, Toast, Progress, etc.)

### `/hooks` - Custom React Hooks
- **`use-mobile.ts`** - Hook for detecting mobile devices
- **`useAuth.ts`** - Authentication state management hook
- **`useRole.ts`** - User role management hook

### `/lib` - Utility Libraries
- **`axios.ts`** - Axios configuration with interceptors
- **`utils.ts`** - Common utility functions and helpers

### `/services` - API Service Layer
- **`auth.service.ts`** - Authentication API calls
- **`course.service.ts`** - Course management API calls
- **`user.service.ts`** - User management API calls

### `/store` - State Management
- **`auth.store.ts`** - Global authentication state using Zustand
- **`ui.store.ts`** - UI state management (modals, themes, etc.)

### `/types` - TypeScript Type Definitions
- **`api.ts`** - API response and request types
- **`course.ts`** - Course-related type definitions
- **`user.ts`** - User-related type definitions

### `/prisma` - Database Schema
- **`schema.prisma`** - Database schema definition using Prisma ORM

### `/tests` - Test Files
- Test files and testing utilities (currently contains `.gitkeep`)

## 🎯 Key Features

### Role-Based Access Control
- **Students**: Access to enrolled courses, progress tracking, assignments
- **Mentors**: Course creation, student management, progress monitoring
- **Admins**: System-wide management, user administration, analytics

### Authentication System
- JWT-based authentication
- Role-based route protection
- Secure login/logout functionality
- User registration with validation

### Course Management
- Course creation and editing
- Instructor assignment
- Course categorization and levels
- Progress tracking

### Modern UI/UX
- Responsive design with Tailwind CSS
- Accessible components with Radix UI
- Dark/light mode support
- Mobile-first approach

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Database (PostgreSQL recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TB-Product
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   Configure your environment variables:
   - Database connection string
   - JWT secret key
   - API base URL

4. **Database Setup**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- **`npm run dev`** - Start development server with Turbopack
- **`npm run build`** - Build the application for production
- **`npm run start`** - Start production server
- **`npm run lint`** - Run ESLint for code quality

## 🏗️ Architecture

### Frontend Architecture
- **Next.js App Router**: File-based routing with server and client components
- **TypeScript**: Type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Zustand**: Lightweight state management
- **React Hook Form**: Form handling with validation

### Backend Architecture
- **Next.js API Routes**: Serverless API endpoints
- **Prisma ORM**: Type-safe database access
- **JWT Authentication**: Secure token-based authentication
- **Axios**: HTTP client with interceptors

## 🔐 Security Features

- JWT-based authentication
- Role-based access control
- Protected API routes
- Input validation with Zod
- CSRF protection
- Secure password handling

## 🎨 UI/UX Features

- Responsive design
- Accessible components
- Consistent design system
- Loading states and error handling
- Empty states for better UX

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

The application is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS
- DigitalOcean

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions, please open an issue in the repository or contact the development team.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**