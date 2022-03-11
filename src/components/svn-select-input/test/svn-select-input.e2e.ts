import { newE2EPage } from '@stencil/core/testing';

describe('svn-select-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<svn-select-input></svn-select-input>');

    const element = await page.find('svn-select-input');
    expect(element).toHaveClass('hydrated');
  });
});
