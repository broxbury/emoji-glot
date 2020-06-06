let parseXml;
// create xml parsing functions
// the next if/else block is from the following thread
// https://stackoverflow.com/questions/649614/xml-parsing-of-a-variable-string-in-javascript
if (typeof window.DOMParser != "undefined") {
    parseXml = function(content) {
        return ( new window.DOMParser() ).parseFromString(content, "text/xml");
    };
} else if (typeof window.ActiveXObject != "undefined" &&
        new window.ActiveXObject("Microsoft.XMLDOM")) {
    parseXml = function(content) {
        let xmlDoc = new window.ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async = "false";
        xmlDoc.loadXML(content);
        return xmlDoc;
    };
} else {
    throw new Error("No XML parser found");
}

export const getTranslation = (translation, language) => {
  const encoded = encodeURI(translation)
  fetch(`https://microsoft-azure-translation-v1.p.rapidapi.com/translate?from=en&to=${language}&text=${encoded}`, {
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
                console.log(stringElementArray[0].innerHTML)
                return stringElementArray[0].innerHTML
})
.catch(err => {
	console.log(err);
});
// fetch("https://microsoft-azure-translation-v1.p.rapidapi.com/translate?from=en&to=es&text=Hello%252C%20world!", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "microsoft-azure-translation-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "bef3c060a2msh0a07b6c868a3b28p1a3fe3jsn420da1ef0e99",
// 		"accept": "application/json"
// 	}
// })
// .then(response => {
//   // console.log(response);
//   const data = response.JSON;
//   console.log(data);
//   return data
// })
// .catch(err => {
// 	console.log(err);
// });
}