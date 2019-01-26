import apiClient from './';

export const yourAction = () => {
  return apiClient.get(`/api-slug`);
}