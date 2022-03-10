import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'svn-text-input',
  styleUrl: 'svn-text-input.css',
  shadow: true,
})
export class SvnTextInput {

  /**
   * the id of the component element
   */
  @Prop() el_id:string;

  /**
   * the name of the element
   */
  @Prop() name:string;

  /**
   * the placeholder for the text input
   */
  @Prop() placeholder: string;

  /**
   * prop to determine whether or not the text is put in the center of the input
   */
  @Prop() center: boolean = false;

  /**
   * prop to determine whether or not the input field is disabled or not
   */
  @Prop() disabled: boolean = false;

  /**
   * the value of the input field
   */
  @Prop() value: string;

  /**
   * prop to determine whether or not the autocomplete is turned on for the input field
   */
  @Prop() autocomplete: boolean = false;

  @Prop({ mutable: true }) symbol: string = "$";

  changeSymbol(){
    this.symbol == 'hello';
    console.log(this);
  }

  render() {
    return (
      <Host>
        <input
          // class="text-center"
          id={this.el_id}
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          name={this.name}
          disabled={this.disabled}
          type="text"
          placeholder={this.placeholder}
          value={this.value}
          // autocomplete={this.autocomplete}
        />
      </Host>
    );
  }

}
