import React from 'react';
import { render } from '@testing-library/react';
import Terminal from './Terminal';

describe('Terminal component ', () => {
    it('renders without crash', () => {
        render(<Terminal />);
    });
});
