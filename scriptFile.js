var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(var tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(var tabcontent of tabcontents){
        tabcontent.style.display = "none"; // Hide all tab contents
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    var selectedTab = document.getElementById(tabname);
    selectedTab.style.display = "block"; // Show the selected tab content
    selectedTab.classList.add("active-tab");
}