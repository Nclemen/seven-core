import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'svn-label',
  styleUrl: 'svn-label.css',
  shadow: true,
})
export class SvnLabel {
  @Prop() owner: string;

  render() {
    return (
        <label htmlFor={this.owner} class="block text-gray-500 text-sm font-bold mb-2"><slot></slot></label>
    );
  }

}
