# [AMP](https://amp.dev/) Builder for [Now](https://zeit.co/home)

A builder that takes any HTML page and generates an AMP page. If full conversion is not possible, it will flag and recommend next steps. 

The goal of this project is to simplify the AMP development process by removing AMP boilerplate and amp tags that have HTML equivalents.

This effectively serves as an AMP compiler.

Initial version aims to add appropriate boilerplate and perform direct HTML -> AMP HTML tag conversions where possible.

# Sample now.json Configuration

Please read the official Now [documentation](https://zeit.co/docs/v2/getting-started/introduction-to-now/)

Add the following to your now.json file, and run now to "compile" any page to AMP (or as close to AMP as is possible)

``` JSON
{
    "version": 2,
    "builds": [{ "src": "*.html", "use": "git+https://git@github.com/philkrie/now-amp.git" }]
}
```
