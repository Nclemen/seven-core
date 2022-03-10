import { newSpecPage } from '@stencil/core/testing';
import { SvnTextarea } from '../svn-textarea';

describe('svn-textarea', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SvnTextarea],
      html: `<svn-textarea></svn-textarea>`,
    });
    expect(page.root).toEqualHtml(`
      <svn-textarea>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </svn-textarea>
    `);
  });
});
