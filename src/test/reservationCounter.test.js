/**
 * @jest-environment jsdom
 */

import InvolvementService from '../modules/InvolvementService.js';

describe('Testing reservation counter', () => {
  test('Getting count for reservationss', () => {
    const data = [
      {
        username: 'Bob',
        start_date: '2022-07-27',
        end_date: '2022-07-27',
      },
      {
        username: 'becky',
        start_date: '2022-07-27',
        end_date: '2022-07-27',
      },
      {
        username: 'marley',
        start_date: '2022-07-27',
        end_date: '2022-07-27',
      },
      {
        username: 'Bisi',
        start_date: '2022-07-27',
        end_date: '2022-07-27',
      },
      {
        username: 'Bludidi',
        start_date: '2022-07-27',
        end_date: '2022-07-27',
      },

    ];
    const reservations = InvolvementService.getReservationsCount(data);
    expect(reservations).toBe(5);
  });
});