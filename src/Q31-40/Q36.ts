interface User {
  id: string;
}
interface AppUser {
  appName: "appName";
  appID: string;
}
interface ServiceUser {
  serviceName: "serviceName";
  serviceID: string;
}
const user = { id: "1" };
const appUser = { appName: "appName", appID: "appId" } as const;
const serviceUser = {
  serviceName: "serviceName",
  serviceID: "serviceID",
} as const;

function a(o: ServiceUser | User | AppUser) {
  if ("serviceID" in o) {
    return o.serviceID;
  } else if ("id" in o) {
    return o.id;
  } else if ("appId" in o) {
    return o.appId;
  }
}

const result = a(user);
