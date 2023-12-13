chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    // Check if the message is for this content script
    console.log("Recived");
    if (message == "Hello!") {
        console.log("recived inside");
      // Process the message content and execute the desired code
      // ...
      const b  = Array.from(document.getElementsByTagName('a'));

    const data  = b.filter((e)=>{
      if(e.innerText.slice(-18)=="@ms.sst.scaler.com")return (e);
    });

    const re  =   data.map((e)=>{
      const aa = e.parentElement.parentElement.nextElementSibling;
      return (aa.innerText+" "+ aa.nextSibling.innerText+" "+aa.nextSibling.nextSibling.innerText+" "+aa.nextSibling.nextSibling.nextSibling.innerText);
    });

      sendResponse({
        data:re
      })
    }
  });
  

const fun = async (data) =>{
    await chrome.runtime.sendMessage({target: "Popup",data: data}, function(response) {
        console.log(response);
      });
      return data;
}