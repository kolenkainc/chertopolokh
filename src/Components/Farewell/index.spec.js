import Farewell from './index.svelte';
import { render } from '@testing-library/svelte'
import { calculateDuration } from './duration.js';

describe('Sample', () => {
    it('renders without failing', () => {
        const { container, getAllByText } = render(Farewell)

        expect(getAllByText('Чертополох').length).toBe(1)
        expect(getAllByText('Команда Kolenka Inc.').length).toBe(1)
        expect(container).toMatchSnapshot()
    });

    it('duration about half year', () => {
        const time = calculateDuration(new Date('2020-05-01T03:03:03'));
        expect(time).toBe('закончилось полгода назад');
    });

    it('duration about one year', () => {
        const time = calculateDuration(new Date('2020-12-01T03:03:03'));
        expect(time).toBe('закончилось год назад');
    });

    it('duration about one and half year', () => {
        const time = calculateDuration(new Date('2021-05-01T03:03:03'));
        expect(time).toBe('закончилось полтора года назад');
    });

    it('duration about two years', () => {
        const time = calculateDuration(new Date('2021-12-01T03:03:03'));
        expect(time).toBe('закончилось два года назад');
    });

    it('duration about more than 2 years', () => {
        const time = calculateDuration(new Date('2022-12-01T03:03:03'));
        expect(time).toBe('закончилось больше двух лет назад');
    });
});
