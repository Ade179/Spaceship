/**
 * @jest-environment jsdom
 */

import LaunchService from '../modules/LaunchService.js';

describe('Testing items counter', () => {
  test('Getting item count for list', () => {
    const data = [
      {
        id: '1',
        lsp_name: 'Launch Service Provider 1',
        mission_type: 'mars',
        name: 'Falcon 9 Block 5 | KPLO (Korean Pathfinder Lunar Orbiter)',
        pad: 'pad1',
        location: 'location1',
        image: 'image1',
      },
      {
        id: '2',
        lsp_name: 'Launch Service Provider 2',
        mission_type: 'mars',
        name: 'Falcon 9 Block 5 | KPLO (Korean Pathfinder Lunar Orbiter)',
        pad: 'pad2',
        location: 'location2',
        image: 'image2',
      },
      {
        id: '3',
        lsp_name: 'Launch Service Provider 1',
        mission_type: 'mars',
        name: 'Falcon 9 Block 5 | KPLO (Korean Pathfinder Lunar Orbiter)',
        pad: 'pad1',
        location: 'location1',
        image: 'image1',
      },
      {
        id: '4',
        lsp_name: 'Launch Service Provider 1',
        mission_type: 'mars',
        name: 'Falcon 9 Block 5 | KPLO (Korean Pathfinder Lunar Orbiter)',
        pad: 'pad1',
        location: 'location1',
        image: 'image1',
      },
    ];
    // const luanches = LaunchUI.renderLaunches();
    const launches = LaunchService.getLauchCount(data);
    expect(launches).toBe(4);
  });
});