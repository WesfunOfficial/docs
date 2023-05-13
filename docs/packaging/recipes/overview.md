---
sidebar_position: 1
---

# Overview

Simply put, a recipe is some metadata to describe a software package, and the associated *instructions* required to build that package in a reproducible fashion. Doing so allows us to automate builds, and provide software updates. At a surface level, our `stone.yml` recipe format
has an awful lot in common with other packaging systems.

## A basic recipe

How might a `stone.yml` look like for a very trivial package, such as the [Nano editor](https://nano-editor.org)?

```yaml
name        : nano
version     : 5.5
release     : 2
summary     : GNU Text Editor
license     : GPL-3.0-or-later
homepage    : https://www.nano-editor.org/
description : |
    The GNU Text Editor
upstreams   :
    - https://www.nano-editor.org/dist/v5/nano-5.5.tar.xz: 390b81bf9b41ff736db997aede4d1f60b4453fbd75a519a4ddb645f6fd687e4a
setup       : |
    %configure
build       : |
    %make
install     : |
    %make_install
```

..It really is that simple. However, do not let the simplicity of the format fool you, `boulder` has a lot of hidden powers.

