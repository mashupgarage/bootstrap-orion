# Components

### inset-bg

The body background is white; but use `.inset-bg` to create a section with a grey background.

```example.jade
.inset-bg
  p This is an inset background
```

### panel-heading

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

### basic-panel

Basic white card.

```example.jade
.panel-heading
  h2 List of things
.basic-panel
  | Hello there, world.
```

#### Flushed
Add `.-flush` to remove padding.

```example.jade
.basic-panel.-flush
  | Hello there, world.
```
### Buttons

Buttons are nice.

```example.jade
span.btn.btn-sm Small button
span.btn.btn-sm.btn-primary Primary
span.btn.btn-sm.btn-accent Accent
```

## Primary heading

### primary-heading

```example.jade
.primary-heading
  .container
    .left
      ul.back-crumbs
        li.-home
          a(href="/")
        li
          a(href="/") Back
    .center
      .primary-title
        | Hello
```

### back-crumbs
Breadcrumbs.

```example.jade
ul.back-crumbs
  li.-home
    a(href="/")
  li
    a(href="/") Back
```

## Secondary nav

### secondary-nav

```example.jade
.secondary-nav
  .container
    .center
      ul.secondary-links
        li.-active
          a(href="/") Home
        li
          a(href="/") Categories
        li
          a(href="/") Orders
        li
          a(href="/") Products
```

### Flash box
For alerts.

```example.jade
.flash-box.-info
  p Updated successfully.
```

#### Errors
Use the `-error` variant.

```example.jade
.flash-box.-error
  p Oops, something happened.
```
