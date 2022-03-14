import { newE2EPage } from '@stencil/core/testing';

describe('svn-label', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<svn-label></svn-label>');

    const element = await page.find('svn-label');
    expect(element).toHaveClass('hydrated');
  });
});
