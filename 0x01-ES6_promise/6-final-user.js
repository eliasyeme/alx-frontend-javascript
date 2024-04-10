import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => {
    const resolved = [];
    results.forEach((result) => resolved.push({status: result.status, value: result.value || result.reason}))
    return resolved;
  });
}
