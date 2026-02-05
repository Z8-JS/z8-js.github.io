// Sidebar configuration for Z8 Documentation
const sidebarConfig = {
    sections: [
        {
            title: "Overview",
            items: [
                { name: "Introduction", href: "index.html" }
            ]
        },
        {
            title: "Global API",
            items: [
                { name: "console", href: "console.html" },
                { name: "timers", href: "timers.html" }
            ]
        },
        {
            title: "Z8 Modules",
            items: [
                { name: "z8:signals (soon)", href: "#" }
            ]
        },
        {
            title: "Node Modules",
            items: [
                { name: "node:fs", href: "filesystem.html" }
            ]
        }
    ]
};

// Get current page filename
function getCurrentPage() {
    const path = window.location.pathname;
    return path.substring(path.lastIndexOf('/') + 1) || 'index.html';
}

// Render sidebar
function renderSidebar() {
    const currentPage = getCurrentPage();
    const sidebarElement = document.getElementById('docs-sidebar');
    
    if (!sidebarElement) {
        console.warn('Sidebar element not found. Make sure there is an element with id="docs-sidebar"');
        return;
    }

    let html = '';
    
    sidebarConfig.sections.forEach(section => {
        html += `<h3>${section.title}</h3><ul>`;
        
        section.items.forEach(item => {
            const isActive = item.href === currentPage ? ' class="active"' : '';
            html += `<li><a href="${item.href}"${isActive}>${item.name}</a></li>`;
        });
        
        html += '</ul><br>';
    });
    
    sidebarElement.innerHTML = html;
}

// Auto-render on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderSidebar);
} else {
    renderSidebar();
}
