import { newSpecPage } from '@stencil/core/testing';
import { SvnAlert } from '../svn-alert';

describe('svn-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SvnAlert],
      html: `<svn-alert></svn-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <svn-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </svn-alert>
    `);
  });
});
