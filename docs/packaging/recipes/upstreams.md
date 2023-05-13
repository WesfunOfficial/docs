---
sidebar_position: 2
---

# Upstreams

The majority of packages are built using upstream release sources. While it is possible to create packages manually from local assets, the bulk of packages take an upstream tarball and build it.

### Plain sources

A plain source is one that simply has an upstream URI and can be unpacked in some fashion, i.e. a tarball. The hash must be provided for the
upstream and accompanied by the SHA256 sum.

```yaml
upstreams:
    - uri: $hash
```

```yaml
upstreams
    - uri:
        hash: $hash
```

#### Additional options

| Key       | Type      | Description     |
|-----------|-----------|-----------------|
| hash      | `boolean` | SHA256 of the upstream source
| stripdirs | `string`  | Number of directories to remove from archive root
| unpack    | `bool`    | Whether to automatically unpack archive or not
| unpackdir | `string`  | Force a different directory name when unpacking



### Git sources

A git source may be used, when providing either a `tag` or `ref`. In Serpent OS we forbid the use of `branch` names in packaging, as they may mutate and break subsequent builds. Ideally a full git ref should be used.

:::caution

Git repositories do work well with `boulder` right now, however some `submodule` based builds are under active testing.

:::

```yaml
upstreams:
    - git|uri: $ref
```

```yaml
upstreams:
    - git|uri:
        ref: $ref
```

#### Additional options

| Key  | Type      | Description     |
|------|-----------|-----------------|
| ref      | `string`  | git ref when using git source
| clonedir | `string`  | Override clone target directory