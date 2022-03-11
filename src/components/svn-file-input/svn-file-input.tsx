import {Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'svn-file-input',
  styleUrl: 'svn-file-input.css',
  shadow: true,
})
export class SvnFileInput {

  /**
   * the id of component
   */
  @Prop() el_id: string;

  @Prop() multiple: boolean =false;

  render() {
    return (
      <input type="file" id="img" name="img" accept="image/*" multiple={this.multiple} value='choose image'/>
    );
  }
}
