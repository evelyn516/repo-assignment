import { default as Result } from '.';
import { screen, render } from '@testing-library/react';

describe('Result', () => {
    beforeEach(() => {
        const resultStub = { 
            name: 'Hello',
            description: 'world',
            id: 1,
            forks_count: 5,
            watchers_count: 6,
            created_at: 2022-3-4,
            updated_at: 2022-3-5,
            clone_url: 'www.github.com'
         };
        render(<Result result={resultStub}/>);
    });

    test('it has an id of repo.id', async () => {
        /*  */
    });

    test('it displays repo name', async () => {
        const name = await screen.findByText("Hello");
        expect(name).toBeInTheDocument();
    });

    test('it displays repo description', async () => {
        const description = await screen.findByText("world");
        expect(description).toBeInTheDocument();
    });
 
});
