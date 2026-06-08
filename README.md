# Rebel Alliance's Resources

A React + TypeScript web app with two features: a meme generator powered by the [memegen.link](https://api.memegen.link) API, and a Star Wars character viewer/search powered by the [SWAPI](https://swapi.info) API.

---

## Features

### Meme Generator

- Fetches a JSON with all available meme templates from the memegen.link API on load
- Takes top and bottom text input from the user
- Picks a random template and builds the meme URL, rendering the result inline

### Star Wars Character

- Loads a JSON with all characters from the SWAPI on mount and picks one at random for the initial display
- Search input lets you find any character by name (partial match, case-insensitive)
- Displays the first 8 fields of the character's data (name, height, mass, hair color, etc.)

---

## Tech Stack

| Layer       | Tool                                         |
| ----------- | -------------------------------------------- |
| UI Library  | [React 18](https://react.dev)                |
| Language    | [TypeScript](https://www.typescriptlang.org) |
| Build Tool  | [Vite 6](https://vitejs.dev)                 |
| Styling     | [Tailwind CSS v4](https://tailwindcss.com)   |
| HTTP Client | [Axios](https://axios-http.com)              |

---

## Project Structure

```
src/
├── components/
│   ├── Header.tsx                         # Top navigation bar
│   ├── Home.tsx                           # Landing description card
│   ├── MemeGen/
│   │   ├── MemeGenContainer.tsx           # State + API logic
│   │   ├── MemeGen.tsx                    # Presentational component
│   │   └── types.ts                       # Shared types
│   └── StarWarsChar/
│       ├── StarWarsCharContainer.tsx      # State + search logic
│       ├── StarWarsChar.tsx               # Presentational component
│       └── types.ts                       # Shared types
├── App.tsx
├── index.tsx
└── global.css
```

---

## Running Locally

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

---

## External APIs

| API          | Endpoint                             | Usage                          |
| ------------ | ------------------------------------ | ------------------------------ |
| memegen.link | `https://api.memegen.link/templates` | Fetch all meme templates       |
| SWAPI        | `https://swapi.info/api/people`      | Fetch all Star Wars characters |
