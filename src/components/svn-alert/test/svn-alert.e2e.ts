import { newE2EPage } from '@stencil/core/testing';

describe('svn-alert', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<svn-alert></svn-alert>');

    const element = await page.find('svn-alert');
    expect(element).toHaveClass('hydrated');
  });
});
