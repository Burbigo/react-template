import apiClient from './';

export const doSomeAction = () => {
  return apiClient.get(`/api-slug`);
}