import { newSpecPage } from '@stencil/core/testing';
import { SvnChip } from '../svn-chip';

describe('svn-chip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SvnChip],
      html: `<svn-chip></svn-chip>`,
    });
    expect(page.root).toEqualHtml(`
      <svn-chip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </svn-chip>
    `);
  });
});
