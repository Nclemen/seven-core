import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'svn-checkbox-input',
  styleUrl: 'svn-checkbox-input.css',
})
export class SvnCheckboxInput {

  /**
   * the id of component
   */
  @Prop() elId!: string;

  /**
   * the name of the input element
   */
  @Prop() name: string;

  /**
   * the value of the input element
   */
  @Prop() value: string;

  /**
   * used to set the checkbox to checked or not
   */
  @Prop() checked: boolean = false;




  render() {
    return (
      <Host id={this.elId} class="form-check">
            <input type="checkbox" value={this.value} name={this.name} checked={this.checked}></input>
            <label class="form-check-label inline-block text-gray-800" htmlFor={this.name}>
              {this.name}
            </label>
      </Host>
    );
  }

}
