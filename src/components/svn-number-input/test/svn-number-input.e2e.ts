import { newE2EPage } from '@stencil/core/testing';

describe('svn-number-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<svn-number-input></svn-number-input>');

    const element = await page.find('svn-number-input');
    expect(element).toHaveClass('hydrated');
  });
});
