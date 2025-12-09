// charts.js - Handle chart visualization using Chart.js

const ChartManager = {
    chart: null,

    // Initialize the chart
    init() {
        const ctx = document.getElementById('category-chart');
        if (!ctx) return;

        this.chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: [],
                datasets: [{
                    label: 'Spending by Category',
                    data: [],
                    backgroundColor: [
                        '#ef4444', // Red
                        '#f59e0b', // Amber
                        '#10b981', // Green
                        '#3b82f6', // Blue
                        '#8b5cf6', // Violet
                        '#ec4899', // Pink
                        '#14b8a6', // Teal
                        '#f97316'  // Orange
                    ],
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            font: {
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return `${label}: $${value.toFixed(2)} (${percentage}%)`;
                            }
                        }
                    }
                }
            }
        });

        this.updateChart();
    },

    // Update chart with current data
    updateChart() {
        if (!this.chart) return;

        const categoryData = TransactionManager.getExpensesByCategory();
        const labels = Object.keys(categoryData);
        const data = Object.values(categoryData);

        this.chart.data.labels = labels;
        this.chart.data.datasets[0].data = data;
        this.chart.update();

        // Show message if no data
        const chartSection = document.querySelector('.charts');
        const existingMessage = chartSection.querySelector('.no-data-message');
        
        if (labels.length === 0) {
            if (!existingMessage) {
                const message = document.createElement('p');
                message.className = 'no-data-message';
                message.style.cssText = 'text-align: center; color: #999; padding: 20px;';
                message.textContent = 'Add some expenses to see your spending breakdown!';
                chartSection.appendChild(message);
            }
        } else {
            if (existingMessage) {
                existingMessage.remove();
            }
        }
    }
};