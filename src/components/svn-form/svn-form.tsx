import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'svn-form',
  styleUrl: 'svn-form.css',
  shadow: true,
})
export class SvnForm {

  render() {
    return (
      <Host>
        <form class="w-full max-w-screen-md shadow-md rounded">
          <slot></slot>
        </form>
      </Host>
    );
  }

}
