function toggleNav() {//toggles the shopping cart to open and close the side menu
  var element = document.getElementById("sidebar-cart");
  if(element.style.width > "1")//check if the sidebar is open
  {
    closeNav();
  }else{//check is the sidebar is closed
    openNav();
  } 
}
function openNav() {//toggles the shopping cart to open
  document.getElementById("sidebar-cart").style.width = "250px";
  document.getElementById("sidebar-cart").style.paddingTop= "60px";
  document.getElementById("clsbtn").style.display = "block";
  document.getElementById("sidetxt").style.display = "block";
}

function closeNav() {//toggles the shopping cart and the x button to close
  document.getElementById("sidebar-cart").style.width = "0";
  document.getElementById("sidebar-cart").style.paddingTop = "0px";
  document.getElementById("clsbtn").style.display = "none";
  document.getElementById("sidetxt").style.display = "none";
}