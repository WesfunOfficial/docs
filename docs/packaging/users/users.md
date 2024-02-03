---
sidebar_position: 3
---

# Defining Users

System accounts should *always* be marked as `locked`. Refer to the [JSON User Record](https://systemd.io/USER_RECORD/) documentation for information on all supported fields.

In Serpent OS we only ship user definitions without `privileged` or `signature` fields.

## Example

Within the package tree `./pkg` add `gdm.user`:

```json
{
    "userName" : "gdm",
    "realName" : "GNOME Display Manager",
    "uid" : 21,
    "gid" : 21,
    "disposition" : "system",
    "locked" : true
}
```

Note that these are the minimum required set of fields, and `disposition` should always be set to `system`. Also note that
`homeDirectory` may need setting for some packages.

In your recipe's `install` section, you must install the file by username *and* by uid to the `%(libdir)/userdb` directory:

```shell
    %install_file %(pkgdir)/gdm.user %(installroot)%(libdir)/userdb/gdm.user
    ln -s gdm.user %(installroot)%(libdir)/userdb/21.user
```