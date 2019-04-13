import get from './request/get';

export default config => {
  const { baseUrl } = config;
  return {
    getTeams: async () => await get(`${baseUrl}/teams`),
    getTeam: async teamId => await get(`${baseUrl}/teams/${teamId}`),
    getTeamActivity: async teamId => await get(`${baseUrl}/teams/${teamId}/activity`),
    getTeamBadges: async teamId => await get(`${baseUrl}/teams/${teamId}/badges`),
    getTeamDonations: async teamId => await get(`${baseUrl}/teams/${teamId}/donations`),
    getTeamDonors: async teamId => await get(`${baseUrl}/teams/${teamId}/donors`),
    getTeamParticipants: async teamId => await get(`${baseUrl}/teams/${teamId}/participants`)
  };
};