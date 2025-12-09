Tools Used:** Which AI assistants did you use? (Claude, ChatGPT, Copilot, etc.)

- I mostly used Github Copilot (Claude Sonnet 4.5), as it felt the most natural to use while following along with my project.

Learning Moments:** 3-5 key things AI taught you

- AI taught me the importance of organizing JavaScript into seperate modules.
- It helped me integrate an external library (chart.js)
- AI also helped me to understand how data flows thorugh the application

Challenges:** What didn't work? When did AI mislead you?

- I felt confused initially about the order of scripts and what need to be loaded first; for example certain JavaScript files depended on each other
- I also had trouble and had to modify my application because the user was forced to select a category for income, when all of the categories were expense related. I tried multiple times with AI to address this, but it did not seem to understand why it the categories did not apply.

Process Evolution:** How did your prompting improve over the project?
Sample Conversations: Include 3-5 significant AI conversations (paste prompts + responses)

- As the project went on, my prompts became much more specific.

1. Prompt: Why did you create a seperate file for storage, transactions,and charts instead of one file?

Response: Great question! This demonstrates "separation of concerns" - a key programming principle. Here's why:

storage.js - Single Responsibility: localStorage operations

If you ever want to switch from localStorage to a database, you only change this file
All storage logic is in one place
transactions.js - Business Logic

Calculations (totals, balances)
DOM rendering
Transaction management
This is the "brain" of your app
charts.js - Visualization

Isolated chart logic
If Chart.js updates or you switch libraries, only this file changes
app.js - Initialization & Coordination

Sets up event listeners
Initializes modules
Handles user interactions
Benefits:

Easier debugging (know exactly where to look)
Code reusability (StorageManager could be used in other projects)
Team collaboration (different people can work on different files)
Easier testing (test each module independently)
Yes, it COULD all be in one file, but it would be harder to maintain as your app grows.

2. Prompt: My chart isn't showing up. I added the Chart.js but nothing pops up

Response: Is Chart.js loading? Open browser console and type Chart - if undefined, the CDN isn't loading

Is the canvas element present? Check if document.getElementById('category-chart') returns an element

Is there data? The chart won't show if there's no data to display

Timing issue? Are you trying to create the chart before the DOM is ready?

Most likely issue: You're calling ChartManager.init() before the DOM loads. Make sure it's inside: document.addEventListener('DOMContentLoaded', function() {
    ChartManager.init();
});

3. Prompt: I want to show a success message when a transaction is added

Response: Here's a clean way to show temporary success notifications:

<!-- ```javascript
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

// Add CSS animations
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
document.head.appendChild(style); -->

This creates a temporary notification that:

Slides in from the right
Stays for 2 seconds
Slides out and removes itself
Uses fixed positioning to stay visible while scrolling
Removes any existing message before showing a new one
Why this approach:

No dependencies (no extra libraries needed)
Accessible (users see clear feedback)
Smooth animations enhance UX
Auto-cleanup (doesn't clutter the DOM)
