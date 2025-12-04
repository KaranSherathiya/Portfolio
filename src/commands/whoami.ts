const whoamiObj = {
  "message": [
    [
      "I am Karan Sherathiya,",
      "I like working on NLP and ML/Deep Learning models",
      "Can talk for hours about Global market and working of Finance world ",
      "",
      "Currently researching on Multi Agent systems behaviour ",
      "",
    ]
  ]
}



export const createWhoami = () : string[] => {
  const whoami : string[] = [];  
  const r = Math.floor(Math.random() * whoamiObj.message.length);
  whoami.push("<br>");

  whoamiObj.message[r].forEach((ele, idx) => {
    if (idx === whoamiObj.message[r].length - 1) {
      ele += "<span class='command'></span>";
    }
    whoami.push(ele);
  });

  whoami.push("<br>");

  return whoami
}
