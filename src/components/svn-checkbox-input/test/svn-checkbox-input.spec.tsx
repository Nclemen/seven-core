import { newSpecPage } from '@stencil/core/testing';
import { SvnCheckboxInput } from '../svn-checkbox-input';

describe('svn-checkbox-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SvnCheckboxInput],
      html: `<svn-checkbox-input></svn-checkbox-input>`,
    });
    expect(page.root).toEqualHtml(`
      <svn-checkbox-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </svn-checkbox-input>
    `);
  });
});
