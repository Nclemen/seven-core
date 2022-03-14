import { newE2EPage } from '@stencil/core/testing';

describe('svn-radio-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<svn-radio-input></svn-radio-input>');

    const element = await page.find('svn-radio-input');
    expect(element).toHaveClass('hydrated');
  });
});
