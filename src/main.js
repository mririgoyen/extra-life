import events from './events';
import participants from './participants';
import teams from './teams';

export default (config = {}) => {
  const defaultConfig = {
    baseUrl: 'https://extra-life.org/api'
  };

  const combinedConfig = Object.assign({}, defaultConfig, config);

  return {
    events: events(combinedConfig),
    participants: participants(combinedConfig),
    teams: teams(combinedConfig)
  };
};