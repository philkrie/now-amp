# [AMP](https://amp.dev/) Builder for [Now](https://zeit.co/home)

A builder that optimizes AMP HTML in the same way that AMP is optimized in the Google AMP Cache.

This allows you to deploy cache quality code from your own server, while also enabling features such as signed exchange... TODO

# Sample now.json Configuration

Please read the official Now [documentation](https://zeit.co/docs/v2/getting-started/introduction-to-now/)

Add the following to your now.json file, and run now to convert any .html files to AMP.

``` JSON
{
    "version": 2,
    "builds": [{ "src": "*.html", "use": "git+https://git@github.com/philkrie/now-amp.git" }]
}
```