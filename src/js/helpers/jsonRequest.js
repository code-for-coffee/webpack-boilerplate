/**
 * request
 * @param URI URL for an API, such as http://api.gogoair.com
 * @param hook a function that is called when response JSON is provided
 */
const request = async (URI, hook) => {
    const response = await fetch(URI);
    const json = await response.json();
    //console.log(json);
    if (typeof hook === "function") hook(json);
  };
  
  /**
   * jsonRequest
   * Async fetch method that fetches a URI and passes JSON to a hook function
   */
  export const jsonRequest = request;