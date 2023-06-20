function brouser(...input){
  let browserHistory = input.shift();
  let browserCommands = input.shift();
  for (const line of browserCommands) {
    let [command, ...site] = line.split(" ");
    if (command === "Open") {
      browserHistory["Open Tabs"].push(...site);
      browserHistory["Browser Logs"].push(line);
    } else if (command === "Close") {
      let index = browserHistory["Open Tabs"].indexOf(site[0]);
      browserHistory["Open Tabs"].splice(index, 1);
      browserHistory["Recently Closed"].push(site[0]);
      browserHistory["Browser Logs"].push(line);
    } else if (command === "Clear") {
      browserHistory["Open Tabs"] = [];
      browserHistory["Recently Closed"] = [];
      browserHistory["Browser Logs"] = [];
    }
  }
  for (const key in browserHistory) {
    if (key === "Browser Name") {
      console.log(browserHistory[key]);
    } else console.log(`${key}: ${browserHistory[key].join(', ')}`);
  }
}


brouser(
    {"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
    "Recently Closed":["Yahoo","Gmail"],
    "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
    ["Close Facebook", "Open StackOverFlow", "Open Google"]

)