import { newSpecPage } from '@stencil/core/testing';
import { SvnMultiSelect } from '../svn-multi-select';

describe('svn-multi-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SvnMultiSelect],
      html: `<svn-multi-select></svn-multi-select>`,
    });
    expect(page.root).toEqualHtml(`
      <svn-multi-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </svn-multi-select>
    `);
  });
});
