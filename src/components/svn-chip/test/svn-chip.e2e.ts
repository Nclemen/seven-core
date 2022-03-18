import { newE2EPage } from '@stencil/core/testing';

describe('svn-chip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<svn-chip></svn-chip>');

    const element = await page.find('svn-chip');
    expect(element).toHaveClass('hydrated');
  });
});
