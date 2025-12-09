// app.js - Main application initialization and event handlers

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Set default date to today
    const dateInput = document.getElementById('date');
    dateInput.valueAsDate = new Date();

    // Initialize UI
    TransactionManager.updateDashboard();
    TransactionManager.renderTransactions();
    ChartManager.init();

    // Set up event listeners
    setupEventListeners();
}

function setupEventListeners() {
    // Transaction form submission
    const form = document.getElementById('transaction-form');
    form.addEventListener('submit', handleFormSubmit);

    // Type selection change (show/hide fields based on income/expense)
    const typeSelect = document.getElementById('type');
    typeSelect.addEventListener('change', handleTypeChange);
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();

    // Get form values
    const type = document.getElementById('type').value;
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;
    const subcategory = document.getElementById('subcategory').value;
    const source = document.getElementById('source').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;

    // Validate
    if (!amount || parseFloat(amount) <= 0) {
        alert('Please enter a valid amount');
        return;
    }

    if (type === 'expense' && !category) {
        alert('Please select a category');
        return;
    }

    if (!date) {
        alert('Please select a date');
        return;
    }

    // Create transaction object
    const transaction = {
        type,
        amount: parseFloat(amount),
        date,
        description
    };

    // Add type-specific fields
    if (type === 'expense') {
        transaction.category = category;
        transaction.subcategory = subcategory;
    } else {
        transaction.source = source || 'Income';
    }

    // Save transaction
    StorageManager.addTransaction(transaction);

    // Update UI
    TransactionManager.updateDashboard();
    TransactionManager.renderTransactions();
    ChartManager.updateChart();

    // Reset form
    e.target.reset();
    document.getElementById('date').valueAsDate = new Date();

    // Show success feedback
    showSuccessMessage('Transaction added successfully!');
}

// Handle type change (income/expense)
function handleTypeChange(e) {
    const type = e.target.value;
    const categoryGroup = document.getElementById('category-group');
    const subcategoryGroup = document.getElementById('subcategory-group');
    const sourceGroup = document.getElementById('source-group');

    if (type === 'expense') {
        categoryGroup.style.display = 'flex';
        subcategoryGroup.style.display = 'flex';
        sourceGroup.style.display = 'none';
        document.getElementById('category').required = true;
        document.getElementById('source').required = false;
    } else {
        categoryGroup.style.display = 'none';
        subcategoryGroup.style.display = 'none';
        sourceGroup.style.display = 'flex';
        document.getElementById('category').required = false;
        document.getElementById('source').required = false;
    }
}

// Show success message (simple feedback)
function showSuccessMessage(message) {
    const existingMessage = document.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    const messageEl = document.createElement('div');
    messageEl.className = 'success-message';
    messageEl.textContent = message;
    messageEl.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;

    document.body.appendChild(messageEl);

    setTimeout(() => {
        messageEl.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => messageEl.remove(), 300);
    }, 2000);
}

// Add CSS animations for success message
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);