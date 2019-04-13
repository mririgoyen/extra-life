import get from './request/get';

export default config => {
  const { baseUrl } = config;
  return {
    getEvents: async () => await get(`${baseUrl}/events`),
    getEvent: async eventId => await get(`${baseUrl}/events/${eventId}`),
    getEventParticipants: async eventId => await get(`${baseUrl}/events/${eventId}/participants`),
    getEventTeams: async eventId => await get(`${baseUrl}/events/${eventId}/teams`)
  };
};