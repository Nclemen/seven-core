import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'svn-text-input',
  styleUrl: 'svn-text-input.css',
  shadow: true,
})
export class SvnTextInput {

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
   * prop to determine which type of text input field is used
   */
  @Prop() type: string = "text";

  /**
   * the value of the input field
   */
  @Prop() value: string;

  /**
   * prop to determine whether or not the autocomplete is turned on for the input field
   */
  @Prop() autocomplete: boolean = false;

  render() {
    return (
      <Host>
        <input
          class="bg-black"
          // class={ (this.center ?  'textcenter' : 'bg-amber-400' ) }
          name={this.name}
          disabled={this.disabled}
          type={this.type}
          placeholder={this.placeholder}
          value={this.value}
          // autocomplete={this.autocomplete}
        />
        <slot></slot>
      </Host>
    );
  }

}
