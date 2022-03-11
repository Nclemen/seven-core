import { newSpecPage } from '@stencil/core/testing';
import { SvnNumberInput } from '../svn-number-input';

describe('svn-number-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SvnNumberInput],
      html: `<svn-number-input></svn-number-input>`,
    });
    expect(page.root).toEqualHtml(`
      <svn-number-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </svn-number-input>
    `);
  });
});
