import get from './request/get';

export default config => {
  const { baseUrl } = config;
  return {
    getParticipants: async () => await get(`${baseUrl}/participants`),
    getParticipant: async participantId => await get(`${baseUrl}/participants/${participantId}`),
    getParticipantActivity: async participantId => await get(`${baseUrl}/participants/${participantId}/activity`),
    getParticipantBadges: async participantId => await get(`${baseUrl}/participants/${participantId}/badges`),
    getParticipantDonations: async participantId => await get(`${baseUrl}/participants/${participantId}/donations`),
    getParticipantDonors: async participantId => await get(`${baseUrl}/participants/${participantId}/donors`)
  };
};