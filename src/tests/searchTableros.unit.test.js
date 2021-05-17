import { searchTableros } from '../redux/reducers/result';

const mockTableros = [
  {
    _id: '5f0badf11ea4db1df39532fb',
    index: 0,
    isActive: false,
    dashboardName: 'nostrud',
    visualType: [
      {
        name: 'exercitation',
      },
      {
        name: 'pariatur',
      },
    ],
    visuals: [
      {
        name: 'laboris',
        type: 'tempor',
      },
      {
        name: 'cillum',
        type: 'laborum',
      },
      {
        name: 'voluptate',
        type: 'sint',
      },
      {
        name: 'nisi',
        type: 'amet',
      },
    ],
    timestamp: {
      createdAt: '2014-11-11',
      updateAt: '2019-12-20',
    },
    description:
      'Nulla dolore reprehenderit proident consequat. Minim aliquip deserunt fugiat in fugiat cupidatat incididunt ad non non minim in cillum. Nostrud voluptate qui ullamco aliquip proident mollit eu est aliquip cupidatat. Proident deserunt consectetur ullamco Lorem ea occaecat enim. Anim id cupidatat quis adipisicing duis dolor aliquip aliqua. Lorem Lorem veniam occaecat sint sit deserunt nostrud tempor mollit eiusmod duis.\r\n',
    tags: [
      'labore',
      'quis',
      'occaecat',
      'deserunt',
      'irure',
      'laboris',
      'aliquip',
    ],
  },
  {
    _id: '5f0badf1cc648b5fea24ddbe',
    index: 1,
    isActive: false,
    dashboardName: 'culpa',
    visualType: [
      {
        name: 'duis',
      },
      {
        name: 'consequat',
      },
      {
        name: 'nisi',
      },
      {
        name: 'adipisicing',
      },
      {
        name: 'minim',
      },
    ],
    visuals: [
      {
        name: 'veniam',
        type: 'esse',
      },
      {
        name: 'culpa',
        type: 'ut',
      },
    ],
    timestamp: {
      createdAt: '2019-12-24',
      updateAt: '2019-02-04',
    },
    description:
      'Culpa ad laboris cupidatat amet irure cupidatat reprehenderit. Duis elit exercitation cillum adipisicing voluptate enim officia amet sint do dolor. Minim est consequat enim nisi incididunt Lorem do reprehenderit adipisicing ex. Culpa minim mollit deserunt ipsum fugiat amet eu veniam occaecat quis enim sint. Ex enim dolor sunt minim non ullamco in velit. Aute aliquip anim ullamco sint id pariatur qui. Cupidatat nostrud culpa voluptate culpa est do do nostrud enim nulla eu nostrud.\r\n',
    tags: ['fugiat', 'proident', 'qui', 'proident', 'tempor', 'non', 'esse'],
  },
  {
    _id: '5f0badf1ca9a6548734e014f',
    index: 2,
    isActive: false,
    dashboardName: 'pariatur',
    visualType: [
      {
        name: 'cillum',
      },
      {
        name: 'elit',
      },
      {
        name: 'elit',
      },
      {
        name: 'do',
      },
      {
        name: 'quis',
      },
    ],
    visuals: [
      {
        name: 'excepteur',
        type: 'officia',
      },
      {
        name: 'aute',
        type: 'anim',
      },
    ],
    timestamp: {
      createdAt: '2014-03-29',
      updateAt: '2014-03-04',
    },
    description:
      'Laborum amet fugiat labore cillum adipisicing pariatur velit ex ipsum nisi dolore ipsum. Consequat deserunt occaecat nisi do id. Ut ipsum reprehenderit dolore laborum esse exercitation fugiat incididunt aute ad. Officia anim laboris adipisicing ea enim reprehenderit sint dolore occaecat ea non exercitation magna sunt. Dolore anim nisi fugiat amet ex quis in incididunt deserunt est anim. Sint dolor id pariatur reprehenderit laborum pariatur deserunt sit occaecat. Voluptate commodo consectetur fugiat ea do elit aliquip quis cillum nostrud nostrud esse dolor aute.\r\n',
    tags: [
      'tempor',
      'aliquip',
      'officia',
      'culpa',
      'reprehenderit',
      'reprehenderit',
      'anim',
    ],
  },
  {
    _id: '5f0badf19f62d48054f509e4',
    index: 3,
    isActive: false,
    dashboardName: 'cupidatat',
    visualType: [
      {
        name: 'laborum',
      },
      {
        name: 'eiusmod',
      },
      {
        name: 'velit',
      },
    ],
    visuals: [
      {
        name: 'in',
        type: 'ex',
      },
      {
        name: 'cupidatat',
        type: 'exercitation',
      },
      {
        name: 'voluptate',
        type: 'ipsum',
      },
      {
        name: 'nulla',
        type: 'dolor',
      },
    ],
    timestamp: {
      createdAt: '2015-01-10',
      updateAt: '2014-01-08',
    },
    description:
      'Aliqua commodo incididunt exercitation ullamco labore sint. Labore veniam id tempor exercitation exercitation aliqua incididunt labore excepteur labore ipsum. Ullamco eu aliqua voluptate aute occaecat quis proident enim ex esse laborum fugiat dolore. Minim sint excepteur aliquip tempor. Laboris voluptate voluptate enim nulla duis velit sint nulla qui eu. Aliquip mollit ut qui magna laboris ullamco dolor do dolor exercitation mollit. Tempor culpa eiusmod sint esse cillum esse deserunt laboris adipisicing velit sint.\r\n',
    tags: ['dolore', 'eiusmod', 'quis', 'ut', 'id', 'nulla', 'aliquip'],
  },
  {
    _id: '5f0badf1381ff5986ea2b77c',
    index: 4,
    isActive: true,
    dashboardName: 'est',
    visualType: [
      {
        name: 'id',
      },
      {
        name: 'nulla',
      },
      {
        name: 'esse',
      },
      {
        name: 'aute',
      },
      {
        name: 'id',
      },
    ],
    visuals: [
      {
        name: 'aliqua',
        type: 'proident',
      },
      {
        name: 'ipsum',
        type: 'sint',
      },
      {
        name: 'deserunt',
        type: 'enim',
      },
      {
        name: 'proident',
        type: 'commodo',
      },
    ],
    timestamp: {
      createdAt: '2014-10-31',
      updateAt: '2016-02-22',
    },
    description:
      'Et ea aliqua nisi eiusmod aute reprehenderit occaecat dolor ad eiusmod. Velit exercitation nulla Lorem velit in duis. Voluptate do proident ex ad non labore. Ullamco nulla velit ipsum pariatur aliquip eu qui officia esse. Elit aliqua velit culpa dolore.\r\n',
    tags: [
      'qui',
      'nisi',
      'adipisicing',
      'veniam',
      'incididunt',
      'nisi',
      'tempor',
    ],
  },
  {
    _id: '5f0badf1f02d692b39e1868e',
    index: 5,
    isActive: true,
    dashboardName: 'voluptate',
    visualType: [
      {
        name: 'sint',
      },
      {
        name: 'consectetur',
      },
      {
        name: 'aliquip',
      },
    ],
    visuals: [
      {
        name: 'pariatur',
        type: 'deserunt',
      },
      {
        name: 'adipisicing',
        type: 'excepteur',
      },
    ],
    timestamp: {
      createdAt: '2019-10-22',
      updateAt: '2018-12-15',
    },
    description:
      'Lorem sint consequat ipsum minim aliquip tempor ullamco. Tempor reprehenderit sit dolor ipsum aute voluptate officia mollit nisi esse. Nisi adipisicing eiusmod dolore est ea velit est sunt cillum pariatur cillum.\r\n',
    tags: [
      'est',
      'officia',
      'Lorem',
      'consectetur',
      'Lorem',
      'consequat',
      'non',
    ],
  },
  {
    _id: '5f0badf1c90b2730d563d5d4',
    index: 6,
    isActive: true,
    dashboardName: 'minim',
    visualType: [
      {
        name: 'tempor',
      },
      {
        name: 'exercitation',
      },
      {
        name: 'consectetur',
      },
      {
        name: 'commodo',
      },
      {
        name: 'sint',
      },
    ],
    visuals: [
      {
        name: 'sint',
        type: 'officia',
      },
      {
        name: 'tempor',
        type: 'aliqua',
      },
    ],
    timestamp: {
      createdAt: '2020-02-21',
      updateAt: '2014-06-03',
    },
    description:
      'Ullamco quis labore officia aliquip. Esse id in ad do magna laborum ea ad incididunt esse. Nisi id esse officia qui in consequat minim aliqua esse amet culpa id. Pariatur eiusmod ut cupidatat voluptate ea consectetur consectetur fugiat mollit ad culpa eu. Minim et Lorem nostrud qui ipsum eu laboris. Lorem non deserunt ut amet fugiat consectetur eiusmod do. Laborum aute excepteur nisi irure veniam magna dolor veniam.\r\n',
    tags: [
      'incididunt',
      'occaecat',
      'aliquip',
      'reprehenderit',
      'mollit',
      'anim',
      'fugiat',
    ],
  },
  {
    _id: '5f0badf1b072626479f306ba',
    index: 7,
    isActive: true,
    dashboardName: 'aliqua',
    visualType: [
      {
        name: 'duis',
      },
      {
        name: 'et',
      },
      {
        name: 'irure',
      },
      {
        name: 'eiusmod',
      },
    ],
    visuals: [
      {
        name: 'nostrud',
        type: 'do',
      },
      {
        name: 'deserunt',
        type: 'do',
      },
      {
        name: 'dolore',
        type: 'magna',
      },
    ],
    timestamp: {
      createdAt: '2020-02-01',
      updateAt: '2019-03-04',
    },
    description:
      'Est do in voluptate culpa laboris incididunt do elit dolore eu eu nostrud anim deserunt. Deserunt aute in exercitation nostrud. Officia non laborum sint pariatur ad reprehenderit pariatur ullamco. Ipsum elit ad ad officia deserunt aute elit eiusmod sint ut.\r\n',
    tags: [
      'cillum',
      'Lorem',
      'tempor',
      'culpa',
      'cupidatat',
      'Lorem',
      'cillum',
    ],
  },
  {
    _id: '5f0badf1630d17e39f089afc',
    index: 8,
    isActive: false,
    dashboardName: 'do',
    visualType: [
      {
        name: 'laboris',
      },
      {
        name: 'anim',
      },
      {
        name: 'aliqua',
      },
      {
        name: 'ex',
      },
      {
        name: 'voluptate',
      },
    ],
    visuals: [
      {
        name: 'pariatur',
        type: 'aliqua',
      },
      {
        name: 'commodo',
        type: 'mollit',
      },
      {
        name: 'ex',
        type: 'qui',
      },
      {
        name: 'irure',
        type: 'magna',
      },
      {
        name: 'commodo',
        type: 'consectetur',
      },
    ],
    timestamp: {
      createdAt: '2018-02-12',
      updateAt: '2014-12-22',
    },
    description:
      'Deserunt labore irure proident velit Lorem ex anim reprehenderit ex magna ea pariatur. Id sunt non irure in cillum quis. Irure officia qui commodo mollit ex id incididunt. Aliquip do magna enim est aliquip aliquip ipsum.\r\n',
    tags: [
      'culpa',
      'fugiat',
      'aliquip',
      'nostrud',
      'minim',
      'laborum',
      'tempor',
    ],
  },
  {
    _id: '5f0badf14352f7e6eaab56bf',
    index: 9,
    isActive: false,
    dashboardName: 'adipisicing',
    visualType: [
      {
        name: 'nisi',
      },
      {
        name: 'laborum',
      },
      {
        name: 'nostrud',
      },
      {
        name: 'ut',
      },
      {
        name: 'deserunt',
      },
    ],
    visuals: [
      {
        name: 'occaecat',
        type: 'ut',
      },
      {
        name: 'dolor',
        type: 'dolore',
      },
      {
        name: 'ut',
        type: 'aliquip',
      },
      {
        name: 'eu',
        type: 'ad',
      },
      {
        name: 'occaecat',
        type: 'do',
      },
    ],
    timestamp: {
      createdAt: '2016-02-23',
      updateAt: '2016-10-15',
    },
    description:
      'Ut fugiat ullamco ullamco elit dolore nulla mollit sunt ipsum enim exercitation ut dolore. Voluptate Lorem ex ex fugiat nulla cupidatat fugiat cillum cupidatat ullamco. Sint non do reprehenderit irure non eu nulla sit ex magna incididunt. Consectetur in consequat exercitation id consequat commodo officia excepteur id consectetur. Do non irure ea officia dolore aliqua culpa occaecat irure nisi excepteur ex. Sint in duis ut quis ea culpa. Aliqua mollit non cupidatat tempor velit cillum culpa enim enim labore pariatur ex.\r\n',
    tags: ['dolor', 'enim', 'do', 'adipisicing', 'do', 'aliquip', 'laborum'],
  },
];

