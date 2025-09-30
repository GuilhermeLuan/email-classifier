// Main Application Entry Point
import { initializeEmailAnalysisHandler } from './services/domHandler.js';

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeEmailAnalysisHandler();
});
