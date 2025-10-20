# React Practice Projects

A collection of React practice projects built while learning state management, hooks, and React fundamentals from Hitesh Chaudhary's React series in 2024.

## About This Repository

This repository contains multiple mini-projects I built to solidify my understanding of React concepts, including Context API, Redux, local storage integration, and component composition. Each project focuses on specific React concepts and best practices.

## Learning Source

These projects were built following **Hitesh Chaudhary's** comprehensive React tutorial series. His teaching approach helped me understand not just the "how" but also the "why" behind React patterns and state management solutions.

## Projects Included

### 1. Todo Application
A fully functional todo app with persistent data storage.

**Features:**
- Add, edit, and delete todos
- Mark todos as complete/incomplete
- Local storage integration for data persistence
- Clean and intuitive UI

**Concepts Learned:**
- `useState` and `useEffect` hooks
- Working with browser's local storage
- Array manipulation methods (map, filter)
- Controlled components

### 2. Theme Changer
A theme switcher application demonstrating dynamic styling.

**Features:**
- Toggle between light and dark themes
- Theme persistence across page reloads
- Smooth theme transitions

**Concepts Learned:**
- Context API for global state management
- `useContext` hook
- Custom hooks creation
- CSS variable manipulation
- Theme provider pattern

### 3. Currency Converter
A real-time currency conversion application.

**Features:**
- Convert between multiple currencies
- Real-time exchange rates
- Swap currency functionality
- Responsive design

**Concepts Learned:**
- API integration and data fetching
- Custom hooks for reusable logic
- Handling asynchronous operations
- Form handling and validation
- Component reusability

## Tech Stack

- **Framework**: Next.js
- **Language**: JavaScript/React
- **State Management**: Context API, Redux
- **Styling**: CSS/Tailwind CSS
- **Storage**: Browser Local Storage

## Key Concepts Mastered

### State Management
- **Context API**: Understanding when and how to use Context for global state
- **Redux**: Learning Redux fundamentals, actions, reducers, and store configuration
- **Local State**: Managing component-level state with `useState`

### React Hooks
- `useState` - Managing component state
- `useEffect` - Handling side effects and lifecycle methods
- `useContext` - Consuming context values
- `useReducer` - Complex state logic
- Custom Hooks - Creating reusable logic

### Best Practices
- Component composition and reusability
- Separation of concerns
- Custom hooks for logic abstraction
- Proper state lifting
- Performance optimization

## Installation & Setup

1. Clone the repository:
```bash
git clone <your-repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── todo-app/
│   ├── components/
│   ├── context/
│   └── pages/
├── theme-changer/
│   ├── components/
│   ├── context/
│   └── pages/
├── currency-converter/
│   ├── components/
│   ├── hooks/
│   └── pages/
└── README.md
```

## What I Learned

### Context API vs Redux
- When to use Context API for simpler state management
- When Redux is necessary for complex applications
- Trade-offs between different state management solutions

### Working with Local Storage
- Persisting data in the browser
- Handling JSON serialization/deserialization
- Synchronizing state with storage

### Custom Hooks
- Abstracting reusable logic
- Making components cleaner and more maintainable
- Following React hooks rules

### Next.js Features
- File-based routing
- Server-side rendering concepts
- API routes
- Optimized production builds

## Challenges Faced & Solutions

1. **Local Storage Sync Issues**: Learned to properly sync state with local storage using useEffect
2. **Context Re-rendering**: Understood context optimization and when to split contexts
3. **Redux Complexity**: Grasped the Redux flow through hands-on practice
4. **Custom Hook Patterns**: Mastered creating reusable and testable custom hooks

## Future Improvements

- Add TypeScript for type safety
- Implement unit and integration tests
- Add more complex Redux examples
- Integrate backend APIs
- Add user authentication

## Acknowledgments

Special thanks to **Hitesh Chaudhary** for creating an excellent React tutorial series that emphasizes practical learning and real-world applications. His teaching methodology made complex concepts accessible and enjoyable to learn.

## Resources

- [Hitesh Chaudhary's YouTube Channel](https://www.youtube.com/@chaiaurcode)
- [React Documentation](https://react.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)

## License

This project is open source and available for learning purposes.

---

*Built with ❤️ while learning React*