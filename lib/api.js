import storage from './storage';

// I got this from here: http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

const activityTypes = [
  {
    name: 'Running',
    unit: 'km',
    icon: 'run'
  },
  {
    name: 'Cycling',
    unit: 'km',
    icon: 'bike'
  },
  {
    name: 'Burpees',
    unit: 'reps',
    icon: 'counter'
  },
  {
    name: 'Pushups',
    unit: 'reps',
    icon: 'counter'
  },
  {
    name: 'Squats',
    unit: 'reps',
    icon: 'counter'
  }
];


export function getActivityList() {
  return storage.getAllDataForKey('activity');
}

export function getActivityTypes() {
  return new Promise((resolve) => {
    resolve(activityTypes);
  })
}

export function saveActivity(activity, callback) {
  if (!activity.id)
    activity.id = guid();

  storage.save({
    key: 'activity',
    id: activity.id,
    rawData: activity,
    expires: null
  });

  // TODO: retrieve saved element and return it

  callback(activity);
}

export function saveGoal(goal, callback) {
  if (!goal.id)
    goal.id = guid();

  storage.save({
    key: 'goal',
    id: goal.id,
    rawData: goal,
    expires: null
  });

  // TODO: retrieve saved element and return it

  callback(goal);
}

export function deleteGoal(id, callback) {
  if(!id)
    return;

  storage.remove({
    key: 'goal',
    id: id
  });

  callback(id);
}

export function deleteActivity(id, callback) {
  if(!id)
    return;

  storage.remove({
    key: 'activity',
    id: id
  });

  callback(id);
}

export function getGoals() {
  return storage.getAllDataForKey('goal');
}