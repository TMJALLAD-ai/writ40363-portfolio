// storage.js - Handle all localStorage operations

const StorageManager = {
    STORAGE_KEY: 'budgetTrackerTransactions',

    // Get all transactions from localStorage
    getTransactions() {
        const data = localStorage.getItem(this.STORAGE_KEY);
        return data ? JSON.parse(data) : [];
    },

    // Save transactions to localStorage
    saveTransactions(transactions) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(transactions));
    },

    // Add a new transaction
    addTransaction(transaction) {
        const transactions = this.getTransactions();
        transaction.id = Date.now().toString(); // Simple unique ID
        transactions.push(transaction);
        this.saveTransactions(transactions);
        return transaction;
    },

    // Delete a transaction by ID
    deleteTransaction(id) {
        const transactions = this.getTransactions();
        const filtered = transactions.filter(t => t.id !== id);
        this.saveTransactions(filtered);
        return filtered;
    },

    // Clear all transactions (for testing/reset)
    clearAll() {
        localStorage.removeItem(this.STORAGE_KEY);
    },

    // Get transactions within a date range
    getTransactionsByDateRange(startDate, endDate) {
        const transactions = this.getTransactions();
        return transactions.filter(t => {
            const tDate = new Date(t.date);
            return tDate >= new Date(startDate) && tDate <= new Date(endDate);
        });
    },

    // Get transactions by type (income or expense)
    getTransactionsByType(type) {
        const transactions = this.getTransactions();
        return transactions.filter(t => t.type === type);
    }
};