/**
 * ```
 * 柯礼钦 <kelq@hugeinfo.com.cn>
 * 10/9/2019, 3:03:31 PM
 * ```
 * doc comment for the file goes here
 */

/** Happy Coding */
import fetch from '_fetch';

export function getData(page, size) {
  return fetch(
    `/x000/demo/${page}/${size}?page=${page}&size=${size}`,
    undefined,
    { Authorization: 'a' }
  );
}
export function postData() {}
