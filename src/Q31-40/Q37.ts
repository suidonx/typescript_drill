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

const isServiceUser = (o: any): o is ServiceUser => {
  // 特定のプロパティを持っているかで型を判定
  return o.serviceID === "serviceID";
};
const isAppUser = (o: any): o is AppUser => {
  return o.appID === "appId";
};

function a(o: ServiceUser | User | AppUser) {
  if (isServiceUser(o)) {
    return o.serviceID;
  } else if (isAppUser(o)) {
    return o.appID;
  }
  return o.id;
}
