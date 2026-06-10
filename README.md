# ExamFront - Online Quiz Platform Frontend

A modern Angular-based frontend application for conducting online quizzes and examinations. This application provides separate interfaces for administrators to manage quizzes and users to take exams.

## 🚀 Features

### Admin Features
- **Dashboard**: Administrative overview and statistics
- **Quiz Management**: Create, update, and delete quizzes
- **Category Management**: Organize quizzes by categories
- **Question Management**: Add and manage quiz questions
- **User Management**: Monitor user activities

### User Features
- **User Dashboard**: Personal quiz overview
- **Quiz Taking**: Interactive quiz interface with instructions
- **Profile Management**: User profile and settings
- **Results**: View quiz results and performance

### General Features
- **Authentication**: Secure login and signup system
- **Responsive Design**: Works on desktop and mobile devices
- **Rich Text Editor**: CKEditor integration for content creation
- **Material Design**: Modern UI with Angular Material

## 🛠️ Technology Stack

- **Framework**: Angular 11.2.11
- **UI Library**: Angular Material 11.2.13
- **Rich Text Editor**: CKEditor 5
- **Styling**: Bootstrap Grid + Custom CSS
- **Notifications**: SweetAlert2
- **Testing**: Jasmine & Karma
- **E2E Testing**: Protractor

## 📋 Prerequisites

- Node.js (version 12 or higher)
- npm (Node Package Manager)
- Angular CLI 11.2.10

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd examfront
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable components
│   │   ├── navbar/         # Navigation bar
│   │   └── footer/         # Footer component
│   ├── pages/              # Page components
│   │   ├── admin/          # Admin panel pages
│   │   │   ├── dashboard/
│   │   │   ├── add-quiz/
│   │   │   ├── add-question/
│   │   │   ├── add-category/
│   │   │   ├── view-quizzes/
│   │   │   ├── view-categories/
│   │   │   ├── view-quiz-questions/
│   │   │   ├── update-quiz/
│   │   │   ├── sidebar/
│   │   │   └── welcome/
│   │   ├── user/           # User interface pages
│   │   │   ├── user-dashboard/
│   │   │   ├── load-quiz/
│   │   │   ├── instructions/
│   │   │   ├── start/
│   │   │   └── sidebar/
│   │   ├── home/           # Landing page
│   │   ├── login/          # Authentication
│   │   ├── signup/         # User registration
│   │   └── profile/        # User profile
│   ├── services/           # Angular services
│   └── app-routing.module.ts
├── assets/                 # Static assets
│   ├── logo.png
│   ├── exam.png
│   └── exam1.png
└── environments/           # Environment configurations
```

## 🚀 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run lint` - Run linting
- `npm run e2e` - Run end-to-end tests

## 🔨 Build

### Development Build
```bash
ng build
```

### Production Build
```bash
ng build --prod
```

Build artifacts will be stored in the `dist/` directory.

## 🧪 Testing

### Unit Tests
```bash
ng test
```

### End-to-End Tests
```bash
ng e2e
```

## 🎨 UI Components

The application uses Angular Material components for consistent design:
- Material buttons, forms, and navigation
- Responsive grid layout with Bootstrap
- Custom styling for quiz-specific components
- SweetAlert2 for user notifications

## 🔐 Authentication Flow

1. Users can register via the signup page
2. Login authentication for both admin and regular users
3. Role-based routing and access control
4. Profile management for authenticated users

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the GitHub repository
- Check the Angular CLI documentation: [Angular CLI Overview](https://angular.io/cli)

## 🔄 Version History

- **v0.0.0** - Initial release with basic quiz functionality

---

**Note**: This is the frontend application. Make sure to set up the corresponding backend API for full functionality.