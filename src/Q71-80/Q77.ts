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

function get<T, K extends keyof T>(activityLog: T, key: K) {
  return activityLog[key];
  //     ^^^^^^^^^^^^^^^^
  // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'ActivityLog'.
  // No index signature with a parameter of type 'string' was found on type 'ActivityLog'.(7053)
}

let lastEvent = get(activityLog, "lastEvent"); // any

// TにActivityLogが渡され、KはActivitiLogのキー一覧のリテラル型のユニオンになり
// 他のプロパティを参照できなくなる
