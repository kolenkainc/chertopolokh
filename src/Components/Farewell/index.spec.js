import Farewell from './index.svelte';
import { render } from '@testing-library/svelte'
import { calculateDuration } from './index.js';

describe('Sample', () => {
    it('renders without failing', () => {
        const { container, getAllByText } = render(Farewell)

        expect(getAllByText('Чертополох').length).toBe(1)
        expect(getAllByText('Команда Kolenka Inc.').length).toBe(1)
        expect(container).toMatchSnapshot()
    });

    it('duration about half year', () => {
        const time = calculateDuration(new Date('2020-05-01T03:03:03'));
        expect(time).toBe('этого полугодия');
    });

    it('duration about one year', () => {
        const time = calculateDuration(new Date('2020-12-01T03:03:03'));
        expect(time).toBe('этого года');
    });

    it('duration about one and half year', () => {
        const time = calculateDuration(new Date('2021-05-01T03:03:03'));
        expect(time).toBe('этих полутора лет');
    });

    it('duration about two years', () => {
        const time = calculateDuration(new Date('2021-12-01T03:03:03'));
        expect(time).toBe('этих двух лет');
    });

    it('duration about more than 3 years', () => {
        const time = calculateDuration(new Date('2022-12-01T03:03:03'));
        expect(time).toBe('этих лет');
    });
});
