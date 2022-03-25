---
id: svn-radio-input
title: radio input
---

## Component example

<script type="module" src="https://unpkg.com/@nclemen/seven-core@0.0.31/dist/seven-core/seven-core.esm.js"></script>


```html
<svn-radio-input 
  el-id='gender' 
  input-name='gender' 
  options='[
  {"id":"male", "text":"male", "value":"male"},
  {"id":"female", "text":"female", "value":"female"}
  ]'
></svn-radio-input>
```

the code example above will result into this:

<svn-radio-input el-id='gender' input-name='gender' options='[{"id":"male", "text":"male", "value":"male"},{"id":"female", "text":"female", "value":"female"}]'></svn-radio-input>

<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                                              | Type     | Default     |
| ----------- | ------------ | -------------------------------------------------------------------------------------------------------- | -------- | ----------- |
| `elId`      | `el-id`      | the id of component                                                                                      | `string` | `undefined` |
| `inputName` | `input-name` | the name for the input                                                                                   | `string` | `undefined` |
| `options`   | `options`    | an array containing information for the radio options  every option object contains a name, id and value | `any`    | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
