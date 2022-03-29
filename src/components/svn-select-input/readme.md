---
id: svn-select-input
title: select input
---

## Component example

<script type="module" src="https://unpkg.com/@nclemen/seven-core@latest/dist/seven-core/seven-core.esm.js"></script>

### default:

```html
<svn-select-input 
  el-id="selectinput"
  options='[
  {"name":"scooter","value":"scooter"},
  {"name":"car","value":"car"},
  {"name":"bicycle","value":"bicycle"}
  ]'
></svn-select-input>
```

the code example above will result into this:

<svn-select-input el-id="selectinput" options='[{"name":"scooter","value":"scooter"}, {"name":"car","value":"car"}, {"name":"bicycle","value":"bicycle"}]'></svn-select-input>

### multiple select:

```html
<svn-select-input
  el-id="selectinput"
  options='[
  {"name":"scooter","value":"scooter"},
  {"name":"car","value":"car"},
  {"name":"bicycle","value":"bicycle"}
  ]'
  multiple
></svn-select-input>
```

the code example above will result into this:

<svn-select-input el-id="selectinput" options='[{"name":"scooter","value":"scooter"}, {"name":"car","value":"car"}, {"name":"bicycle","value":"bicycle"}]' multiple></svn-select-input>

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute  | Description                                                    | Type      | Default     |
| ------------------- | ---------- | -------------------------------------------------------------- | --------- | ----------- |
| `elId` _(required)_ | `el-id`    | the id of component                                            | `string`  | `undefined` |
| `multiple`          | `multiple` | value to turn multiple file select on or off                   | `boolean` | `false`     |
| `name`              | `name`     | the name attribute for the select element                      | `string`  | `undefined` |
| `options`           | `options`  | an array of options for the select element with name and value | `any`     | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
