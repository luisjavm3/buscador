import { searchFuentes } from '../redux/reducers/result';

const mockFuentes = [
  {
    _id: '5f0baba1913855e14eb69937',
    index: 0,
    isActive: false,
    name: 'amet',
    company: 'ENAUT',
    timestamp: {
      createdAt: '2018-05-03',
      updateAt: '2017-02-16',
    },
    description:
      'Eu ea incididunt mollit dolor. Irure reprehenderit ipsum dolore minim. Ut eiusmod esse velit eiusmod nulla. Duis sint commodo consectetur do. Ad aute ipsum voluptate cillum excepteur fugiat pariatur amet tempor anim ex cupidatat. Reprehenderit et pariatur mollit officia aute duis.\r\n',
    tags: ['minim', 'minim', 'velit', 'commodo', 'eiusmod', 'ut', 'enim'],
  },
  {
    _id: '5f0baba183c29318e370ea70',
    index: 1,
    isActive: true,
    name: 'sunt',
    company: 'LUNCHPAD',
    timestamp: {
      createdAt: '2015-11-27',
      updateAt: '2018-03-31',
    },
    description:
      'Consequat et ad ipsum reprehenderit magna labore et excepteur duis reprehenderit in culpa Lorem irure. Tempor id duis non sint excepteur consectetur deserunt veniam fugiat qui occaecat. Laboris eu est amet eiusmod qui fugiat et consequat elit do ipsum commodo sint. Ipsum proident elit non ea. Elit id aliqua ullamco mollit amet sint. Et fugiat commodo adipisicing qui velit.\r\n',
    tags: [
      'exercitation',
      'aute',
      'commodo',
      'Lorem',
      'ipsum',
      'nulla',
      'fugiat',
    ],
  },
  {
    _id: '5f0baba19b8a06df9cc7d9e0',
    index: 2,
    isActive: false,
    name: 'nisi',
    company: 'MARTGO',
    timestamp: {
      createdAt: '2018-07-10',
      updateAt: '2018-09-07',
    },
    description:
      'Sit sint quis eiusmod proident aute eu ipsum. Ipsum reprehenderit aliqua consequat deserunt. Quis eu non veniam deserunt irure. Esse aliqua ipsum dolor aute commodo. Anim occaecat elit excepteur aute deserunt duis do magna.\r\n',
    tags: ['velit', 'sit', 'ex', 'Lorem', 'ipsum', 'voluptate', 'duis'],
  },
  {
    _id: '5f0baba106c8fda074f2652c',
    index: 3,
    isActive: true,
    name: 'sit',
    company: 'SOLAREN',
    timestamp: {
      createdAt: '2016-10-02',
      updateAt: '2017-10-25',
    },
    description:
      'Aliquip in excepteur veniam esse Lorem dolore exercitation ex exercitation reprehenderit et aliqua sit amet. Officia velit nisi tempor dolor. Eu proident sit occaecat amet. Non commodo voluptate deserunt cillum cupidatat cillum aliqua ullamco consequat eiusmod mollit in elit. Adipisicing sit laborum voluptate anim sint laboris dolore adipisicing ut ullamco ipsum eu.\r\n',
    tags: [
      'exercitation',
      'cupidatat',
      'consectetur',
      'nisi',
      'magna',
      'id',
      'proident',
    ],
  },
  {
    _id: '5f0baba1aeda3e17e2f56dbc',
    index: 4,
    isActive: false,
    name: 'ipsum',
    company: 'VIXO',
    timestamp: {
      createdAt: '2018-03-07',
      updateAt: '2017-08-25',
    },
    description:
      'Aliqua cupidatat laborum amet consequat proident elit nisi aliquip nisi. Laborum aliqua aute labore consequat cillum incididunt. Ad id adipisicing sit dolor eu.\r\n',
    tags: [
      'voluptate',
      'proident',
      'ea',
      'ullamco',
      'sint',
      'enim',
      'excepteur',
    ],
  },
];

describe('searchTableros( arr, searchTerm )', () => {
  test('Unicity', () => {
    expect([mockFuentes[0]]).toEqual(
      searchFuentes(mockFuentes, '5f0baba1913855e14eb69937')
    );

    expect([mockFuentes[1]]).toEqual(
      searchFuentes(mockFuentes, '5f0baba183c29318e370ea70')
    );

    expect([mockFuentes[2]]).toEqual(
      searchFuentes(mockFuentes, '5f0baba19b8a06df9cc7d9e0')
    );

    expect([mockFuentes[3]]).toEqual(
      searchFuentes(mockFuentes, '5f0baba106c8fda074f2652c')
    );

    expect([mockFuentes[4]]).toEqual(
      searchFuentes(mockFuentes, '5f0baba1aeda3e17e2f56dbc')
    );
  });

  test('Match random word', () => {
    expect([mockFuentes[0]]).toEqual(searchFuentes(mockFuentes, 'ENAUT'));

    expect([mockFuentes[1], mockFuentes[3]]).toEqual(
      searchFuentes(mockFuentes, 'exercitation')
    );

    expect([mockFuentes[4]]).toEqual(searchFuentes(mockFuentes, '2018-03-07'));

    expect([
      mockFuentes[0],
      mockFuentes[1],
      mockFuentes[2],
      mockFuentes[3],
    ]).toEqual(searchFuentes(mockFuentes, 'commodo'));
  });
});
