const extraLife = require('../dist/main')();

extraLife.teams.getTeam('45209')
  .then(output => {
    console.log('OUTPUT', output);
  })
  .catch(err => {
    console.log('ERROR', err);
  });