// Function to inject HTML into the <head> and <body> tags immediately
(function injectIntoPage() {
    let headHtml = `
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
        <style>
            .header {
                display: none;
            }
        </style>
        <header class="header"></header>
    `;

    let bodyHtml = `
        <div id="iframeContainer"></div>
    `;

    // Create a temporary container for head elements
    let headContainer = document.createElement('div');
    headContainer.innerHTML = headHtml;
    
    // Append elements to the head, ensuring scripts execute properly
    Array.from(headContainer.children).forEach(element => {
        if (element.tagName === "SCRIPT") {
            let script = document.createElement("script");
            script.src = element.src;
            script.integrity = element.integrity;
            script.crossOrigin = element.crossOrigin;
            document.head.appendChild(script);
        } else {
            document.head.appendChild(element);
        }
    });

    // Create a temporary container for body elements
    let bodyContainer = document.createElement('div');
    bodyContainer.innerHTML = bodyHtml;
    
    // Append elements to the body
    while (bodyContainer.firstChild) {
        document.body.appendChild(bodyContainer.firstChild);
    }
})();
