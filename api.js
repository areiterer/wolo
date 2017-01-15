import { sampleActivities } from './sampleData';

// TODO: Replace with array
let activities = sampleActivities;
let isRequesting = false;

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

export function getActivityList() {
  this.isRequesting = true;

  return new Promise(resolve => {
    let results = activities.map(x => {
      return {
        id: x.id,
        type: x.type,
        date: x.date,
        amount: x.amount,
        unit: x.unit,
        duration: x.duration
      }
    });
    resolve(results);

    this.isRequesting = false;
  });
}

export function saveActivity(activity) {
  this.isRequesting = true;
  return new Promise(resolve => {
    let instance = JSON.parse(JSON.stringify(activity));

    if (instance.id) {
      let found = activities.filter(x => x.id === instance.id);
      let index = activities.indexOf(found);
      activities[index] = instance;
    } else {
      instance.id = guid();
      activities.push(instance);
    }

    this.isRequesting = false;
    resolve(instance);
  });
}