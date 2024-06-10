import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../app/page';

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />);

        // 렌더링된 DOM을 출력합니다.
        screen.debug();

        // heading 역할과 "Welcome to Next.js!" 텍스트를 가진 요소를 찾습니다.
        const heading = screen.getByRole('heading', { name: /docs/i });

        expect(heading).toBeInTheDocument();
    });
});
