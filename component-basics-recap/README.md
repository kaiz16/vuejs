### Project setup
```npm install```

### Compiles and hot-reloads for development
```npm run serve```

### CLI
```vue create project-name```

### SFC (Single File Components)

1) Separates chunk of html, css and js code into one .vue file
2) Can be used to create multiple components
3) Write clean code
4) Syntax highlighting 

### Directives
 - (v-) Means vue-directive. A directive is a special attribute provided by Vue. They apply special reactive behavior to the rendered DOM

 - (v-if) Similar to if/else statement in javascript. Only renders if true

 - (v-show) Similar to v-if but renders the component. Hides the component with ```display: none``` if false.

 - (v-model) Form binding, two way data binding means: If you updated input value, the value inside data will be updated as well and so on.

 - (v-for) Similar to for loop in javascript. This directive is used for displaying a list of items from arrays

 - (v-bind) ``` Shorthand = : ``` Bind the attributes and brings a javascript value into the markup. However unlike v-model, this directive is only one way binding. Mostly used for dynamic data passing.

 - (v-on) ``` Shorthand = @ ``` Similar to event listeners in javascript. This directive is used for catching events such as click, mouseover, custom events and so on.

### Props
 - Use it to pass data from parent to children.
 - Props should stay read-only. Modifying props value from children is an anti-pattern.

### Events
 - Use it to communicate from children to parent. 
 - Can be used to pass data back to parent with emit.
 - Parent can catch those events emitted by children.

```Props down, Events up```
