# Budget Tracker App - AI Pair Programming Project

## Project Overview
A web-based budgeting application to track income, expenses, and visualize spending patterns with detailed categorization.

## Features

### Core Features (MVP)

#### 1. Income & Expense Tracking
- Add income entries (source, amount, date)
- Add expense entries with **two-level categorization**:
  - **Main Category** (Food, Transport, Entertainment, Bills, Shopping, Healthcare, etc.)
  - **Subcategory/Vendor** (e.g., Food > Chipotle, Food > Starbucks, Transport > Uber)
- Edit and delete transactions
- Store data in `localStorage`

#### 2. Budget Categories
- Pre-set main categories
- Set monthly budget limits per main category
- Track spending by both category AND subcategory
- Visual indicator when approaching/exceeding limits

#### 3. Data Visualization
- **Pie Chart**: Expense breakdown by main category
- **Nested/Drill-down Chart**: Click a category to see subcategory breakdown
- **Bar Chart**: Monthly spending comparison (by category)
- **Line Chart**: Spending trends over time
- **Vendor Analysis**: See top subcategories (e.g., "You spent $120 at Chipotle this month")

#### 4. Summary Dashboard
- Total income vs total expenses
- Current balance
- This month's spending
- Category-wise breakdown with subcategory details
- Top 5 vendors/subcategories by spending

### Nice-to-Have Features
- Filter transactions by date range, category, or subcategory
- Export data as CSV/JSON
- Dark mode toggle
- Search functionality (search by vendor/subcategory)
- Recurring transactions
- Custom category creation

## Technical Stack
- HTML5/CSS3 (responsive design)
- Vanilla JavaScript (ES6+)
- localStorage for data persistence
- Chart.js for visualizations (with drill-down capability)

## Data Structure (Draft)

### Transaction Object
```javascript
{
  id: "unique-id",
  type: "expense" | "income",
  amount: 15.99,
  category: "Food",
  subcategory: "Chipotle", // vendor/specific place
  description: "Lunch burrito bowl",
  date: "2025-11-18",
  timestamp: 1700323200000
}
```

### Budget Object
```javascript
{
  category: "Food",
  monthlyLimit: 400,
  subcategoryLimits: {
    "Chipotle": 50,
    "Starbucks": 30
  }
}
```

## Development Phases

### Phase 1: Basic Structure
- HTML layout
- CSS styling and responsive design
- Basic JavaScript setup

### Phase 2: Core Functionality
- Add/edit/delete transactions
- Category and subcategory selection
- localStorage integration

### Phase 3: Calculations & Summary
- Calculate totals by category/subcategory
- Display summary dashboard
- Budget limit tracking

### Phase 4: Visualizations
- Implement Chart.js
- Create pie, bar, and line charts
- Add drill-down functionality for subcategories

### Phase 5: Polish & Features
- Filtering and search
- Export functionality
- Additional nice-to-have features

## Next Steps
1. Create initial file structure
2. Build HTML form for adding transactions with category/subcategory inputs
3. Implement localStorage data management