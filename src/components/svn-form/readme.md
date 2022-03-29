---
id: svn-form
title: form
---

## Component example

<script type="module" src="https://unpkg.com/@nclemen/seven-core@latest/dist/seven-core/seven-core.esm.js"></script>


```html
<svn-form method="post">
  <svn-label owner="textone">text input:</svn-label>
  <svn-text-input el-id="textone" name="text" placeholder="text" lbl-text="text input here:"></svn-text-input>

  <svn-label owner="fileinput">file input:</svn-label>
  <svn-file-input multiple el-id="fileinput" file-type="image"></svn-file-input>

  <svn-label owner="texttwo">textarea input:</svn-label>
  <svn-textarea el-id="texttwo" resizeDisable="true" minlength="2" maxlength="10" placeholder="enter your message..."></svn-textarea>

  <svn-label owner="numberinput">number input:</svn-label>
  <svn-number-input el-id="numberinput" min="2" max="8"></svn-number-input>

  <svn-label owner="selectinput">select input:</svn-label>
  <svn-select-input el-id="selectinput" options='[{"name":"volvo"}, {"name":"saab","value":"auto"}, {"name":"audi","value":"auto"}]'></svn-select-input>

  <svn-label owner="company">radio input:</svn-label>
  <svn-radio-input el-id options='[{"id":"samsung", "text":"korean", "value":"Samsung"},{"id":"apple", "text":"fruit", "value":"Apple"},{"id":"microsoft", "text":"glass","value":"Microsoft"}]' input-name="company"></svn-radio-input>

  <svn-label owner="programminglanguages">programming languages:</svn-label>
  <svn-checkbox-input el-id="programminglanguages" name="javascript"></svn-checkbox-input>
  <svn-checkbox-input el-id="programminglanguages" name="php"></svn-checkbox-input>
  <svn-checkbox-input el-id="programminglanguages" name="c#"></svn-checkbox-input>
  <svn-checkbox-input el-id="programminglanguages" name="java"></svn-checkbox-input>
</svn-form>
```

the code example above will result into this:

<svn-form method="post">
  <svn-label owner="textone">text input:</svn-label>
  <svn-text-input el-id="textone" name="text" placeholder="text" lbl-text="text input here:"></svn-text-input>
  
  <svn-label owner="fileinput">file input:</svn-label>
  <svn-file-input multiple el-id="fileinput" file-type="image"></svn-file-input>
  
  <svn-label owner="texttwo">textarea input:</svn-label>
  <svn-textarea el-id="texttwo" resizeDisable="true" minlength="2" maxlength="10" placeholder="enter your message..."></svn-textarea>
  
  <svn-label owner="numberinput">number input:</svn-label>
  <svn-number-input el-id="numberinput" min="2" max="8"></svn-number-input>
  
  <svn-label owner="selectinput">select input:</svn-label>
  <svn-select-input el-id="selectinput" options='[{"name":"volvo"}, {"name":"saab","value":"auto"}, {"name":"audi","value":"auto"}]'></svn-select-input>
  
  <svn-label owner="company">radio input:</svn-label>
  <svn-radio-input el-id options='[{"id":"samsung", "text":"korean", "value":"Samsung"},{"id":"apple", "text":"fruit", "value":"Apple"},{"id":"microsoft", "text":"glass","value":"Microsoft"}]' input-name="company"></svn-radio-input>
  
  <svn-label owner="programminglanguages">programming languages:</svn-label>
  <svn-checkbox-input el-id="programminglanguages" name="javascript"></svn-checkbox-input>
  <svn-checkbox-input el-id="programminglanguages" name="php"></svn-checkbox-input>
  <svn-checkbox-input el-id="programminglanguages" name="c#"></svn-checkbox-input>
  <svn-checkbox-input el-id="programminglanguages" name="java"></svn-checkbox-input>
</svn-form>

<!-- Auto Generated Below -->


## Properties

| Property            | Attribute | Description          | Type     | Default     |
| ------------------- | --------- | -------------------- | -------- | ----------- |
| `elId` _(required)_ | `el-id`   | the id of the form   | `string` | `undefined` |
| `name`              | `name`    | the name of the form | `string` | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
