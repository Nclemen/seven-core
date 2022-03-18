import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'svn-chip',
  styleUrl: 'svn-chip.css',
  shadow: true,
})
export class SvnChip {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
