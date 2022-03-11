import { newE2EPage } from '@stencil/core/testing';

describe('svn-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<svn-form></svn-form>');

    const element = await page.find('svn-form');
    expect(element).toHaveClass('hydrated');
  });
});
