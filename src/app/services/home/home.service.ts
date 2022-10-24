// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class HomeService {

// constructor() { }

// }
import axios from 'axios';
import { HttpClient } from '@angular/common/http';

export const postDataForm = {
  post: async function (url: string, data: any) {
    const res = await axios.post(url, data);
    console.log(res.data);
    return res.data;
  },
  test: (data: any) => console.log(data),
};
