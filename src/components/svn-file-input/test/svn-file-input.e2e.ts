import { newE2EPage } from '@stencil/core/testing';

describe('svn-file-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<svn-file-input></svn-file-input>');

    const element = await page.find('svn-file-input');
    expect(element).toHaveClass('hydrated');
  });
});
