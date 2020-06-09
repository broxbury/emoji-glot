
function parseXml(xml) {
  return new window.DOMParser().parseFromString(xml, "text/xml");
}

export const getTranslation = (translation, language) => {
  const encoded = encodeURI(translation)
    const result = fetch(
      `https://microsoft-azure-translation-v1.p.rapidapi.com/translate?from=en&to=${language}&text=${encoded}`, {
      "method": "GET",
      "headers": {
                  "x-rapidapi-host": "microsoft-azure-translation-v1.p.rapidapi.com",
                  "x-rapidapi-key": "bef3c060a2msh0a07b6c868a3b28p1a3fe3jsn420da1ef0e99",
                  "accept": "application/json",
       }
      })
    .then(response => response.text())
    .then(text => {
      let document = parseXml(text)
                  let stringElementArray = document.getElementsByTagName('string')
                  return stringElementArray[0].innerHTML
    })
    .catch(err => {
	    return false;
    });
  return result
  // return `${translation} in ${language}`;
  // return false;
}