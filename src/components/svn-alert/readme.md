---
id: svn-alert
title: alert
---

## Component example

<script type="module" src="https://unpkg.com/@nclemen/seven-core@latest/dist/seven-core/seven-core.esm.js"></script>


```html
<svn-alert el-id="info-alert" msg="here is some info" type="info"></svn-alert>
<svn-alert el-id="danger-alert" msg="look out danger" type="danger"></svn-alert>
<svn-alert el-id="caution-alert" msg="caution could be dangerous" type="caution"></svn-alert>
```

the code example above will result into this:

<svn-alert el-id="info-alert" msg="here is some info" type="info"></svn-alert>
<svn-alert el-id="danger-alert" msg="look out danger" type="danger"></svn-alert>
<svn-alert el-id="caution-alert" msg="caution could be dangerous" type="caution"></svn-alert>

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                   | Type     | Default     |
| -------- | --------- | --------------------------------------------- | -------- | ----------- |
| `elId`   | `el-id`   | the id of the alert component                 | `string` | `undefined` |
| `msg`    | `msg`     | the message inside the alert                  | `string` | `undefined` |
| `type`   | `type`    | the type of alert shown (info,danger,caution) | `string` | `undefined` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
