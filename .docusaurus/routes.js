import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'd72'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '417'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a39'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '182'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '9b4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'de5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'bd0'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'f36'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b37'),
    routes: [
      {
        path: '/docs/developers/intro',
        component: ComponentCreator('/docs/developers/intro', '554'),
        exact: true,
        sidebar: "devSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'e84'),
        exact: true
      },
      {
        path: '/docs/packaging/boulder',
        component: ComponentCreator('/docs/packaging/boulder', 'f54'),
        exact: true,
        sidebar: "packageSidebar"
      },
      {
        path: '/docs/packaging/intro',
        component: ComponentCreator('/docs/packaging/intro', 'a33'),
        exact: true,
        sidebar: "packageSidebar"
      },
      {
        path: '/docs/users/intro',
        component: ComponentCreator('/docs/users/intro', '420'),
        exact: true,
        sidebar: "userSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '5ac'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
