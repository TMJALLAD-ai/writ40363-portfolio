# Budget Tracker

**Project Zed: AI-Assisted Web Application**  
WRIT 40363 - Digital Communication & Design Arts  
Fall 2025

## 📊 Project Overview

A personal budget tracking application that helps users monitor their income and expenses with interactive data visualizations. This project demonstrates upskilled web development techniques learned through AI-assisted development, building on foundational skills from Projects 1-3.

**Live Demo:** [GitHub Pages URL]  
**Course Assignment:** [PROJECT ZED: AI-Assisted Web Application](https://tcu-dcda.github.io/40363_2025/student_resources/assignments/PROJECT_Zed_AI_Assisted_Web_App.html)

## ✨ Features

- **Transaction Management**: Add, view, and delete income and expense transactions
- **Real-time Calculations**: Automatic calculation of total income, expenses, and balance
- **Data Visualization**: Interactive charts displaying spending patterns by category
- **Local Storage**: Persistent data storage using browser localStorage API
- **Responsive Design**: Mobile-first design that works across all device sizes
- **Category Filtering**: Organize transactions by customizable categories

## 🛠️ Technologies Used

### Core Technologies
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6+)**: Modular code architecture with multiple files

### Libraries & APIs
- **Chart.js**: Data visualization for expense breakdowns
- **LocalStorage API**: Client-side data persistence

### AI Tools
- **Claude (Anthropic)**: Code generation, debugging, and concept learning
- **GitHub Copilot**: Inline code suggestions and completion

## 🎯 Upskilled Techniques

This project demonstrates growth beyond Projects 1-3 through:

### From Project 1 (HTML/CSS) - Upskilled:
- Advanced CSS Grid layouts for dashboard components
- CSS custom properties (variables) for consistent theming
- Responsive design with multiple breakpoints (mobile, tablet, desktop)
- CSS animations and transitions for interactive feedback

### From Project 2 (JavaScript) - Upskilled:
- Modular JavaScript architecture (separate files for concerns)
- Complex DOM manipulation patterns
- Form validation and error handling
- Data structures for transaction management

### From Project 3 (APIs & Advanced JS) - Upskilled:
- LocalStorage API for persistent data
- Complex state management across components
- Data visualization with Chart.js library
- Async patterns and error handling

### New Techniques (Learned via AI):
- Modern JavaScript modules and separation of concerns
- Chart.js integration and data transformation
- Advanced array methods for data processing
- Accessibility features (ARIA labels, keyboard navigation)

## 📁 Project Structure

```
project4-zed/
├── index.html              # Main HTML structure
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   ├── app.js             # Main application logic
│   ├── charts.js          # Chart.js visualization
│   ├── storage.js         # LocalStorage management
│   └── transactions.js    # Transaction CRUD operations
├── README.md              # This file
├── AI_COLLABORATION_LOG.md # Documentation of AI partnership
└── REFLECTION.md          # Developer reflection (500-750 words)
```

## 🚀 Setup Instructions

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server or build tools required - runs entirely in the browser

### Local Development
1. Clone this repository:
   ```bash
   git clone https://github.com/[your-username]/writ40363-portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd writ40363-portfolio/projects/project4-zed
   ```

3. Open `index.html` in your web browser:
   - Double-click the file, or
   - Use a local server (optional): `python -m http.server 8000`

### Deployment
This project is deployed on GitHub Pages. To deploy your own version:

1. Push code to GitHub repository
2. Go to repository Settings > Pages
3. Select branch and folder to deploy
4. Access at: `https://[username].github.io/[repo-name]/projects/project4-zed/`

## 💡 How to Use

1. **Add a Transaction**:
   - Select transaction type (Income or Expense)
   - Enter amount
   - Choose or create a category
   - Add optional description
   - Click "Add Transaction"

2. **View Your Data**:
   - Dashboard shows total income, expenses, and balance
   - Transaction list displays all entries with details
   - Charts visualize spending by category

3. **Manage Transactions**:
   - Delete individual transactions using the delete button
   - Filter by category or date (if implemented)
   - Data persists across browser sessions

## 📚 Learning Journey

This project represents significant growth in:
- **AI Collaboration**: Learning to ask effective questions and critically evaluate AI suggestions
- **Modular Architecture**: Separating concerns across multiple JavaScript files
- **Data Visualization**: Integrating third-party libraries and transforming data
- **User Experience**: Creating intuitive interfaces with real-time feedback
- **Problem Solving**: Debugging complex state management issues

For detailed documentation of the AI collaboration process, see [`AI_COLLABORATION_LOG.md`](AI_COLLABORATION_LOG.md).

For a deeper reflection on the learning experience, see [`REFLECTION.md`](REFLECTION.md).

## 🙏 Credits

- **Developer**: [Your Name]
- **Course**: WRIT 40363 - Digital Communication & Design Arts (TCU)
- **Instructor**: [Instructor Name]
- **AI Assistants**: Claude (Anthropic), GitHub Copilot
- **Libraries**: Chart.js for data visualization

## 📄 License

This project is part of academic coursework for TCU's WRIT 40363 course.

---

**Project Zed Goal**: Build ambitious web applications with AI as a development partner, focusing on learning and growth over perfection.
