import {Component, Host, h, Prop} from '@stencil/core';

@Component({
  tag: 'svn-checkbox-input',
  styleUrl: 'svn-checkbox-input.css',
  shadow: true,
})
export class SvnCheckboxInput {

  /**
   * the id of component
   */
  @Prop() el_id: string;

  /**
   * an array containing information for the radio options
   *
   * every option object contains a name, id and value
   */
  @Prop({mutable:true}) options: any;

  @Prop() name: string;

  @Prop() value: string;


  render() {
    return (
      <Host id={this.el_id} class="form-check">
            <input type="checkbox" value={this.value} name={this.name}></input>
            <label class="form-check-label inline-block text-gray-800" htmlFor={this.name}>
              {this.name}
            </label>
      </Host>
    );
  }

}
