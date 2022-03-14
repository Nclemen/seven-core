import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'svn-textarea',
  styleUrl: 'svn-textarea.css',
  shadow: true,
})
export class SvnTextarea {
  /**
   * the id of the text area
   */
  @Prop() el_id: string;

  /**
   * the row for the textarea element
   */
  @Prop() rows: number;

  /**
   * the columns for the text area element
   */
  @Prop() cols: number;

  // /**
  //  * the name of the label which is being bound to textarea
  //  */
  // @Prop() lblname: string;

  /**
   * a placeholder for the textarea
   */
  @Prop() placeholder: string;

  /**
   * the maximum amount of characters for textarea
   */
  @Prop() maxlength: number;

  /**
   * the mininmal amount of character for textarea
   */
  @Prop() minlength: number;

  /**
   * the form which the text area belongs to
   */
  @Prop() form: string;

  /**
   * set to true to disable input for textarea (default = false)
   */
  @Prop() disabled: boolean = false;

  /**
   * the name attribute for textarea
   */
  @Prop() name: string;

  /**
   * set to on to turn on autocorrect(is turned off by default)
   */
  @Prop() autocorrect: string = "off";

  /**
   * set to true to automatically focus on the text area when page is loaded (disabled by default)
   */
  @Prop({ attribute: "focus"}) focusTarget: boolean = false;

  /**
   * turn on automatic capitalization
   */
  @Prop() autocapitalize: string;

  /**
   * set to true to turn on read only (this does not prevent the users from clicking or selecting in the control)
   */
  @Prop() readonly: string;

  /**
   * set to true if text area is a required field in forms
   */
  @Prop() required: boolean;

  /**
   * set to true to turn on spellcheck, to false to turn off spellcheck and default to use the default setting for spellcheck
   */
  @Prop() spell;

  /**
   * set to hard, soft or off
   */
  @Prop() wrap: string;

  /**
   * attribute to enable or disable resize
   */
  @Prop() resize_disable: boolean = false;



  render() {
    return (
            <textarea
              // class="form-control resize-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              class={{
                'resize-none' : this.resize_disable,
                'form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none': true
              }}
              id={this.el_id}
              rows={this.rows}
              cols={this.cols}
              placeholder={this.placeholder}
              maxlength={this.maxlength}
              minlength={this.minlength}
              form={this.form}
              disabled={this.disabled}
              name={this.name}
              autocorrect={this.autocorrect}
              autofocus={this.focusTarget}
              autocapitalize={this.autocapitalize}
              readonly={this.readonly}
              required={this.required}
              spellcheck={this.spell}
              wrap={this.wrap}
            >
              <slot></slot>
            </textarea>
    );
  }

}
