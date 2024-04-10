import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((values) => {
    const resolved = [];
    for (const item of values) {
      resolved.push({ status: item.status, value: item.value || item.reason });
    }
    return resolved;
  });
}
