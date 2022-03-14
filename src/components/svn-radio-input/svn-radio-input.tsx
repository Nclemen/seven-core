import {Component, Host, h, Prop, Watch} from '@stencil/core';

@Component({
  tag: 'svn-radio-input',
  styleUrl: 'svn-radio-input.css',
  shadow: true,
})
export class SvnRadioInput {

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

  // @ts-ignore
  @Prop() inputName: string;

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
      <Host id={this.inputName}>
        {this.options.map((option) =>
          <div class="form-check">
            <input type="radio" value={option.value} name={this.inputName}></input>
            {/*<svn-label owner={this.el_id}>{option.value}</svn-label>*/}
            <label class="form-check-label inline-block text-gray-800" htmlFor={this.el_id}>
              {option.value}
            </label>
          </div>
        )}
      </Host>
    );
  }

}
