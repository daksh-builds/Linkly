# Linkly — URL Shortener Service

> A full-stack URL shortener built with Node.js, Express, and MongoDB — shorten links, track clicks, and manage URLs with user authentication.

---

## Features

| Feature | Description |
|--------|-------------|
| Shorten URLs | Convert long URLs into clean, shareable short links |
| Redirect | Short links instantly redirect to the original URL |
| Click Analytics | Track how many times each link has been clicked |
| Authentication | Secure signup & login with JWT |
| User Dashboard | Each user manages only their own links |
| Secure Backend | Protected routes and safe architecture |

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB + Mongoose
- **Auth:** JSON Web Tokens (JWT)
- **Config:** dotenv

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/daksh-builds/Linkly.git
cd Linkly
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
PORT=8001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### 4. Start the server

```bash
npm start
```

The server will run at `http://localhost:8001`

---

## API Endpoints

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/signup` | Register a new user |
| `POST` | `/api/auth/login` | Login and receive a JWT token |

### URLs
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/url` | Create a new short URL |
| `GET` | `/:shortId` | Redirect to the original URL |
| `GET` | `/api/url/analytics/:shortId` | Get click analytics for a URL |

---

## Project Structure

```
Linkly/
├── controllers/       # Route logic
├── models/            # Mongoose schemas
├── routes/            # Express routes
├── middlewares/       # Auth middleware
├── .env               # Environment variables (not committed)
├── index.js           # Entry point
└── package.json
```

---

## Contributing

Contributions are welcome. Feel free to open an issue or submit a pull request.

1. Fork the repo
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## License

This project is licensed under the [MIT License](LICENSE).

---

