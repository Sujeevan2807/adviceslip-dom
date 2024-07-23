const blockquoteEl = document.querySelector("blockquote");

const adviceAPIURL = "https://api.adviceslip.com/advice";

/* let resolution = new Promise((resolve, reject) => {
  let gym = false;

  setTimeout(() => {
    if (gym) {
      resolve("King is Always a King");
    } else {
      reject("Queen is Always a Queen");
    }
  }, 3000);
}); */

/* resolution.then((msg)=>{
    blockquoteEl.textContent = msg
}).catch((err)=>{
    blockquoteEl.textContent = err
})
  */
/* 
const myResolution = async () => {
    try{
        const result = await resolution;
        blockquoteEl.textContent = result;
    }catch(error){
        blockquoteEl.textContent = error;
    }
  
};

myResolution();
 */

/* let advice = new XMLHttpRequest();

advice.responseType = "json";
advice.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    blockquoteEl.textContent = advice.response.slip.advice;
  }
};

advice.open("GET", "https://api.adviceslip.com/advice");
advice.send();
 */

const myFunction = async () => {
  try {
    const apiUrl = await fetch(adviceAPIURL);
    const apiJasonData = await apiUrl.json();
    return apiJasonData;
  } catch (error) {
    console.error("Some Network Issue", error);
  }
}

const finalFunction = await myFunction();

blockquoteEl.textContent = finalFunction.slip.advice
