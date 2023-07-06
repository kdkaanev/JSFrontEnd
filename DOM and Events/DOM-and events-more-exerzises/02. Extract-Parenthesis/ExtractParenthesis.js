function extract(content) {
  const text = document.getElementById(content).textContent
  let extractList = [];
  for (const char of text) {
    if (char.match(/\((.*?)\)/gm)){
        extractList.push(char)
        console.log(extractList)
    }
  }
  

}