# Docs

sdds

```javascript
// create an array of controls
let controls = [
  {
    element: 'input',
    // add any valid html input attributes
    attributes: {
      name: 'firstName',
      required: true,
    },
    // bootstrap column classes to position inputs
    classes: ['col-sm-12', 'col-md-6'],
    // validation based on https://github.com/icebob/fastest-validator
    validation: {
      type: 'string',
    },
    label: 'First Name',
  },
];
```

sds

## Vanilla Javascript

```javascript
// initialize form
let s = new SvelteFormer({
  target: document.getElementById('form'),
  onSubmit: function (e) {
    console.log(e);
  },
  props: {
    controls,
    // form action
    action: '',
    // form submit post
    method: 'post',
  },
});
```
