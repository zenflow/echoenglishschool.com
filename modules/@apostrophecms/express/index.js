module.exports = {
  options: {
    session: {
      secret: undefined
    }
  },
  init (self) {
    // set session secret at run-time, not build-time
    self.options.session.secret = getSessionSecret();
  }
};

function getSessionSecret () {
  if (process.env.SESSION_SECRET) {
    return process.env.SESSION_SECRET;
  }
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Env var SESSION_SECRET must be set for production');
  }
  return 'session_secret';
}
