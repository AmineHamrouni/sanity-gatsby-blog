export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fd6359570990fd9460c1458',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-epqjek1p',
                  apiId: '2d895f00-7564-4ec3-a900-cc5eb1e3c12f'
                },
                {
                  buildHookId: '5fd635952427add659e570b1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-wf5kqvqo',
                  apiId: '8a4620e4-3d03-48aa-a3c0-a969394cacc7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AmineHamrouni/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-wf5kqvqo.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
