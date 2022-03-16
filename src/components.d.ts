/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface SvnCheckboxInput {
        /**
          * the id of component
         */
        "elId": string;
        /**
          * the name of the input element
         */
        "name": string;
        /**
          * the value of the input element
         */
        "value": string;
    }
    interface SvnFileInput {
        /**
          * the id of the component element
         */
        "elId": string;
        /**
          * the type of file that can be uploaded
         */
        "fileType": string;
        /**
          * the text for the label
         */
        "lblText": string;
        /**
          * set to true to turn on multiple file select
         */
        "multiple": boolean;
    }
    interface SvnForm {
        /**
          * the id of the form
         */
        "elId": string;
        /**
          * the name of the form
         */
        "name": string;
    }
    interface SvnLabel {
        /**
          * the id of the element that the label belongs to
         */
        "owner": string;
        /**
          * the text displayed by the label
         */
        "text": string;
    }
    interface SvnNumberInput {
        /**
          * prop to determine whether or not the autocomplete is turned on for the input field
         */
        "autocomplete": boolean;
        /**
          * prop to determine whether or not the input field is disabled or not
         */
        "disabled": boolean;
        /**
          * the id of the number input
         */
        "elId": string;
        /**
          * a list of possible options that can be chosen from
         */
        "list": any;
        /**
          * the maximum number of the input field
         */
        "max": number;
        /**
          * the minimal number of the input field
         */
        "min": number;
        /**
          * the name of the number input element
         */
        "name": string;
        /**
          * the placeholder for the number input
         */
        "placeholder": string;
        /**
          * prop to determine whether or not the input field is readonly or not
         */
        "readonly": boolean;
        /**
          * the number step size which is allowed
         */
        "step": number;
        /**
          * the value of the input field
         */
        "value": string;
    }
    interface SvnRadioInput {
        /**
          * the id of component
         */
        "elId": string;
        /**
          * the name for the input
         */
        "inputName": string;
        /**
          * an array containing information for the radio options  every option object contains a name, id and value
         */
        "options": any;
    }
    interface SvnSelectInput {
        /**
          * the id of component
         */
        "elId": string;
        /**
          * value to turn multiple file select on or off
         */
        "multiple": boolean;
        /**
          * an array of options for the select element with name and value
         */
        "options": any;
    }
    interface SvnTextInput {
        /**
          * prop to determine whether or not the autocomplete is turned on for the input field
         */
        "autocomplete": boolean;
        /**
          * prop to determine whether or not the text is put in the center of the input
         */
        "center": boolean;
        /**
          * prop to determine whether or not the input field is disabled or not
         */
        "disabled": boolean;
        /**
          * the id of the component element
         */
        "elId": string;
        /**
          * the text for the label
         */
        "lblText": string;
        /**
          * the name of the element
         */
        "name": string;
        /**
          * the placeholder for the text input
         */
        "placeholder": string;
        /**
          * the value of the input field
         */
        "value": string;
    }
    interface SvnTextarea {
        /**
          * turn on automatic capitalization
         */
        "autocapitalize": string;
        /**
          * set to on to turn on autocorrect(is turned off by default)
         */
        "autocorrect": string;
        /**
          * the columns for the text area element
         */
        "cols": number;
        /**
          * set to true to disable input for textarea (default = false)
         */
        "disabled": boolean;
        /**
          * the id of the textarea
         */
        "elId": string;
        /**
          * set to true to automatically focus on the text area when page is loaded (disabled by default)
         */
        "focusTarget": boolean;
        /**
          * the form which the text area belongs to
         */
        "form": string;
        /**
          * the maximum amount of characters for textarea
         */
        "maxlength": number;
        /**
          * the mininmal amount of character for textarea
         */
        "minlength": number;
        /**
          * the name attribute for textarea
         */
        "name": string;
        /**
          * a placeholder for the textarea
         */
        "placeholder": string;
        /**
          * set to true to turn on read only (this does not prevent the users from clicking or selecting in the control)
         */
        "readonly": string;
        /**
          * set to true if text area is a required field in forms
         */
        "required": boolean;
        /**
          * attribute to enable or disable resize
         */
        "resizeDisable": boolean;
        /**
          * the row for the textarea element
         */
        "rows": number;
        /**
          * set to true to turn on spellcheck, to false to turn off spellcheck and default to use the default setting for spellcheck
         */
        "spell": any;
        /**
          * set to hard, soft or off
         */
        "wrap": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSvnCheckboxInputElement extends Components.SvnCheckboxInput, HTMLStencilElement {
    }
    var HTMLSvnCheckboxInputElement: {
        prototype: HTMLSvnCheckboxInputElement;
        new (): HTMLSvnCheckboxInputElement;
    };
    interface HTMLSvnFileInputElement extends Components.SvnFileInput, HTMLStencilElement {
    }
    var HTMLSvnFileInputElement: {
        prototype: HTMLSvnFileInputElement;
        new (): HTMLSvnFileInputElement;
    };
    interface HTMLSvnFormElement extends Components.SvnForm, HTMLStencilElement {
    }
    var HTMLSvnFormElement: {
        prototype: HTMLSvnFormElement;
        new (): HTMLSvnFormElement;
    };
    interface HTMLSvnLabelElement extends Components.SvnLabel, HTMLStencilElement {
    }
    var HTMLSvnLabelElement: {
        prototype: HTMLSvnLabelElement;
        new (): HTMLSvnLabelElement;
    };
    interface HTMLSvnNumberInputElement extends Components.SvnNumberInput, HTMLStencilElement {
    }
    var HTMLSvnNumberInputElement: {
        prototype: HTMLSvnNumberInputElement;
        new (): HTMLSvnNumberInputElement;
    };
    interface HTMLSvnRadioInputElement extends Components.SvnRadioInput, HTMLStencilElement {
    }
    var HTMLSvnRadioInputElement: {
        prototype: HTMLSvnRadioInputElement;
        new (): HTMLSvnRadioInputElement;
    };
    interface HTMLSvnSelectInputElement extends Components.SvnSelectInput, HTMLStencilElement {
    }
    var HTMLSvnSelectInputElement: {
        prototype: HTMLSvnSelectInputElement;
        new (): HTMLSvnSelectInputElement;
    };
    interface HTMLSvnTextInputElement extends Components.SvnTextInput, HTMLStencilElement {
    }
    var HTMLSvnTextInputElement: {
        prototype: HTMLSvnTextInputElement;
        new (): HTMLSvnTextInputElement;
    };
    interface HTMLSvnTextareaElement extends Components.SvnTextarea, HTMLStencilElement {
    }
    var HTMLSvnTextareaElement: {
        prototype: HTMLSvnTextareaElement;
        new (): HTMLSvnTextareaElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "svn-checkbox-input": HTMLSvnCheckboxInputElement;
        "svn-file-input": HTMLSvnFileInputElement;
        "svn-form": HTMLSvnFormElement;
        "svn-label": HTMLSvnLabelElement;
        "svn-number-input": HTMLSvnNumberInputElement;
        "svn-radio-input": HTMLSvnRadioInputElement;
        "svn-select-input": HTMLSvnSelectInputElement;
        "svn-text-input": HTMLSvnTextInputElement;
        "svn-textarea": HTMLSvnTextareaElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface SvnCheckboxInput {
        /**
          * the id of component
         */
        "elId": string;
        /**
          * the name of the input element
         */
        "name"?: string;
        /**
          * the value of the input element
         */
        "value"?: string;
    }
    interface SvnFileInput {
        /**
          * the id of the component element
         */
        "elId": string;
        /**
          * the type of file that can be uploaded
         */
        "fileType": string;
        /**
          * the text for the label
         */
        "lblText"?: string;
        /**
          * set to true to turn on multiple file select
         */
        "multiple"?: boolean;
    }
    interface SvnForm {
        /**
          * the id of the form
         */
        "elId": string;
        /**
          * the name of the form
         */
        "name"?: string;
    }
    interface SvnLabel {
        /**
          * the id of the element that the label belongs to
         */
        "owner": string;
        /**
          * the text displayed by the label
         */
        "text"?: string;
    }
    interface SvnNumberInput {
        /**
          * prop to determine whether or not the autocomplete is turned on for the input field
         */
        "autocomplete"?: boolean;
        /**
          * prop to determine whether or not the input field is disabled or not
         */
        "disabled"?: boolean;
        /**
          * the id of the number input
         */
        "elId": string;
        /**
          * a list of possible options that can be chosen from
         */
        "list"?: any;
        /**
          * the maximum number of the input field
         */
        "max"?: number;
        /**
          * the minimal number of the input field
         */
        "min"?: number;
        /**
          * the name of the number input element
         */
        "name"?: string;
        /**
          * the placeholder for the number input
         */
        "placeholder"?: string;
        /**
          * prop to determine whether or not the input field is readonly or not
         */
        "readonly"?: boolean;
        /**
          * the number step size which is allowed
         */
        "step"?: number;
        /**
          * the value of the input field
         */
        "value"?: string;
    }
    interface SvnRadioInput {
        /**
          * the id of component
         */
        "elId"?: string;
        /**
          * the name for the input
         */
        "inputName"?: string;
        /**
          * an array containing information for the radio options  every option object contains a name, id and value
         */
        "options"?: any;
    }
    interface SvnSelectInput {
        /**
          * the id of component
         */
        "elId": string;
        /**
          * value to turn multiple file select on or off
         */
        "multiple"?: boolean;
        /**
          * an array of options for the select element with name and value
         */
        "options"?: any;
    }
    interface SvnTextInput {
        /**
          * prop to determine whether or not the autocomplete is turned on for the input field
         */
        "autocomplete"?: boolean;
        /**
          * prop to determine whether or not the text is put in the center of the input
         */
        "center"?: boolean;
        /**
          * prop to determine whether or not the input field is disabled or not
         */
        "disabled"?: boolean;
        /**
          * the id of the component element
         */
        "elId": string;
        /**
          * the text for the label
         */
        "lblText"?: string;
        /**
          * the name of the element
         */
        "name": string;
        /**
          * the placeholder for the text input
         */
        "placeholder"?: string;
        /**
          * the value of the input field
         */
        "value"?: string;
    }
    interface SvnTextarea {
        /**
          * turn on automatic capitalization
         */
        "autocapitalize"?: string;
        /**
          * set to on to turn on autocorrect(is turned off by default)
         */
        "autocorrect"?: string;
        /**
          * the columns for the text area element
         */
        "cols"?: number;
        /**
          * set to true to disable input for textarea (default = false)
         */
        "disabled"?: boolean;
        /**
          * the id of the textarea
         */
        "elId": string;
        /**
          * set to true to automatically focus on the text area when page is loaded (disabled by default)
         */
        "focusTarget"?: boolean;
        /**
          * the form which the text area belongs to
         */
        "form"?: string;
        /**
          * the maximum amount of characters for textarea
         */
        "maxlength"?: number;
        /**
          * the mininmal amount of character for textarea
         */
        "minlength"?: number;
        /**
          * the name attribute for textarea
         */
        "name"?: string;
        /**
          * a placeholder for the textarea
         */
        "placeholder"?: string;
        /**
          * set to true to turn on read only (this does not prevent the users from clicking or selecting in the control)
         */
        "readonly"?: string;
        /**
          * set to true if text area is a required field in forms
         */
        "required"?: boolean;
        /**
          * attribute to enable or disable resize
         */
        "resizeDisable"?: boolean;
        /**
          * the row for the textarea element
         */
        "rows"?: number;
        /**
          * set to true to turn on spellcheck, to false to turn off spellcheck and default to use the default setting for spellcheck
         */
        "spell"?: any;
        /**
          * set to hard, soft or off
         */
        "wrap"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "svn-checkbox-input": SvnCheckboxInput;
        "svn-file-input": SvnFileInput;
        "svn-form": SvnForm;
        "svn-label": SvnLabel;
        "svn-number-input": SvnNumberInput;
        "svn-radio-input": SvnRadioInput;
        "svn-select-input": SvnSelectInput;
        "svn-text-input": SvnTextInput;
        "svn-textarea": SvnTextarea;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "svn-checkbox-input": LocalJSX.SvnCheckboxInput & JSXBase.HTMLAttributes<HTMLSvnCheckboxInputElement>;
            "svn-file-input": LocalJSX.SvnFileInput & JSXBase.HTMLAttributes<HTMLSvnFileInputElement>;
            "svn-form": LocalJSX.SvnForm & JSXBase.HTMLAttributes<HTMLSvnFormElement>;
            "svn-label": LocalJSX.SvnLabel & JSXBase.HTMLAttributes<HTMLSvnLabelElement>;
            "svn-number-input": LocalJSX.SvnNumberInput & JSXBase.HTMLAttributes<HTMLSvnNumberInputElement>;
            "svn-radio-input": LocalJSX.SvnRadioInput & JSXBase.HTMLAttributes<HTMLSvnRadioInputElement>;
            "svn-select-input": LocalJSX.SvnSelectInput & JSXBase.HTMLAttributes<HTMLSvnSelectInputElement>;
            "svn-text-input": LocalJSX.SvnTextInput & JSXBase.HTMLAttributes<HTMLSvnTextInputElement>;
            "svn-textarea": LocalJSX.SvnTextarea & JSXBase.HTMLAttributes<HTMLSvnTextareaElement>;
        }
    }
}