describe('searchTableros( arr, searchTerm )', () => {
  test('Unicity', () => {
    expect([mockTableros[0]]).toEqual(
      searchTableros(mockTableros, '5f0badf11ea4db1df39532fb')
    );

    expect([mockTableros[1]]).toEqual(
      searchTableros(mockTableros, '5f0badf1cc648b5fea24ddbe')
    );

    expect([mockTableros[2]]).toEqual(
      searchTableros(mockTableros, '5f0badf1ca9a6548734e014f')
    );

    expect([mockTableros[3]]).toEqual(
      searchTableros(mockTableros, '5f0badf19f62d48054f509e4')
    );

    expect([mockTableros[4]]).toEqual(
      searchTableros(mockTableros, '5f0badf1381ff5986ea2b77c')
    );

    expect([mockTableros[5]]).toEqual(
      searchTableros(mockTableros, '5f0badf1f02d692b39e1868e')
    );

    expect([mockTableros[6]]).toEqual(
      searchTableros(mockTableros, '5f0badf1c90b2730d563d5d4')
    );

    expect([mockTableros[7]]).toEqual(
      searchTableros(mockTableros, '5f0badf1b072626479f306ba')
    );

    expect([mockTableros[8]]).toEqual(
      searchTableros(mockTableros, '5f0badf1630d17e39f089afc')
    );

    expect([mockTableros[9]]).toEqual(
      searchTableros(mockTableros, '5f0badf14352f7e6eaab56bf')
    );
  });

  test('Match random word', () => {
    expect([
      mockTableros[0],
      mockTableros[1],
      mockTableros[3],
      mockTableros[6],
      mockTableros[7],
      mockTableros[9],
    ]).toEqual(searchTableros(mockTableros, 'cupidatat'));

    expect([
      mockTableros[0],
      mockTableros[2],
      mockTableros[5],
      mockTableros[6],
      mockTableros[8],
      mockTableros[9],
    ]).toEqual(searchTableros(mockTableros, 'consectetur'));

    expect([
      mockTableros[0],
      mockTableros[1],
      mockTableros[2],
      mockTableros[6],
      mockTableros[7],
      mockTableros[8],
      mockTableros[9],
    ]).toEqual(searchTableros(mockTableros, 'nostrud'));
  });
});
