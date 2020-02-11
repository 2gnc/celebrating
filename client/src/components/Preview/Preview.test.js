import React from 'react';
import { render } from '@testing-library/react';
import Preview from './Preview';

describe('Preview component ', () => {
    it('renders without crash', () => {
        render(<Preview />);
    });
});
