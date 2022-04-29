export default {
  widgets: [
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
                  buildHookId: '626c3b0ab50d5400ad78ea94',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-3b77qpgq',
                  apiId: 'a68cdb20-07fc-47e9-a0e9-b2a4be8b383a'
                },
                {
                  buildHookId: '626c3b0bd2e7bf033bf6d246',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-t47a7djj',
                  apiId: '9142262c-4988-45d0-b17d-a8e48a755140'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shantanusoam/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-t47a7djj.netlify.app', category: 'apps'}
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
