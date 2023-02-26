export const experiences = [
  {
    _id: {
      $oid: '63cefac9085e831cd0ad07e5',
    },
    company: 'Base Plus',
    logo: '/logo/baselogo.svg',
    position: 'Lead Software Engineer',
    skills: [
      'react',
      'javascript',
      'typescript',
      'node',
      'reactNative',
      'graphql',
      'mongoDb',
    ],
    startDate: {
      $date: {
        $numberLong: '1674500817000',
      },
    },
    endDate: {
      $date: {
        $numberLong: '1664651217000',
      },
    },
    responsibilities: [
      'Redeveloping a cross-platform, mobile skincare diary with modernised UI components in React Native',
      'Revitalising a legacy, Node-based, server while improving load efficiency and reducing errors',
      'Bootstrapped a metrics dashboard that visualised KPIs, providing insight into product performance',
      'Providing consultation for technical solutions and approaches to data analysis',
    ],
  },
  {
    _id: {
      $oid: '63cefd5e085e831cd0ad07e6',
    },
    company: 'Cambridge Kinetics',
    logo: '/logo/cklogo.svg',
    position: 'Software Engineer',
    skills: [
      'react',
      'javascript',
      'typescript',
      'node',
      'reactNative',
      'graphql',
      'mongoDb',
    ],
    startDate: {
      $date: {
        $numberLong: '1662059217000',
      },
    },
    endDate: {
      $date: {
        $numberLong: '1633115217000',
      },
    },
    responsibilities: [
      'Managing complex, high-value projects and ensuring that solutions meet client needs',
      'Spearheading development of exceptional web applications for both client and company products',
      'Providing mentorship and guidance to junior developers',
    ],
  },
  {
    _id: {
      $oid: '63cefe08085e831cd0ad07e7',
    },
    company: 'Cambridge Software',
    logo: '/logo/cslogo.png',
    position: 'JavaScript Developer',
    skills: ['react', 'javascript', 'node', 'mongoDb'],
    startDate: {
      $date: {
        $numberLong: '1617649617000',
      },
    },
    endDate: {
      $date: {
        $numberLong: '1633028817000',
      },
    },
    responsibilities: [
      'Liaised with clients in order to feature scope upcoming projects',
      "Implemented new features on Cambridge Software's flagship CRM platform",
      'Worked alongside the technical lead to build and deliver high-quality software',
      'Provided ongoing support and fixes for developed systems',
    ],
  },
].sort();
