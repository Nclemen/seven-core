import {Component, Element, h, Host, Listen, Prop} from '@stencil/core';

@Component({
  tag: 'svn-file-input',
  styleUrl: 'svn-file-input.css',
  scoped: true,
})
export class SvnFileInput {

  /**
   * the id of component
   */
  @Prop() el_id: string;

  /**
   * set to true to turn on multiple file select
   */
  @Prop() multiple: boolean =false;

  @Element() el: HTMLElement;

  @Listen('click')
  handleClick() {
    console.log(this.el.querySelector('#'+this.el_id));
    document.getElementById(this.el_id).click();
  }

  render() {
    return (
      <Host>
        <input type="file" id={this.el_id} name="img" accept="image/*" multiple={this.multiple} value='choose image' hidden/>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">upload file</button>
      </Host>
    );
  }
}
