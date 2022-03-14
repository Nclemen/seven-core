import { newE2EPage } from '@stencil/core/testing';

describe('svn-textarea', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<svn-textarea></svn-textarea>');

    const element = await page.find('svn-textarea');
    expect(element).toHaveClass('hydrated');
  });
});
