Package.describe({
  name: 'poetic:meteor-velocityjs',
  summary: "Wrapper for velocity.js includes ui pack",
  version: "0.0.1",
  git: "https://github.com/poetic/meteor-velocityjs.git",
  documentation: 'README.md'
});

Package.onUse(function(api) {
  if (api.versionsFrom)
    api.versionsFrom('METEOR@0.9.1');

  api.addFiles(['velocity.js', 'velocity.ui.js'], 'client');
});
