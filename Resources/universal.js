var isFolded = false;

function toggleFold(){
    let sidebar = document.getElementById("project-sidebar");
    let navigation = document.getElementById("project-navigation");
    let arrow = document.getElementById("project-arrow");
    let menu = document.getElementById("project-menu");
    let header = document.getElementById("project-header");
    let description = document.getElementById("project-description");

    if(window.screen.availWidth < 520){
        if(isFolded){
            sidebar.style.setProperty("height", "30vh");
            sidebar.style.setProperty("overflow", "scroll");
            sidebar.style.setProperty("resize", "vertical");
            isFolded = false;
            return;
        }

        if(!isFolded){
            sidebar.style.setProperty("height", "50px");
            sidebar.style.setProperty("overflow", "hidden");
            sidebar.style.setProperty("resize", "none");
            isFolded = true;
            return;
        }
    }

    if(isFolded){
        sidebar.style.setProperty("width", "25vw");
        sidebar.style.setProperty("padding", "0 2%");
        sidebar.style.setProperty("overflow", "scroll");
        sidebar.style.setProperty("resize", "horizontal");

        navigation.style.setProperty("width", "100%");
        arrow.style.setProperty("visibility","visible");
        arrow.style.setProperty("display","block");
        menu.style.setProperty("margin","0");
        header.style.setProperty("visibility","visible");
        description.style.setProperty("visibility","visible");
        isFolded = false;
        return;
    }

    if(!isFolded){
        sidebar.style.setProperty("width", "50px");
        sidebar.style.setProperty("padding", "0 6px 0 7px");
        sidebar.style.setProperty("overflow", "hidden");
        sidebar.style.setProperty("resize", "none")

        navigation.style.setProperty("width", "40px");
        arrow.style.setProperty("visibility","hidden");
        arrow.style.setProperty("display","none");
        menu.style.setProperty("margin","0 auto");
        header.style.setProperty("visibility","hidden");
        description.style.setProperty("visibility","hidden");
        isFolded = true;
        return;
    }
}