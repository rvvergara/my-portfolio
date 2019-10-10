const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const projects = require('./data/projects');

module.exports = withCSS(withSass({
  exportPathMap: () => {
    const projectsPages = projects.reduce((pages, project) => ({
      ...pages,
      [`/projects/${project.title}`]: {
        page: '/projects/[title]',
        query: { title: project.title },
      },
    }), {});

    return { ...projectsPages, '/': { page: '/' } };
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          modules: true,
        },
      },
    });

    return config;
  },
}));
