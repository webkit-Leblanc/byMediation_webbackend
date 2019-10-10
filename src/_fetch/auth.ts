import fetch from '_fetch';

const authKey = '#Authorization#';
let Authorization: string | null = null;
Authorization = localStorage.getItem(authKey);

function updateAuth() {
  // return authFetch('/lisp-core/api/account/token/refresh')
  //   .then(res => res.data)
  //   .then(token => {
  //     scheduelAuthUpdate(token);
  //   });
  return Promise.resolve('22222fjafsafhasfh  wew').then(token => {
    scheduelAuthUpdate(token);
  });
}

function fetchContext(): Promise<any> {
  return authFetch('/lisp-core/api/account/getCurrentUser').then(
    res => res.data
  );
}

export function scheduelAuthUpdate(auth) {
  if (!auth) throw `Bad ${authKey}!`;
  localStorage.setItem(authKey, (Authorization = auth));
  setTimeout(() => {
    console.warn(`It's time to update ${authKey}`);
    updateAuth();
  }, 3600 * 1000);
}

export default function authFetch(path: string, data?: any) {
  if (Authorization) {
    return fetch(path, data, { Authorization });
  }

  console.error(`${authKey} is INVALID: ${path}`);
  return Promise.reject(`${authKey} is INVALID`);
}

export async function userContext() {
  console.log('Authorization', Authorization);
  if (Authorization) {
    console.log('执行下去');
    await updateAuth();
    return;
    //   return await fetchContext();
  }
  throw `${authKey} is INVALID`;
}

export async function userLogout() {
  Authorization = null;
  localStorage.removeItem(authKey);
  return true;
}
