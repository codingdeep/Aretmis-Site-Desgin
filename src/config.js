export function Config() {
  switch(process.env.REACT_APP_ENV){
    case "dev":
      return {
        serverUrl: "https://api-v2.silverbird.io/",
        appVersion: "2.5.0"
      };
    case "prod":
      return {
        serverUrl: "https://api-v2.silverbird.io/",
        appVersion: "2.5.0"
      }
    case "qa":
      return {
        serverUrl: "https://api-v2.silverbird.io/",
        appVersion: "2.5.0"
      }
    default:
      return {
        serverUrl: "https://api-v2.silverbird.io/",
        appVersion: "2.5.0"
      }
    }
}
