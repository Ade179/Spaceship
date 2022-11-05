/**
 * @jest-environment jsdom
 */

import InvolvementService from '../modules/InvolvementService.js';

describe('Testing comments counter', () => {
  test('Getting count for comments', () => {
    const data = [
      {
        comment: 'This is nice',
        username: 'abi',
        creation_date: '2022-11-06',
      },
      {
        comment: 'Lets get together',
        username: 'dele',
        creation_date: '2022-11-07',
      },
      {
        comment: 'Lets get together',
        username: 'Bob',
        creation_date: '2022-11-19',
      },
    ];
    // const luanches = LaunchUI.renderLaunches();
    const comments = InvolvementService.getCommentsCount(data);
    expect(comments).toBe(3);
  });
});