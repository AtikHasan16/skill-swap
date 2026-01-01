# ⚡ SkillSwap

> **Exchange Skills, Expand Horizons.**
> A community-driven platform where learning is a collaborative journey, not a transaction.

## 🚀 Overview

**SkillSwap** is a modern web application designed to facilitate the barter of skills and knowledge. Instead of paying for courses, users can "swap" their expertise. If you have a course on "React Native" and want to learn "UI/UX Design", you can find a peer willing to trade!

Built with the latest web technologies, SkillSwap ensures a seamless, secure, and engaging experience for all lifelong learners.

## ✨ Key Features

- **🔄 Skill Exchange System:** Propose and accept course swaps with a unique ownership transfer mechanism.
- **🛡️ Verified Community:** All courses and instructors are vetted to ensure high-quality learning materials.
- **🔐 Secure & Private:** Robust authentication and authorization powered by **NextAuth**.
- **⚡ Real-time Interaction:** Instant updates and status changes for your exchange requests.
- **🎨 Premium UI/UX:** A beautiful, responsive interface built with **Tailwind CSS** and **Framer Motion**.
- **📊 Comprehensive Dashboard:** Manage your listed courses, track requests, and view your learning portfolio.

## 🛠️ Tech Stack

- **Frontend:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) & [DaisyUI 5](https://daisyui.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Database:** [MongoDB](https://www.mongodb.com/) (via [Mongoose](https://mongoosejs.com/))
- **Authentication:** [NextAuth.js](https://next-auth.js.org/) (v5 Beta)
- **Icons:** [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Utilities:** `clsx`, `tailwind-merge`, `date-fns`

## 🏁 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **MongoDB** (Local instance or Atlas connection string)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/AtikHasan16/skill-swap.git
    cd skill-swap
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root directory and add the following:

    ```env
    # Database
    MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/skillswap

    # Authentication
    NEXTAUTH_SECRET=your_super_secret_key
    NEXTAUTH_URL=http://localhost:3000

    # Additional Providers (if connected)
    # GOOGLE_CLIENT_ID=...
    # GOOGLE_CLIENT_SECRET=...
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

5.  **Open in Browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the app in action.

## 📂 Project Structure

```bash
skill-swap/
├── src/
│   ├── app/            # Next.js App Router (Pages & API)
│   ├── components/     # Reusable UI components
│   ├── lib/            # Utilities & DB connection
│   ├── models/         # Mongoose Schema Definitions
│   └── ...
├── public/             # Static assets
└── ...
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1.  Fork the project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
