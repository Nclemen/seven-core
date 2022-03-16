import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'svn-label',
  styleUrl: 'svn-label.css',
})
export class SvnLabel {
  /**
   * the id of the element that the label belongs to
   */
  @Prop() owner!: string;

  /**
   * the text displayed by the label
   */
  @Prop() text: string;

  render() {
    return (
        <label htmlFor={this.owner} class="block text-gray-500 text-sm font-bold mb-2">{this.text}<slot></slot></label>
    );
  }
}
