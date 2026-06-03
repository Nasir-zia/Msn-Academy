# MSN Academy — Digital Learning Platform

MSN Academy is a modern, responsive web platform designed to empower Pakistan's freelancers and developers. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS v4, the platform showcases high-quality educational programs, tracks trainer profiles, manages enrollments, and provides an end-to-end online Certificate Verification System.

---

## 🚀 Key Features

*   **Empowering Landing Page**: A beautifully structured, responsive landing page featuring an engaging hero section, the academy's core vision, and details about its leadership, management, and trainers.
*   **Comprehensive Courses Directory**: Interactive courses listing page with dedicated paths for:
    *   Web Development
    *   Mobile Application Development
    *   .NET Development
    *   Data Analytics
    *   UI/UX Design
*   **Real-time Certificate Verification**: An integrated system allowing students and interns to verify their graduation certificates by selecting their role and entering their unique Certificate ID.
*   **Dynamic Certificate Preview**: On successful verification, users get a gorgeous, printable digital Certificate Card featuring official badges, signatures, and verified status.
*   **Modern Design System**: Fully customized styling powered by Tailwind CSS and DaisyUI, optimized for both desktop and mobile responsiveness.

---

## 🛠️ Technology Stack

*   **Framework**: Next.js 15 (App Router)
*   **Library**: React 19
*   **Language**: TypeScript
*   **Styling**: Tailwind CSS v4 & DaisyUI v5
*   **HTTP Client**: Axios (for verifying certificates with the verifier API)
*   **Icons**: React Icons (`react-icons`)

---

## 📁 Project Directory Structure

```text
msn-academy/
├── public/                       # Static assets (logos, screenshots, images)
├── src/
│   ├── app/                      # Next.js App Router routes
│   │   ├── certificate/          # Certificate verification route
│   │   ├── component/            # Reusable UI components
│   │   │   ├── certificate-ui/   # CertificateForm, CertificateCard, ErrorMessage
│   │   │   ├── Header-section/   # Subsections of the homepage (Hero, Leader, Teams)
│   │   │   └── footer/           # Footer component
│   │   ├── contact/              # Contact Us page
│   │   ├── course/               # Courses listings and sub-tracks
│   │   ├── globals.css           # Global Tailwind and base styles
│   │   ├── layout.tsx            # Global layout configuration
│   │   └── page.tsx              # Main entry point (Landing Page)
│   ├── enrollnavbar/             # Specialized navigation bar for enrollments
│   ├── lib/                      # Base libraries and API clients (Axios instance)
│   ├── style/                    # Custom modular CSS styles
│   └── types/                    # TypeScript interfaces & types
├── package.json                  # Project dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── next.config.ts                # Next.js build and configuration settings
```

---

## ⚙️ Setup and Installation

### Prerequisites

*   **Node.js**: `v20.0.0` or higher
*   **npm** or **yarn**

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd msn-academy
```

### 2. Install Dependencies

Install the project dependencies using npm:

```bash
npm install
```

### 3. Run the Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application in action.

### 4. Build for Production

Generate an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

---

## 🔗 Certificate API Integration

The Certificate Verification System connects with the MSN Academy backend API.

*   **Base URL**: `https://msn-certificate-application.vercel.app/api`
*   **Endpoint**: `/certificate/getbycode/{code}?role={role}`
*   **Supported Roles**: `student` | `intern` | `na`

You can customize the API connection in [src/lib/api.ts](file:///d:/Msn%20Academy/Msn-Academy/src/lib/api.ts).

---

## 📝 License

This project is licensed under the ISC License. Feel free to use and build upon this platform.
