import {Component, h, Prop, Watch} from '@stencil/core';

@Component({
  tag: 'svn-select-input',
  styleUrl: 'svn-select-input.css',
})
export class SvnSelectInput {

  /**
   * the id of component
   */
  @Prop() elId!: string;

  /**
   * an array of options for the select element with name and value
   */
  @Prop({mutable:true}) options: any;

  /**
   * value to turn multiple file select on or off
   */
  @Prop() multiple: boolean =false;

  /**
   * JSON parse options array to automatically render the options
   *
   * @param newValue
   */
  @Watch('options')
  arrayDataWatcher(newValue) {
    if (typeof newValue === 'string') {
      this.options = JSON.parse(newValue);
    } else {
      this.options = newValue;
    }
  }

  /**
   * change options before it starts to render
   */
  componentWillLoad() {
    this.arrayDataWatcher(this.options);
  }

  render() {
    return (
      <select id={this.elId}
              class={{
                'form-control block w-full': true,
                'block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline': true
              }}>
        {this.options.map((option) =>
          <option value={option.value ? option.value : ""}>{option.name}</option>
        )}
      </select>
    );
  }
}
