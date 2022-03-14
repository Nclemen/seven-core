import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'svn-number-input',
  styleUrl: 'svn-number-input.css',
  shadow: true,
})
export class SvnNumberInput {

  /**
   * the id of component
   */
  @Prop() el_id: string;

  /**
   * the name of the number input element
   */
  @Prop() name:string = "";

  /**
   * the placeholder for the number input
   */
  @Prop() placeholder: string = "";


  /**
   * prop to determine whether or not the input field is disabled or not
   */
  @Prop() disabled: boolean = false;

  /**
   * prop to determine whether or not the input field is readonly or not
   */
  @Prop() readonly: boolean = false;

  /**
   * the value of the input field
   */
  @Prop() value: string = "";

  /**
   * the minimal number of the input field
   */
  @Prop() min: number;

  /**
   * the maximum number of the input field
   */
  @Prop() max: number;

  /**
   * a list of possible options that can be chosen from
   */
  @Prop() list;

  /**
   * the number step size which is allowed
   */
  @Prop() step: number;

  /**
   * prop to determine whether or not the autocomplete is turned on for the input field
   */
  @Prop() autocomplete: boolean = false;

  render() {
    return (
        <input class="form-control block w-full rounded shadow border focus:border-none border-gray-300"
               id={this.el_id}
               type="number"
               disabled={this.disabled}
               name={this.name}
               readonly={this.readonly}
               min={this.min}
               max={this.max}
               list={this.list}
               placeholder={this.placeholder}
               step={this.step}
               value={this.value}
        />
    );
  }

}
