import React from 'react';
import { render } from '@testing-library/react';
import Tools from './Tools';

describe('Tools component ', () => {
    it('renders without errors', () => {
        render(<Tools />);
    });
})
