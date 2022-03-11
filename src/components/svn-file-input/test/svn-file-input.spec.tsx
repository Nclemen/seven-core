import { newSpecPage } from '@stencil/core/testing';
import { SvnFileInput } from '../svn-file-input';

describe('svn-file-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SvnFileInput],
      html: `<svn-file-input></svn-file-input>`,
    });
    expect(page.root).toEqualHtml(`
      <svn-file-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </svn-file-input>
    `);
  });
});
