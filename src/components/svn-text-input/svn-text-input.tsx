import {Component, Host, Prop, h} from '@stencil/core';

@Component({
  tag: 'svn-text-input',
  styleUrl: 'svn-text-input.css',
})
export class SvnTextInput {

  /**
   * the id of the component element
   */
  @Prop() elId!: string;

  /**
   * the name of the element
   */
  @Prop() name!: string;

  /**
   * the text for the label
   */
  @Prop() lblText: string;

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

  /**
   * turn autocomplete off or on based on the autocomplete prop
   */
  getAutocomplete(){
    if (this.autocomplete){
      return 'on';
    } else {
      return 'off';
    }
  }

  render() {
    return (
      <Host>
        <svn-label text={this.lblText} owner={this.elId}>
          <input
            id={this.elId}
            class={{
              "form-control shadow border block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none": true,
              "text-center": this.center,
            }}
            name={this.name}
            disabled={this.disabled}
            type="text"
            placeholder={this.placeholder}
            value={this.value}
            autocomplete={this.getAutocomplete()}
          />
        </svn-label>
      </Host>
    );
  }
}
