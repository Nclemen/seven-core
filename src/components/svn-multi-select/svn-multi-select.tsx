import {Component, Host, h, Prop, State, Watch} from '@stencil/core';

@Component({
  tag: 'svn-multi-select',
  styleUrl: 'svn-multi-select.css',
})
export class SvnMultiSelect {

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
  @Prop() multiple: boolean= false;

  /**
   * the name attribute for the select element
   */
  @Prop() name: string;

  /**
   * state to toggle option list
   */
  @State() list: boolean= true;

  @State() selected: any= [];

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

  toggleList(e){
    console.log('toggeling list')
    if(e.target == e.currentTarget){
      this.list = !this.list;
    }
  }

  toggleOption(option){
    let id =option.name + "-" + option.value;

    if (document.getElementById(id) != null && document.getElementById(id).hasAttribute('hidden')){
      console.log('removing hidden attribute');
      document.getElementById(id).removeAttribute('hidden');
    } else if (document.getElementById(id) != null) {
      console.log('adding hidden attribute')
      document.getElementById(id).setAttribute('hidden', 'true');
    }
  }

  selectOption(option){
    this.selected=[...this.selected, option];
    this.toggleOption(option);
  }

  deSelectOption(option){
    let index = this.selected.indexOf(option);
    if (index !== -1) {
     console.log(this.selected);
     // this.selected.splice(index, 1);
     console.log(this.selected);
     this.selected= this.selected.splice(index, 1);
     console.log(this.selected);
    }
    this.toggleOption(option);
  }

  render() {
    return (
      <Host>
        <div class="form-control shadow border block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" onClick={(e) => this.toggleList(e)}>
          {this.selected.map((option) =>
            <span
              onClick={() => this.deSelectOption(option)}
              class="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
                {option.name}
            </span>
          )}
        </div>
        <div class='border-gray-300 rounded' hidden={this.list}>
          {this.options.map((option) =>
            <span id={option.name + "-" + option.value} onClick={() => this.selectOption(option)}>{option.name}</span>
          )}
        </div>
      </Host>
    );
  }

}
