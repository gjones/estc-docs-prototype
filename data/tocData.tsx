export const TOCData = [
  {
    name: 'On this page',
    id: 0,
    items: [
      {
        name: 'Prerequisites',
        id: 1,
        href: '#prerequisites',
      },
      {
        name: 'Get Elasticsearch Service',
        id: 2,
        href: '#get-ess',
      },
      {
        name: 'Connect securely',
        id: 3,
        href: '#connect-securely',
        isOpen: true,
        items: [
          {
            name: 'Basic authentication',
            id: 1.1,
            href: '#basic-auth',
          },
        ],
      },
      {
        name: 'Ingest data',
        id: 5,
        href: '#ingest-data',
      },
      {
        name: 'Search and modify data',
        id: 6,
        href: '#search-mode',
      },
      {
        name: 'Switch to API key authentication',
        id: 7,
        href: '#api-key-auth',
      },
      {
        name: 'Best practices',
        id: 8,
        href: '#best-practices',
        isOpen: true,
        items: [
          {
            name: 'Security',
            id: 8.1,
            href: '#security',
          },
          {
            name: 'Connections',
            id: 8.2,
            href: '#connections',
          },
          {
            name: 'Schema',
            id: 8.3,
            href: '#schema',
          },
          {
            name: 'Ingest',
            id: 8.4,
            href: '#ingest',
          },
        ],
      },
    ],
  },
]
