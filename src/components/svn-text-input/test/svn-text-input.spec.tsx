import { newSpecPage } from '@stencil/core/testing';
import { SvnTextInput } from '../svn-text-input';

describe('svn-text-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SvnTextInput],
      html: `<svn-text-input></svn-text-input>`,
    });
    expect(page.root).toEqualHtml(`
      <svn-text-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </svn-text-input>
    `);
  });
});
