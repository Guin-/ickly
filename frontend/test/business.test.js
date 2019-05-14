import React from 'react';
import { render, cleanup } from 'react-testing-library'
import Business from '../app/components/business';

afterEach(cleanup)

it('Business component renders data of selected business', () => {
    const mockBusiness = {
      name: 'restaurant',
      phone: '5555555555'
    }
    const { getByText } = render(<Business business={mockBusiness} />,)
    expect(getByText('restaurant'))
    expect(getByText('(555) 555-5555'))
})
