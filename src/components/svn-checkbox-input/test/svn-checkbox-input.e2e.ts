import { newE2EPage } from '@stencil/core/testing';

describe('svn-checkbox-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<svn-checkbox-input></svn-checkbox-input>');

    const element = await page.find('svn-checkbox-input');
    expect(element).toHaveClass('hydrated');
  });
});
