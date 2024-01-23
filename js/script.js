
unwhiten();
isWhitened = false;


function onButtonClick(route)
{
    isWhitened = true;
    whiten();
    setTimeout(changePage,500);
    function changePage()
    {
        window.location.href = route;
    }
}






function unwhiten()
{
    let id = null;
    const elem = document.getElementById("whitescreen");
    let a = 1;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (a <= 0) {
        clearInterval(id);
      } else {
        a -= 0.01
        elem.style.backgroundColor = "rgba(255,255,255, "+ a +")";
      }
    }
}

function whiten() {
    let id = null;
    const elem = document.getElementById("whitescreen");
    let a = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (a >= 1) {
        clearInterval(id);
      } else {
        a += 0.01
        elem.style.backgroundColor = "rgba(255,255,255, "+ a +")";
      }
    }
  }