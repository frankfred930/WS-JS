// Exercise 1: Parse embedded XML data
function parseData() {
    const quotesElements = document.getElementsByTagName('quotes');
    let output = '';
    
    for (let i = 0; i < quotesElements.length; i++) {
        const quoteElement = quotesElements[i].getElementsByTagName('quote')[0];
        const authorElement = quotesElements[i].getElementsByTagName('author')[0];
        
        if (quoteElement && authorElement) {
            output += `<div class="quote-item">
                <p><strong>Quote:</strong> ${quoteElement.textContent}</p>
                <p><strong>Author:</strong> ${authorElement.textContent}</p>
            </div>`;
        }
    }
    
    document.getElementById('exercise1-output').innerHTML = output;
}

// Exercise 2: Load XML file via AJAX
function loadXMLFile() {
    const xhr = new XMLHttpRequest();
    const url = 'https://meijastiina.github.io/news_rss_topstories.xml';
    
    xhr.open('GET', url, true);
    xhr.send();
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('quotes').innerHTML = 
                '<h3>Raw XML Data:</h3><pre>' + 
                escapeHtml(xhr.responseText) + 
                '</pre>';
        }
    };
}

// Exercise 3: Load and parse XML into a table
function loadAndParseXML() {
    const xhr = new XMLHttpRequest();
    const url = 'https://meijastiina.github.io/news_rss_topstories.xml';
    
    xhr.open('GET', url, true);
    xhr.send();
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xhr.responseText, 'text/xml');
            
            const items = xmlDoc.getElementsByTagName('item');
            let tableHTML = '<table><thead><tr><th>Title</th><th>Description</th></tr></thead><tbody>';
            
            for (let i = 0; i < Math.min(items.length, 5); i++) {
                const title = items[i].getElementsByTagName('title')[0].textContent;
                const description = items[i].getElementsByTagName('description')[0].textContent;
                
                tableHTML += `<tr><td>${title}</td><td>${description}</td></tr>`;
            }
            
            tableHTML += '</tbody></table>';
            document.getElementById('tabledata').innerHTML = tableHTML;
        }
    };
}

// Exercise 4: Load and parse news feed
function loadAndParseNews(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xhr.responseText, 'text/xml');
            
            let newsHTML = '<h3>Latest News:</h3>';
            const items = xmlDoc.getElementsByTagName('item');
            
            for (let i = 0; i < Math.min(items.length, 10); i++) {
                const title = items[i].getElementsByTagName('title')[0].textContent;
                const link = items[i].getElementsByTagName('link')[0].textContent;
                
                newsHTML += `<div class="news-item"><a href="${link}" target="_blank">${title}</a></div>`;
            }
            
            document.getElementById('newsfeed').innerHTML = newsHTML;
        }
    };
}

// Helper function to escape HTML for safe display
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}