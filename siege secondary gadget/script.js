// Global state
let currentSide = 'Attackers';
let selectedGadget = null;

// DOM elements
const attackersBtn = document.getElementById('attackers-btn');
const defendersBtn = document.getElementById('defenders-btn');
const matrixTitle = document.getElementById('matrix-title');
const gadgetHeaders = document.getElementById('gadget-headers');
const operatorRows = document.getElementById('operator-rows');
const summaryStats = document.getElementById('summary-stats');
const resultsCounter = document.getElementById('results-counter');
const resultsText = document.getElementById('results-text');
const clearFilterBtn = document.getElementById('clear-filter');

// Utility functions
function hasGadget(operator, gadgetName) {
    return operator.secondaryGadgets.includes(gadgetName);
}

function getRelevantGadgets(operators) {
    return secondaryGadgets.filter(gadget => 
        operators.some(op => hasGadget(op, gadget.name))
    );
}

function getCurrentOperators() {
    return currentSide === 'Attackers' ? attackers : defenders;
}

function getFilteredOperators() {
    const operators = getCurrentOperators();
    return selectedGadget 
        ? operators.filter(op => hasGadget(op, selectedGadget))
        : operators;
}

// Create SVG icons
function createCheckIcon() {
    return `
        <svg class="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
    `;
}

function createXIcon() {
    return `
        <svg class="x-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
    `;
}

// Render functions
function renderGadgetHeaders() {
    const operators = getCurrentOperators();
    const relevantGadgets = getRelevantGadgets(operators);
    
    gadgetHeaders.innerHTML = '';
    
    relevantGadgets.forEach(gadget => {
        const headerDiv = document.createElement('div');
        headerDiv.className = 'gadget-header';
        
        const button = document.createElement('button');
        button.className = `gadget-btn ${selectedGadget === gadget.name ? 'selected' : ''}`;
        button.title = gadget.name;
        button.onclick = () => toggleGadgetFilter(gadget.name);
        
        const img = document.createElement('img');
        img.src = gadget.image;
        img.alt = gadget.name;
        img.onerror = () => {
            img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMzc0MTUxIiByeD0iNCIvPgo8dGV4dCB4PSIyMCIgeT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Pz88L3RleHQ+Cjwvc3ZnPgo=';
        };
        
        button.appendChild(img);
        headerDiv.appendChild(button);
        gadgetHeaders.appendChild(headerDiv);
    });
}

function renderOperatorRows() {
    const operators = getFilteredOperators();
    const allOperators = getCurrentOperators();
    const relevantGadgets = getRelevantGadgets(allOperators);
    
    operatorRows.innerHTML = '';
    
    operators.forEach(operator => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'operator-row';
        
        // Operator cell
        const operatorCell = document.createElement('div');
        operatorCell.className = 'operator-cell';
        
        const operatorImg = document.createElement('img');
        operatorImg.src = operator.image;
        operatorImg.alt = operator.name;
        operatorImg.title = operator.name;
        operatorImg.onerror = () => {
            operatorImg.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiBmaWxsPSIjMzc0MTUxIiByeD0iNCIvPgo8dGV4dCB4PSIyNCIgeT0iMjgiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Pz88L3RleHQ+Cjwvc3ZnPgo=';
        };
        
        operatorCell.appendChild(operatorImg);
        rowDiv.appendChild(operatorCell);
        
        // Gadget cells
        relevantGadgets.forEach(gadget => {
            const gadgetCell = document.createElement('div');
            gadgetCell.className = 'gadget-cell';
            
            if (hasGadget(operator, gadget.name)) {
                gadgetCell.innerHTML = createCheckIcon();
            } else {
                gadgetCell.innerHTML = createXIcon();
            }
            
            rowDiv.appendChild(gadgetCell);
        });
        
        operatorRows.appendChild(rowDiv);
    });
}

function renderSummaryStats() {
    const operators = getCurrentOperators();
    const filteredOperators = getFilteredOperators();
    const relevantGadgets = getRelevantGadgets(operators);
    
    summaryStats.innerHTML = '';
    
    relevantGadgets.forEach(gadget => {
        const count = filteredOperators.filter(op => hasGadget(op, gadget.name)).length;
        const totalCount = operators.filter(op => hasGadget(op, gadget.name)).length;
        
        const statCard = document.createElement('div');
        statCard.className = 'stat-card';
        
        const img = document.createElement('img');
        img.src = gadget.image;
        img.alt = gadget.name;
        img.title = gadget.name;
        img.onerror = () => {
            img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjMzc0MTUxIiByeD0iNCIvPgo8dGV4dCB4PSIxNiIgeT0iMjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0iIzlDQTNBRiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Pz88L3RleHQ+Cjwvc3ZnPgo=';
        };
        
        const countDiv = document.createElement('div');
        countDiv.className = 'stat-count';
        countDiv.textContent = selectedGadget ? `${count}/${operators.length}` : `${totalCount}/${operators.length}`;
        
        statCard.appendChild(img);
        statCard.appendChild(countDiv);
        summaryStats.appendChild(statCard);
    });
}

function updateResultsCounter() {
    const filteredOperators = getFilteredOperators();
    const allOperators = getCurrentOperators();
    
    if (selectedGadget) {
        resultsText.textContent = `Showing ${filteredOperators.length} operators with selected gadget`;
        resultsCounter.classList.remove('hidden');
        clearFilterBtn.classList.remove('hidden');
    } else {
        resultsCounter.classList.add('hidden');
        clearFilterBtn.classList.add('hidden');
    }
}

function updateMatrixTitle() {
    const icon = currentSide === 'Attackers' ? '🔵' : '🔴';
    matrixTitle.textContent = `${icon} ${currentSide} Secondary Gadgets Matrix`;
}

// Event handlers
function switchSide(side) {
    currentSide = side;
    selectedGadget = null;
    
    // Update button states
    attackersBtn.classList.remove('active', 'attackers', 'defenders');
    defendersBtn.classList.remove('active', 'attackers', 'defenders');
    
    if (side === 'Attackers') {
        attackersBtn.classList.add('active', 'attackers');
    } else {
        defendersBtn.classList.add('active', 'defenders');
    }
    
    render();
}

function toggleGadgetFilter(gadgetName) {
    selectedGadget = selectedGadget === gadgetName ? null : gadgetName;
    render();
}

function clearFilter() {
    selectedGadget = null;
    render();
}

function render() {
    updateMatrixTitle();
    renderGadgetHeaders();
    renderOperatorRows();
    renderSummaryStats();
    updateResultsCounter();
}

// Event listeners
attackersBtn.addEventListener('click', () => switchSide('Attackers'));
defendersBtn.addEventListener('click', () => switchSide('Defenders'));
clearFilterBtn.addEventListener('click', clearFilter);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    attackersBtn.classList.add('active', 'attackers');
    render();
});