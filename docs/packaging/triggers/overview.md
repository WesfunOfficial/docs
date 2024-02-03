---
sidebar_position: 1
---

# Overview

Serpent OS supports the use of triggers, or actions, that run at the end of package installations.
Given the significantly different architecture of Serpent OS, these triggers may not be quite what
you are used to in other distributions or package managers.

## Basic mechanism

After a new transaction is formed and `moss` has identified all of the paths used to compose a filesystem,
the staging tree is built as the basis of the new `/usr`. Any trigger files (under `/usr/share/moss/triggers`)
will be loaded, and any **matching** triggers will be executed at the appropriate stage.

Note that trigger logic is based on `glob`-style path matches and are not incremental. Our triggers were so
designed to avoid the uncontrolled execution of arbitrary scripts, instead relying on logical matching of
patterns to handlers.

## Capturing globs

Our triggers use special string tokens to permit capturing groups from a glob-style string. At this stage we
support `*` and `?` glob characters only, compiling to a regex internally. Support is planned for braces.

```
    /usr/lib/(GROUP_NAME:PATTERN)/dir
```

The parenthesis begin a non-greedy capture group named `GROUP_NAME` containing pattern `PATTERN`. For example:

```
    /usr/share/icons/(name:*)/index.theme
```

This creates a capture group identifed by `name` matching `*` in `/usr/share/icons/*/index.theme`. As such,
the path `/usr/share/icons/hicolor/index.theme`. with `name` being set to `hicolor`.

This is a powerful mechanism that allows us to control handler execution without relying on interim scripts.

Consider this example:

```
    /usr/lib*/(libname:lib*.so.*)
```

This will only match `lib*.so.*` glob, and set `libname` to `libz.so.1` for `/usr/lib32/libz.so.1`, but will not
match for `/usr/lib64/libz.so`.

These globs are then used for string substitution in the arguments passed to handlers.