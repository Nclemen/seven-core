import { newSpecPage } from '@stencil/core/testing';
import { SvnRadioInput } from '../svn-radio-input';

describe('svn-radio-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SvnRadioInput],
      html: `<svn-radio-input></svn-radio-input>`,
    });
    expect(page.root).toEqualHtml(`
      <svn-radio-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </svn-radio-input>
    `);
  });
});
