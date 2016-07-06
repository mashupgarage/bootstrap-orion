# Components

### Inset background

The body background is white; but use `.inset-bg` to create a section with a grey background.

```example.jade
.inset-bg
  p This is an inset background
```

### Panel heading

Used before components.

```example.jade
.panel-heading
  h2 List of things
```

#### With actions
Can have an `.action`.

```example.jade
.panel-heading
  h2 List of things
  .action
    span.btn.btn-sm.btn-accent Add new
```

### Basic panel

Basic white card.

```example.jade
.panel-heading
  h2 List of things
.basic-panel
  | Hello there, world.
```

### Buttons

Buttons are nice.

```example.jade
span.btn.btn-sm Small button
span.btn.btn-sm.btn-primary Primary
span.btn.btn-sm.btn-accent Accent
```
