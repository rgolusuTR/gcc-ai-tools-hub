// GCC AI Tools Hub - Main JavaScript

// Global state
let currentCategory = 'all';
let searchQuery = '';
let allTools = [];
let categories = [];

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Load data from window object
  categories = window.toolsData.categories || [];
  allTools = window.toolsData.tools || [];
  
  // Initialize UI
  initializeApp();
  
  // Set up event listeners
  setupEventListeners();
  
  // Initial render
  renderTools();
  updateStats();
});

// Initialize application
function initializeApp() {
  console.log('GCC AI Tools Hub initialized');
  console.log(`Loaded ${allTools.length} tools in ${categories.length} categories`);
}

// Set up event listeners
function setupEventListeners() {
  // Search input
  const searchInput = document.getElementById('search-input');
  const clearSearch = document.getElementById('clear-search');
  
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    clearSearch.style.display = searchQuery ? 'flex' : 'none';
    renderTools();
  });
  
  clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearch.style.display = 'none';
    renderTools();
  });
  
  // Category filter pills
  const filterPills = document.querySelectorAll('.filter-pill');
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      // Remove active class from all pills
      filterPills.forEach(p => p.classList.remove('active'));
      
      // Add active class to clicked pill
      pill.classList.add('active');
      
      // Update current category
      currentCategory = pill.dataset.category;
      
      // Re-render tools
      renderTools();
    });
  });
}

// Render tools based on current filters
function renderTools() {
  const toolsGrid = document.getElementById('tools-grid');
  const noResults = document.getElementById('no-results');
  const template = document.getElementById('tool-card-template');
  
  // Clear existing tools
  toolsGrid.innerHTML = '';
  
  // Filter tools
  const filteredTools = allTools.filter(tool => {
    // Category filter
    const categoryMatch = currentCategory === 'all' || tool.category === currentCategory;
    
    // Search filter
    const searchMatch = !searchQuery || 
      tool.name.toLowerCase().includes(searchQuery) ||
      tool.description.toLowerCase().includes(searchQuery) ||
      tool.tags.some(tag => tag.toLowerCase().includes(searchQuery));
    
    return categoryMatch && searchMatch;
  });
  
  // Show/hide no results message
  if (filteredTools.length === 0) {
    noResults.style.display = 'block';
    toolsGrid.style.display = 'none';
  } else {
    noResults.style.display = 'none';
    toolsGrid.style.display = 'grid';
    
    // Render each tool
    filteredTools.forEach((tool, index) => {
      const card = createToolCard(tool, template, index);
      toolsGrid.appendChild(card);
    });
  }
  
  // Update category counts
  updateCategoryCounts();
}

// Create a tool card from template
function createToolCard(tool, template, index) {
  const clone = template.content.cloneNode(true);
  const card = clone.querySelector('.tool-card');
  
  // Get category info
  const category = categories.find(c => c.id === tool.category) || {
    icon: '🔧',
    color: '#4f6ef7'
  };
  
  // Set category color
  card.style.setProperty('--category-color', category.color);
  card.dataset.category = tool.category;
  card.dataset.tags = tool.tags.join(',');
  
  // Set animation delay
  card.style.animationDelay = `${index * 0.05}s`;
  
  // Fill in tool data
  clone.querySelector('.tool-category-icon').textContent = category.icon;
  clone.querySelector('.tool-name').textContent = tool.name;
  clone.querySelector('.tool-description').textContent = tool.description;
  
  // Status badge
  const statusBadge = clone.querySelector('.tool-status-badge');
  statusBadge.textContent = tool.status || 'active';
  statusBadge.classList.add(tool.status || 'active');
  
  // Tags
  const tagsContainer = clone.querySelector('.tool-tags');
  tool.tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.className = 'tool-tag';
    tagEl.textContent = tag;
    tagsContainer.appendChild(tagEl);
  });
  
  // Link
  const link = clone.querySelector('.tool-link');
  link.href = tool.url;
  
  return clone;
}

// Update statistics
function updateStats() {
  const totalTools = allTools.length;
  const activeTools = allTools.filter(t => t.status === 'active').length;
  
  document.getElementById('total-tools').textContent = totalTools;
  document.getElementById('active-tools').textContent = activeTools;
  
  // Update category counts
  updateCategoryCounts();
}

// Update category counts in filter pills
function updateCategoryCounts() {
  // Count all tools
  const allCount = allTools.filter(tool => {
    return !searchQuery || 
      tool.name.toLowerCase().includes(searchQuery) ||
      tool.description.toLowerCase().includes(searchQuery) ||
      tool.tags.some(tag => tag.toLowerCase().includes(searchQuery));
  }).length;
  
  document.getElementById('count-all').textContent = allCount;
  
  // Count tools per category
  categories.forEach(category => {
    const count = allTools.filter(tool => {
      const categoryMatch = tool.category === category.id;
      const searchMatch = !searchQuery || 
        tool.name.toLowerCase().includes(searchQuery) ||
        tool.description.toLowerCase().includes(searchQuery) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchQuery));
      
      return categoryMatch && searchMatch;
    }).length;
    
    const countEl = document.getElementById(`count-${category.id}`);
    if (countEl) {
      countEl.textContent = count;
    }
  });
}

// Utility: Debounce function for search
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}