import { newSpecPage } from '@stencil/core/testing';
import { SvnSelectInput } from '../svn-select-input';

describe('svn-select-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SvnSelectInput],
      html: `<svn-select-input></svn-select-input>`,
    });
    expect(page.root).toEqualHtml(`
      <svn-select-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </svn-select-input>
    `);
  });
});
