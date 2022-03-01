import { newE2EPage } from '@stencil/core/testing';

describe('svn-text-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<svn-text-input></svn-text-input>');

    const element = await page.find('svn-text-input');
    expect(element).toHaveClass('hydrated');
  });
});
