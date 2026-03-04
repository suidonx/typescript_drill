type ActivityLog = {
  lastEvent: Date;
  events: {
    id: string;
    timestamp: Date;
    type: "Read" | "Write";
  }[];
};

let activityLog: ActivityLog = {
  lastEvent: new Date(),
  events: [{ id: "1", timestamp: new Date(), type: "Read" }],
};

type Get = <T, K extends keyof T>(activityLog: T, key: K) => T[K];

const get: Get = (activityLog, key) => {
  return activityLog[key];
};
