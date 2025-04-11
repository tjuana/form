# 🧪 login-form

A simple login form project built with **React**, **Redux Toolkit**, **React Router**, and **Vitest**. The project features a minimalistic form with validation, routing between pages, global state with Redux, and full test coverage. Deployed via **GitHub Pages**.

## ✨ Features

- ✅ Login form with email & password
- ✅ Basic form validation
- ✅ Page routing with React Router v6
- ✅ State management with Redux Toolkit
- ✅ Unit and integration tests with Vitest & Testing Library
- ✅ GitHub Pages deployment

---

## 🔧 Stack

- [React 19](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Router v6.30](https://reactrouter.com/en/main)
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [GitHub Pages](https://pages.github.com/)

---

## 📂 Project Structure

```
src/
├── components/         # Reusable UI components (Input, Button, etc.)
├── pages/              # LoginForm, Dashboard
├── routes/             # AppRoutes (Routing logic)
├── store/              # Redux store and slices
├── tests/              # setupTests and test utilities
├── hooks/              # Reusable hooks
├── sceletons/          # Fallback skeleton for Suspense
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/tjuana/form.git
cd form

# Install dependencies
npm install

# Run locally
npm run dev
```

---

## 🧪 Running Tests

```bash
# Run all tests
npm run test

# Watch mode
npm run test:watch
```

Tests are located alongside components or in `src/routes/__tests__/` and cover:

- AppRoutes
- LoginForm rendering
- Input & Button components
- Dashboard
- User state
- Edge cases (loading, fallback)

---

## 🌍 Deployment

The app is deployed to GitHub Pages:

```bash
npm run deploy
```

Make sure your `vite.config.ts` contains:

```ts
export default defineConfig({
  base: '/form/', // Required for GitHub Pages
  ...
})
```

Check it live at: [https://tjuana.github.io/form](https://tjuana.github.io/form)

---

## 🔑 Demo Credentials

To test the form easily, you can:

- Use the placeholder hints
- Or visit the demo link with credentials prefilled:  
  👉 `https://tjuana.github.io/form/?demo=1`

---

---

## 🧪 Mock Users

You can log in using the following test credentials:

| Email              | Password       | Name        |
|-------------------|----------------|-------------|
| test@example.com  | StrongPass1!   | Test User   |
| test2@example.com | StrongPass2!   | Test User 2 |
| admin@example.com | StrongPass3!   | Admin User  |

You can find them inside `src/mocks/users.ts`.

## 📌 TODOs

- [ ] Add real auth API integration
- [ ] Protect dashboard route
- [ ] Add "Remember me" checkbox
- [ ] Improve mobile UI

---

## 🧠 Author

Made by [@tjuana](https://github.com/tjuana)  
Feel free to ⭐ the repo or contribute!
