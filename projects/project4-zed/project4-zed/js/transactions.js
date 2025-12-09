// transactions.js - Manage transactions and update the UI

const TransactionManager = {
    // Calculate total income
    calculateTotalIncome() {
        const transactions = StorageManager.getTransactionsByType('income');
        return transactions.reduce((sum, t) => sum + parseFloat(t.amount), 0);
    },

    // Calculate total expenses
    calculateTotalExpenses() {
        const transactions = StorageManager.getTransactionsByType('expense');
        return transactions.reduce((sum, t) => sum + parseFloat(t.amount), 0);
    },

    // Calculate balance
    calculateBalance() {
        return this.calculateTotalIncome() - this.calculateTotalExpenses();
    },

    // Update dashboard summary cards
    updateDashboard() {
        const totalIncome = this.calculateTotalIncome();
        const totalExpenses = this.calculateTotalExpenses();
        const balance = this.calculateBalance();

        document.getElementById('total-income').textContent = `$${totalIncome.toFixed(2)}`;
        document.getElementById('total-expenses').textContent = `$${totalExpenses.toFixed(2)}`;
        
        const balanceEl = document.getElementById('balance');
        balanceEl.textContent = `$${Math.abs(balance).toFixed(2)}`;
        
        // Update balance color based on positive/negative
        balanceEl.className = 'amount';
        if (balance >= 0) {
            balanceEl.classList.add('income');
        } else {
            balanceEl.classList.add('expense');
        }
    },

    // Create HTML for a single transaction item
    createTransactionElement(transaction) {
        const div = document.createElement('div');
        div.className = 'transaction-item';
        div.dataset.id = transaction.id;

        const amountClass = transaction.type === 'income' ? 'income' : 'expense';
        const amountSign = transaction.type === 'income' ? '+' : '-';

        // Format date
        const date = new Date(transaction.date);
        const formattedDate = date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
        });

        div.innerHTML = `
            <div class="transaction-details">
                <div class="transaction-type">${transaction.type}</div>
                <div class="transaction-category">
                    ${transaction.type === 'expense' ? transaction.category : transaction.source || 'Income'}
                </div>
                ${transaction.subcategory ? `<div class="transaction-subcategory">${transaction.subcategory}</div>` : ''}
                ${transaction.description ? `<div class="transaction-subcategory">${transaction.description}</div>` : ''}
                <div class="transaction-subcategory">${formattedDate}</div>
            </div>
            <div class="transaction-amount ${amountClass}">
                ${amountSign}$${parseFloat(transaction.amount).toFixed(2)}
            </div>
            <div class="transaction-actions">
                <button class="btn-delete" onclick="TransactionManager.deleteTransaction('${transaction.id}')">
                    Delete
                </button>
            </div>
        `;

        return div;
    },

    // Render all transactions to the DOM
    renderTransactions() {
        const container = document.getElementById('transactions-container');
        const transactions = StorageManager.getTransactions();

        // Clear existing transactions
        container.innerHTML = '';

        if (transactions.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: #999; padding: 20px;">No transactions yet. Add your first transaction above!</p>';
            return;
        }

        // Sort by date (newest first)
        transactions.sort((a, b) => new Date(b.date) - new Date(a.date));

        // Render each transaction
        transactions.forEach(transaction => {
            const element = this.createTransactionElement(transaction);
            container.appendChild(element);
        });
    },

    // Delete a transaction
    deleteTransaction(id) {
        if (confirm('Are you sure you want to delete this transaction?')) {
            StorageManager.deleteTransaction(id);
            this.renderTransactions();
            this.updateDashboard();
            ChartManager.updateChart();
        }
    },

    // Get expense breakdown by category
    getExpensesByCategory() {
        const expenses = StorageManager.getTransactionsByType('expense');
        const categoryTotals = {};

        expenses.forEach(expense => {
            const category = expense.category || 'Other';
            categoryTotals[category] = (categoryTotals[category] || 0) + parseFloat(expense.amount);
        });

        return categoryTotals;
    }
};