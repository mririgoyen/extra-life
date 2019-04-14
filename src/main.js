import get from './request/get';

const BASE_URL = 'https://extra-life.org/api';

const buildQueryString = (limit, page) => {
  const parsedLimit = parseInt(limit);
  const parsedPage = parseInt(page);
  limit = !!parsedLimit ? parsedLimit : 100;
  page = (!!parsedPage ? parsedPage : 1) || 1;
  const offset = page === 1 ? 1 : limit * (page - 1);
  return `?limit=${limit}&offset=${offset}`;
};

export default {
  // Participants
  // https://github.com/DonorDrive/PublicAPI/blob/master/docs/1.0/resources/participants.md
  getParticipants: async (limit, page) => await get(`${BASE_URL}/participants${buildQueryString(limit, page)}`),
  getParticipant: async participantId => await get(`${BASE_URL}/participants/${participantId}`),
  getParticipantActivity: async participantId => await get(`${BASE_URL}/participants/${participantId}/activity`),
  getParticipantBadges: async participantId => await get(`${BASE_URL}/participants/${participantId}/badges`),
  getParticipantDonations: async (participantId, limit, page) => await get(`${BASE_URL}/participants/${participantId}/donations${buildQueryString(limit, page)}`),
  getParticipantDonors: async (participantId, limit, page) => await get(`${BASE_URL}/participants/${participantId}/donors${buildQueryString(limit, page)}`),

  // Teams
  // https://github.com/DonorDrive/PublicAPI/blob/master/docs/1.0/resources/teams.md
  getTeams: async (limit, page) => await get(`${BASE_URL}/teams${buildQueryString(limit, page)}`),
  getTeam: async teamId => await get(`${BASE_URL}/teams/${teamId}`),
  getTeamActivity: async teamId => await get(`${BASE_URL}/teams/${teamId}/activity`),
  getTeamBadges: async teamId => await get(`${BASE_URL}/teams/${teamId}/badges`),
  getTeamDonations: async (teamId, limit, page) => await get(`${BASE_URL}/teams/${teamId}/donations${buildQueryString(limit, page)}`),
  getTeamDonors: async (teamId, limit, page) => await get(`${BASE_URL}/teams/${teamId}/donors${buildQueryString(limit, page)}`),
  getTeamParticipants: async (teamId, limit, page) => await get(`${BASE_URL}/teams/${teamId}/participants${buildQueryString(limit, page)}`)
};