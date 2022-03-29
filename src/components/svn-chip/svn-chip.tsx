import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'svn-chip',
  styleUrl: 'svn-chip.css',
})
export class SvnChip {

  render() {
    return (
      <Host>
          <span class="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
            <slot></slot>
          </span>
      </Host>
    );
  }

}
