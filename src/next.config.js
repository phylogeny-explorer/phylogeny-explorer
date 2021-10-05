module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/tree',
        permanent: true,
      },
    ];
  },
};
