console.log("Hello from popup.js");


// Popup JS
// Send a message to the active tab
chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
  const message = "Hello!";
  chrome.tabs.sendMessage(tabs[0].id, message, (response) => {
    response.data.forEach((e)=>{
      const li = document.createElement("li");
      li.innerText = e;
      document.getElementById("links").appendChild(li);
    })
    // document.getElementById("pp").innerText = response.data;
  });
});


document.getElementById("btn").addEventListener("click",()=>{
    window.location.replace("https://chat.openai.com/");
    fetch("asdasd").then((res)=>{
      res=>res.json()
    }).then((data)=>{
      document.getElementById("pp").innerText = data;
    }).catch((err)=>{
      document.getElementById("pp").innerText = "errororor";

    })
  });
  