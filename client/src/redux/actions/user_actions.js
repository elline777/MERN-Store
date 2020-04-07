import axios from 'axios';
import { USER_SERVER } from '../../components/utils/misc';
import { LOGIN_USER } from './types';

export function loginUser(dataToSumbit) {
  const request = axios
    .post(`${USER_SERVER}/login`, dataToSumbit)
    .then((response) => response.data);

  return {
    type: LOGIN_USER,
    payload: request
  };
}
