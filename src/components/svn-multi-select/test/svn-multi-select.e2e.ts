import { newE2EPage } from '@stencil/core/testing';

describe('svn-multi-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<svn-multi-select></svn-multi-select>');

    const element = await page.find('svn-multi-select');
    expect(element).toHaveClass('hydrated');
  });
});
