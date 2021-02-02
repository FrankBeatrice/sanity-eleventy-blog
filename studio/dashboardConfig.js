export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6018bc30db391343072f2260',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-sysjt8w4',
                  apiId: 'a07e862e-d7e2-4f56-930e-119d180dafe5'
                },
                {
                  buildHookId: '6018bc3058204254e1ba718e',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-dsxjbjnq',
                  apiId: 'a8b603ad-8f51-4664-ba3c-3e12fa64031c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/FrankBeatrice/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-dsxjbjnq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
