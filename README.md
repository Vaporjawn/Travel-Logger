# Full Stack Travel Logger 🌍

A beautiful, modern full-stack application to track and visualize your travel adventures on an interactive map. Built with React, TypeScript, Material UI, Node.js, Express, and MongoDB.

<!-- Technology Stack Badges -->
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Material UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

<!-- Project Status & Community Badges -->
[![GitHub stars](https://img.shields.io/github/stars/Vaporjawn/Travel-Logger?style=social)](https://github.com/Vaporjawn/Travel-Logger/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Vaporjawn/Travel-Logger?style=social)](https://github.com/Vaporjawn/Travel-Logger/network/members)
[![GitHub issues](https://img.shields.io/github/issues/Vaporjawn/Travel-Logger)](https://github.com/Vaporjawn/Travel-Logger/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/Vaporjawn/Travel-Logger)](https://github.com/Vaporjawn/Travel-Logger/pulls)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![GitHub Sponsors](https://img.shields.io/github/sponsors/Vaporjawn?style=social)](https://github.com/sponsors/Vaporjawn)

## 📚 Documentation

- 📖 **[Getting Started Guide](./GETTING_STARTED.md)** - Step-by-step setup for new users
- 📋 **[Quick Reference](./QUICK_REFERENCE.md)** - Common commands and troubleshooting
- � **[Troubleshooting Guide](./TROUBLESHOOTING.md)** - Detailed solutions to common issues
- �🚀 **[Deployment Guide](./DEPLOYMENT.md)** - Production deployment checklist
- 📝 **[Changelog](./CHANGELOG.md)** - Version history and updates
- ✅ **[Completion Summary](./COMPLETION_SUMMARY.md)** - Project overview and accomplishments

## ✨ Features

### Frontend
- 🗺️ **Interactive Mapbox Integration** - Smooth, responsive map experience
- 🎨 **Material UI Design System** - Modern, accessible, dark-themed interface
- ⚡ **TypeScript & Vite** - Type-safe, lightning-fast development
- 📱 **Fully Responsive** - Beautiful on desktop, tablet, and mobile
- 🔍 **Geolocation Support** - Find your current location instantly
- ✨ **Smooth Animations** - Polished UI transitions and interactions

### Backend
- 🚀 **Express.js REST API** - Fast, scalable server
- 🔒 **API Key Authentication** - Secure endpoint protection
- 📊 **MongoDB Database** - Flexible, scalable data storage
- 🛡️ **Rate Limiting** - Protection against abuse
- 🔐 **Helmet & CORS** - Security best practices
- ⚠️ **Error Handling** - Comprehensive error management

## 🚀 Quick Start

**New to the project?** Check out the [📖 Getting Started Guide](./GETTING_STARTED.md) for a detailed, step-by-step setup tutorial.

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Mapbox account and API token ([Get one free](https://www.mapbox.com/))

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Vaporjawn/Travel-Logger.git
cd Travel-Logger
```

2. **Set up the server**
```bash
cd server
npm install
cp .env.example .env
# Edit .env and add your MongoDB URL and API key
npm run dev
```

3. **Set up the client (in a new terminal)**
```bash
cd client
npm install
cp .env.example .env
# Edit .env and add your Mapbox token
npm run dev
```

4. **Open your browser**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:1337

## 📸 Screenshots

### Main Map View
- Interactive map with travel log markers
- Dark theme for comfortable viewing
- Responsive navigation controls

### Add Travel Log
- Double-click to add new entries
- Beautiful form with validation
- Rating system (0-10 stars)
- Image URL support

### View Details
- Click markers to see full details
- Visit dates and ratings
- Personal comments and descriptions

## 🏗️ Project Structure

```
Travel-Logger/
├── client/                 # React + TypeScript + Vite frontend
│   ├── src/
│   │   ├── api/           # API client functions
│   │   ├── components/    # React components
│   │   ├── types/         # TypeScript definitions
│   │   ├── theme.ts       # Material UI theme
│   │   ├── App.tsx        # Main app component
│   │   └── main.tsx       # Entry point
│   ├── public/
│   └── package.json
│
├── server/                # Node.js + Express backend
│   ├── src/
│   │   ├── api/          # API routes
│   │   ├── models/       # Mongoose models
│   │   ├── middlewares.js
│   │   └── index.js      # Server entry point
│   └── package.json
│
└── README.md
```

## 🎯 Usage

### Adding a Travel Log

1. **Double-click** anywhere on the map
2. Fill in the form:
   - Title (required)
   - Visit date (required)
   - API key (required for security)
   - Description (optional)
   - Comments (optional)
   - Image URL (optional)
   - Rating 0-10 (optional)
3. Click "Create Entry"

### Viewing Logs

- **Click any marker** to view details
- **Use navigation controls** to zoom and pan
- **Click the location button** to center on your position

## 🔧 Configuration

### Server Environment Variables (`.env`)

```env
NODE_ENV=development
PORT=1337
DATABASE_URL=mongodb://localhost:27017/travel-log
CORS_ORIGIN=http://localhost:5173
API_KEY=your_secret_api_key_here
```

### Client Environment Variables (`.env`)

```env
VITE_MAPBOX_TOKEN=your_mapbox_token_here
VITE_API_URL=http://localhost:1337
```

## 🎨 Technology Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Material UI (MUI)** - Component library
- **Mapbox GL JS** - Interactive maps
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Axios** - HTTP client
- **date-fns** - Date utilities

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP logging
- **express-rate-limit** - Rate limiting

## 📝 API Endpoints

### GET `/api/logs`
Get all travel log entries
- No authentication required
- Returns array of log entries

### POST `/api/logs`
Create a new travel log entry
- Requires `X-API-KEY` header
- Rate limited (1 request per 10 seconds)
- Request body:
```json
{
  "title": "Paris, France",
  "description": "Amazing city!",
  "comments": "Loved the Eiffel Tower",
  "image": "https://example.com/image.jpg",
  "rating": 9,
  "latitude": 48.8566,
  "longitude": 2.3522,
  "visitDate": "2024-06-15"
}
```

## 🛠️ Development

### Running Tests
```bash
# Server tests
cd server
npm test

# Client tests
cd client
npm test
```

### Building for Production
```bash
# Build client
cd client
npm run build

# Start server in production mode
cd server
NODE_ENV=production npm start
```

## 🚢 Deployment

### Client Deployment (Vercel/Netlify)
1. Build the client: `cd client && npm run build`
2. Deploy the `dist` folder
3. Set environment variables in your hosting platform

### Server Deployment (Heroku/Railway/Render)
1. Set environment variables
2. Deploy from the `server` directory
3. Ensure MongoDB is accessible

## 🤝 Contributing

We welcome contributions from developers of all skill levels! Travel Logger is a community-driven project that thrives on your input and contributions.

### 🌟 Ways to Contribute

- 🐛 **Report bugs** - Help us identify and fix issues
- ✨ **Suggest features** - Share ideas for new functionality
- 📝 **Improve documentation** - Help others get started
- 🔧 **Write code** - Implement new features or fix bugs
- 🎨 **Design & UX** - Improve the user experience
- 🧪 **Testing** - Help ensure quality and reliability
- 💬 **Community support** - Help other users in discussions

### 🚀 Quick Start for Contributors

1. **Check out our [Contributing Guide](.github/CONTRIBUTING.md)** - Comprehensive guide to get you started
2. **Browse [good first issues](https://github.com/Vaporjawn/Travel-Logger/labels/good%20first%20issue)** - Perfect for newcomers
3. **Join our [Discussions](https://github.com/Vaporjawn/Travel-Logger/discussions)** - Ask questions and share ideas
4. **Read the [Code of Conduct](.github/CODE_OF_CONDUCT.md)** - Our community guidelines

### 📋 Contribution Process

1. 🍴 **Fork** the repository and clone it locally
2. 🌿 **Create a branch** for your feature (`git checkout -b feature/AmazingFeature`)
3. 🔨 **Make your changes** and write tests
4. ✅ **Test thoroughly** and ensure code quality
5. 📝 **Document** your changes and update relevant docs
6. 💾 **Commit** with clear, descriptive messages
7. 📤 **Push** to your fork (`git push origin feature/AmazingFeature`)
8. 🔀 **Open a Pull Request** with a detailed description

### 💡 Need Ideas?

Check out our [Roadmap](.github/ROADMAP.md) to see what's planned and find something that interests you!

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Community & Support

### 💬 Join the Community

- **[💭 Discussions](https://github.com/Vaporjawn/Travel-Logger/discussions)** - Ask questions, share ideas, get help
- **[📋 Issues](https://github.com/Vaporjawn/Travel-Logger/issues)** - Report bugs, request features
- **[🔀 Pull Requests](https://github.com/Vaporjawn/Travel-Logger/pulls)** - Contribute code and improvements
- **[📖 Documentation](https://github.com/Vaporjawn/Travel-Logger/tree/master/.github)** - Guides, roadmap, and governance

### 🆘 Get Help

- 📚 **[Getting Started Guide](./GETTING_STARTED.md)** - Step-by-step setup
- 🔧 **[Troubleshooting](./TROUBLESHOOTING.md)** - Common issues and solutions
- 💬 **[Community Support](https://github.com/Vaporjawn/Travel-Logger/discussions/categories/q-a)** - Get help from other users
- 📧 **Direct Contact** - victor.williams.dev@gmail.com

### 💝 Support the Project

If Travel Logger has been helpful to you, consider supporting its development:

- ⭐ **[Star the repository](https://github.com/Vaporjawn/Travel-Logger/stargazers)** on GitHub
- 💖 **[Sponsor the project](https://github.com/sponsors/Vaporjawn)** to help with hosting and development
- � **Share it** with friends and on social media
- 🤝 **[Contribute](https://github.com/Vaporjawn/Travel-Logger/blob/master/.github/CONTRIBUTING.md)** code, documentation, or ideas
- 💬 **Help others** in discussions and issues

## �🙏 Acknowledgments

- 🗺️ **Mapbox** for the amazing mapping platform and excellent developer experience
- 🎨 **Material UI team** for the exceptional React component library
- ⚛️ **React and Node.js communities** for creating incredible open-source ecosystems
- 🌍 **Our contributors and community members** who help make Travel Logger better every day
- 🚀 **Open source maintainers** everywhere who inspire us to build better software

## 📧 Contact & Links

**Victor Williams**
- 🐙 GitHub: [@Vaporjawn](https://github.com/Vaporjawn)
- 📧 Email: victor.williams.dev@gmail.com
- 💼 Project: [Travel Logger](https://github.com/Vaporjawn/Travel-Logger)

### 🔗 Important Links

- **[🗺️ Roadmap](.github/ROADMAP.md)** - See what's planned for the future
- **[📋 Contributing Guide](.github/CONTRIBUTING.md)** - How to contribute to the project
- **[🛡️ Security Policy](.github/SECURITY.md)** - Report security vulnerabilities
- **[⚖️ License](./LICENSE)** - MIT License
- **[📜 Code of Conduct](.github/CODE_OF_CONDUCT.md)** - Community guidelines
- **[🏛️ Governance](.github/GOVERNANCE.md)** - Project governance and decision making

---

**Happy Traveling! 🌍✈️**