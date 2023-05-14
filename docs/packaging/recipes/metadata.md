---
sidebar_position: 3
---

# Metadata

Recipes provide basic metadata to support discovery and automation.

Certain data is purely for naming, others are purely functional and *some* are used for our integration tooling. By having a well defined format with strongly typed keys, we're able to build in automatic update checking, for example. Most importantly, we need users to be able to find the software!

## Mandatory keys

The following metadata keys are absolutely essential.

### `name`

Set the source name of the package. As closely as possible, this should match the upstream name. This is used as the basename of the package when subpackages are automatically generated, for example:

```yaml
name: zlib
```

Could generate `zlib`, `zlib-devel`, `zlib-dbginfo`, etc.

### `version`

This string tells users what version they are using, and isn't used at all for any kind of version comparison logic in the tooling. It is
essentially a freeform string. It **should** be identical to the upstream identifier so that we can detect new releases automatically of the
source project.

### `release`

A monotonically incrementing integer. This field is bumped whenever we need to issue a new build ("release") of a package as an update to users.
Without incrementing this field, no build is scheduled.

### `homepage`

Web presence for the upstream project.

### `license`

Either a string or list of strings denoting all applicable licenses, using their [SPDX](https://spdx.org) identifier. Required for basic compliance.