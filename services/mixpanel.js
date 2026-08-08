import { Mixpanel } from "mixpanel-react-native";


const trackAutomaticEvents = true;
//const useNative = false;
const mixpanel = new Mixpanel("4c529bcaf95ac4bdf4997d8283a75ace", trackAutomaticEvents);
mixpanel.setServerURL("https://api-eu.mixpanel.com");

mixpanel.init();
mixpanel.track("App started");

//mixpanel.setLoggingEnabled(true);
export {mixpanel}