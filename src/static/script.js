// Main Application Entry Point
import {copyToClipboard, initializeEmailAnalysisHandler} from './services/domHandler.js';

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeEmailAnalysisHandler();
    copyToClipboard()
});
