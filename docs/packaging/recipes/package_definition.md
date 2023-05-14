---
sidebar_position: 5
---

# Package definitions

A recipe build can result in a number of packages being produced from a single source, through an automatic splitting system. Certain subpackages are already defined in the `boulder` project to ensure consistency of package splitting and names, whereas some may be explicitly defined in a recipe to fine-tune the results.

Every recipe also contains a **root package definition**, i.e the default target. This is merged with the standard metadata.

## Package metadata

### `summary`

A brief, one line description of the package based on its contents.

### `description`

A more in depth description of the package, usually sourced from a `README` or project description.

### `rundeps`

A list of manually specified runtime dependencies. These may be added to ensure that one split package depends on another, or to add a hard dependency that is not accounted for by the automatic systems.

Example:

```yaml
rundeps:
    # Depend on subpackage in this set ending with `-devel`
    - "%(name)-devel"
    - filesystem
```

## Defining a subpackage

Additional packages may be defined by extending the `packages` set, and matching a set of paths to include in that subpackage.

For example:

```yaml
packages:
    - "%(name)-tools":
        summary: Cool tools package
        description: |
            Provides a cool set of tools!
        paths:
            - /usr/bin/extra-tool
```

Note that automatic dependencies and providers still work with subpackages, so binary deps will resolve without having to manually
specify those.

## Overriding defaults

To override splitting in the root package, for example, to avoid `-devel` subpackage when building a headers-only package, you could do:

```yaml
paths:
    - /usr/include
```

To add to a predefined package, such as `-docs`:

```yaml
packages:
    - "%(name)-docs":
        paths:
            - /usr/share/custom-docs
```