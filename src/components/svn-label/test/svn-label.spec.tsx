import { newSpecPage } from '@stencil/core/testing';
import { SvnLabel } from '../svn-label';

describe('svn-label', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SvnLabel],
      html: `<svn-label></svn-label>`,
    });
    expect(page.root).toEqualHtml(`
      <svn-label>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </svn-label>
    `);
  });
});
