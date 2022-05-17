module.exports = {
  'packages/**/*.{js}': [
    'npm run lint',
  ],
  'commander/**/*.{js}': ['npm run lint --workspace=@astral/commander'],
};
