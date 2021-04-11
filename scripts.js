var darkMode = false

function toggleDarkMode() {    
    if (darkMode) {
        enableLightMode()
    } else {
        enableDarkMode()
    }
    
    darkMode = !darkMode
}

function enableDarkMode() {
    document.documentElement.style.setProperty("--color-bg", "#000000");
    document.documentElement.style.setProperty("--color-fg", "#FFFFFF");

    document.getElementById("darkmode-floater").style.setProperty("background-image", "url('assets/sunrise.svg')")
}

function enableLightMode() {
    document.documentElement.style.setProperty("--color-bg", "#FFFFFF");
    document.documentElement.style.setProperty("--color-fg", "#000000");

    document.getElementById("darkmode-floater").style.setProperty("background-image", "url('assets/sunset.svg')")    
}