function fadeInElement(elementId) {
    var element = document.getElementById(elementId);
    
    if (element) {
        element.style.opacity = 0;
        
        function fadeIn() {
            var currentOpacity = parseFloat(element.style.opacity);
            if (currentOpacity < 1) {
                element.style.opacity = currentOpacity + 0.1;
                requestAnimationFrame(fadeIn);
            }
        }
        
        setTimeout(fadeIn, 300); // Adjust delay as needed
    }
}
