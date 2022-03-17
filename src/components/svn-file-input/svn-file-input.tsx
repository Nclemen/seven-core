import {Component, h, Host, Prop, Watch} from '@stencil/core';

@Component({
  tag: 'svn-file-input',
  styleUrl: 'svn-file-input.css',
})
export class SvnFileInput {

  /**
   * the id of the component element
   */
  @Prop() elId!: string;

  /**
   * set to true to turn on multiple file select
   */
  @Prop() multiple: boolean =false;

  /**
   * the text for the label
   */
  @Prop() lblText: string;

  /**
   * the type of file that can be uploaded
   */
  @Prop() fileType!: string;

  /**
   * function to trigger file input when button is clicked
   */
  handleClick() {
    document.getElementById(this.elId).click();
  };

  /**
   * validate prop elId to see if it is empty
   *
   * @param newValue
   * @param _oldValue
   */
  @Watch('elId')
  validateName(newValue: string, _oldValue: string) {
    const isBlank = typeof newValue !== 'string' || newValue === '';
    if (isBlank) {
      throw new Error('elId is a required property and cannot be empty')
    };
  }

  getFileType() {
    switch (this.fileType) {
      case 'image':
        return 'image/*';
      case 'audio':
        return 'audio/*';
      case 'video':
        return 'video/*';
    }
  }

  render() {
    return (
      <Host>
        <input type="file" id={this.elId} name="img" accept={this.getFileType()} multiple={this.multiple} value='choose image' hidden/>
        <svn-label owner={this.elId} text={this.lblText}>
        <button type="button" onClick={() => this.handleClick()} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">upload file</button>
        </svn-label>
      </Host>
    );
  }
}
