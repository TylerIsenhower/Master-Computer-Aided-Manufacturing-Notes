import './style.css';
import 'katex/dist/katex.min.css';
import { createIcons, Layers, ChevronRight, BookOpen, Menu, X, Home, Hash } from 'lucide';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import renderMathInElement from 'katex/dist/contrib/auto-render';

const navContent = document.getElementById('nav-content');
const mainView = document.getElementById('main-view');
const mainTitle = document.getElementById('main-title');
const breadcrumb = document.getElementById('breadcrumb');

const updateIcons = () => createIcons({
  icons: { Layers, ChevronRight, BookOpen, Menu, X, Home, Hash }
});

async function init() {
  updateIcons();
  try {
    const response = await fetch('/notes/master.md');
    let markdown = await response.text();
    
    // Clean markdown (remove metadata if any)
    markdown = markdown.replace(/^---[\s\S]*?---\s*/, '');
    
    // Generate Sidebar from Headers
    const headers = parseHeaders(markdown);
    renderSidebar(headers);
    
    // Render Content
    const html = marked.parse(markdown);
    mainView.innerHTML = DOMPurify.sanitize(html);
    mainView.classList.add('note-content');
    mainTitle.textContent = "MMET 380 Master Study Guide";
    breadcrumb.textContent = "Course / Master Guide";

    // Math Rendering
    renderMathInElement(mainView, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false}
      ],
      throwOnError: false
    });

    // Add IDs to headers for navigation
    addHeaderIds();
    
    updateIcons();
  } catch (error) {
    console.error('Failed to load master guide:', error);
    mainView.innerHTML = '<div class="error">Failed to load the master study guide.</div>';
  }
}

function parseHeaders(markdown) {
  const lines = markdown.split('\n');
  const headers = [];
  lines.forEach(line => {
    const h2Match = line.match(/^## (.*)/);
    const h3Match = line.match(/^### (.*)/);
    if (h2Match) {
      headers.push({ level: 2, title: h2Match[1].trim(), id: slugify(h2Match[1].trim()) });
    } else if (h3Match) {
      headers.push({ level: 3, title: h3Match[1].trim(), id: slugify(h3Match[1].trim()) });
    }
  });
  return headers;
}

function slugify(text) {
  return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
}

function renderSidebar(headers) {
  navContent.innerHTML = `
    <div class="nav-item active" id="home-btn">
      <i data-lucide="home"></i> <span>Top</span>
    </div>
    <div id="sidebar-list"></div>
  `;
  
  const sidebarList = document.getElementById('sidebar-list');
  const homeBtn = document.getElementById('home-btn');
  homeBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  let currentGroup = null;

  headers.forEach(header => {
    if (header.level === 2) {
      currentGroup = document.createElement('div');
      currentGroup.className = 'nav-group';
      currentGroup.innerHTML = `<div class="nav-group-title" onclick="document.getElementById('${header.id}').scrollIntoView({behavior: 'smooth'})">${header.title}</div>`;
      sidebarList.appendChild(currentGroup);
    } else if (header.level === 3 && currentGroup) {
      const item = document.createElement('div');
      item.className = 'nav-item sub-item';
      item.innerHTML = `<span>${header.title}</span>`;
      item.onclick = () => {
        const el = document.getElementById(header.id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      };
      currentGroup.appendChild(item);
    }
  });
}

function addHeaderIds() {
  const h2s = mainView.querySelectorAll('h2');
  const h3s = mainView.querySelectorAll('h3');
  
  h2s.forEach(h => h.id = slugify(h.textContent));
  h3s.forEach(h => h.id = slugify(h.textContent));
}

init();
