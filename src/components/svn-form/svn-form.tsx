import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'svn-form',
  styleUrl: 'svn-form.css',
})
export class SvnForm {
  /**
   * the id of the form
   */
  @Prop() elId!: string;

  /**
   * the name of the form
   */
  @Prop() name: string;

  render() {
    return (
      <Host>
        <form id={this.elId} class="w-full max-w-screen-md shadow-md rounded" name={this.name}>
          <slot></slot>
        </form>
      </Host>
    );
  }
}
