# errata.studio

The Errata website. It is a plain static site built by GitHub Pages from this
repository. Every push to `main` rebuilds and publishes the live site within a
minute or two.

## Editing without touching code

Go to **app.pagescms.org**, sign in with GitHub, and open the `errata` repo.
Pages CMS reads `.pages.yml` in this repo and turns the files below into forms.

| In Pages CMS | What it edits | File here |
|---|---|---|
| Home page | Every block of text and every photo on the front page | `index.html` |
| Events | The Upcoming Events list | `_events/` |
| Pages | Extra standalone pages | `pages/` |
| Site settings | Choir name, tagline, email, Instagram | `_data/site.yml` |
| Media | Photo library | `images/` |

Saving in Pages CMS commits to `main`, which republishes the site.

### Adding an event

Events → Add. The date field decides everything: the card shows the month and
day, the list is sorted by date, and an event disappears from the site by itself
the day after it happens. "Show on a black background" makes one card stand out.

### Adding a page

Pages → Add. Give it a title and write the text. Turn on **Show in menu** to add
it to the menu at the top and bottom of the site; **Position in the menu** orders
it against the other added pages. Leave it off and the page still exists at its
own address, it is just not linked from anywhere.

### Adding a photo

Home page → Section: Gallery → Photos → Add. Upload the picture and write a
short description of it (that description is what a blind visitor's screen
reader reads out). Photos are stored in `images/`.

Resize big photos before uploading — anything wider than about 1600 pixels is
larger than the site can use and only makes the page slow to load.

## What is where

```
index.html        front page: all its text and photos live in the header block
_data/site.yml    choir name, tagline, contact details
_events/          one file per event
pages/            one file per extra page
images/           photos
_layouts/         the page templates (structure)
_includes/        the ERRATA wordmark, used in three places
style.css         all the styling
script.js         menu, fade-ins, and hiding events that have passed
_config.yml       build settings
.pages.yml        tells Pages CMS which fields to show
CNAME             the custom domain
```

## Editing by hand instead

Any file can be edited straight on github.com: open it, press the pencil icon,
change the text, then "Commit changes". The same rebuild happens.

The wordmark is in `_includes/wordmark.html` and appears in the top bar, the
hero and the footer. The mirrored red R is the third letter; `.r-flip` in
`style.css` flips it and corrects the spacing that flipping throws out.
