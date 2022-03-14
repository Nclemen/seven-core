import { newSpecPage } from '@stencil/core/testing';
import { SvnForm } from '../svn-form';

describe('svn-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SvnForm],
      html: `<svn-form></svn-form>`,
    });
    expect(page.root).toEqualHtml(`
      <svn-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </svn-form>
    `);
  });
});
