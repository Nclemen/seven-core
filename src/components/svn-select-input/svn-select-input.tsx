import {Component, h, Host, Prop, State, Watch} from '@stencil/core';

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

  @Prop() options =  "[{'name': 'option 1', 'value': 'cheese'}, {'name': 'option 2', 'value': 'sausage'}, {'name': 'option 3', 'value': 'chicken'}, {'name': 'option 4', 'value': 'beef'},]";

  @State() innerOptions: any;

  @Prop() multiple: boolean =false;

  @Watch('options')
  arrayDataWatcher(newValue) {
    if (typeof newValue === 'string') {
      console.log(JSON.parse(newValue));
      // this.innerOptions = JSON.parse(newValue);
      console.log(this.innerOptions);
    }
    else {
      console.log('options is not a string, inner options value is:' + this.innerOptions );

      this.innerOptions = newValue;
    }
  }

  // componentWillRender() {
  //   this.innerOptions = this.options.split('}, ')
  //   // console.log('the component will render, the options are now: ' + this.options);
  // }

  componentWillLoad() {
    // console.log('the component will load, the options are now: ' + this.options);
    // this.logOptions();
    console.log('component will load');
    this.arrayDataWatcher(this.options);
  }

  logOptions(){
   console.log(this.innerOptions);
  }


  render() {
    return (
      <Host>
    <button onClick={() => this.logOptions()}>
      click me
    </button>
    <select id={this.el_id}>
      <option>empty option</option>
      {this.innerOptions.map((option) =>
        <option value={option.value ? option.value : ""}>{option.name}</option>
      )}
    </select>
      </Host>
  );
  }
}
