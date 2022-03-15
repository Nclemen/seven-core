import {Component, h, Prop, Watch} from '@stencil/core';

@Component({
  tag: 'svn-select-input',
  styleUrl: 'svn-select-input.css',
  shadow: true,
})
export class SvnSelectInput {

  /**
   * the id of component
   */
  @Prop() el_id: string;

  @Prop({mutable:true}) options: any;

  @Prop() multiple: boolean =false;

  @Watch('options')
  arrayDataWatcher(newValue) {
    if (typeof newValue === 'string') {
      this.options = JSON.parse(newValue);
    } else {
      this.options = newValue;
    }
  }

  componentWillLoad() {
    this.arrayDataWatcher(this.options);
  }

  render() {
    return (
      <select id={this.el_id}
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