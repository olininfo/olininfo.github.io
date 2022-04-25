# How to contribute

Contents:
* [Philosophy (read this first!)](#philosophy-read-this-first)
* [Steps to create a clean pull request](#steps-to-create-a-clean-pull-request)
* [How to add a tile](#how-to-add-a-tile)
* [The P&M archive & suggestions form](#the-pm-archive--suggestions-form)

## Philosophy (read this first!)

We want this resource to respond to the needs of the Olin student community. However, we also want to make information (relatively) easy to find. There's a balance between having a ton of information available and making it easy to navigate. When adding content, please consider:

### Necessity:
- Is this information already easy to find? (Can it be reliably found in the top 3 web search results if you search for it?)
	- Is this a website or tool that students would use so regularly that they don't need to search for it (i.e., Outlook, Canvas, course-specific sites)?
- Is this information either:
	- Used frequently, and annoying to navigate to
	- Used infrequently but not rarely, and very hard to locate
	- Something that students ask other students where to find, more than once
	- The P&M clause... see the [end of this section](#the-pm-clause)

### Hierarchy:
- Does this need its own tile, or can it be added under or merged with an existing one?
	- There is a strong preference to limit the page to 16-20 tiles, as this generally fits on a desktop screen.
- What position should the new item take relative to existing content?
	- Do you want people to be able to spot it quickly, or
	- Do you just want people to be able to find it if they're looking for it?

### Searchability:
- Take a couple minutes to think about what search terms someone might use if they were looking for this resource.
- Keep in mind that the search function on this site does not work like Google. It looks for the complete text you enter within strings of keywords.

### It's **For** Oliners:
- The site's purpose is to make it easy and convenient for Oliners to find information and resources that they need, relatively quickly. It's not a substitute for helpme or all-students emails. The site is not intended to host projects, surveys, or studies where students are not the direct and immediate beneficiaries. For example, a survey asking students what they thought of a recent change on campus would preferably be sent as an email, rather than adding one more object for people to search through on this site.

#### The P&M clause
We try to support Products & Markets (or oth class) groups that are trying to create resources and tools that improve the student experience. If a P&M group wants to add their project to the site, we generally help them do that. They'll often get their own tile, placed pretty high up, just to help them scrape up whatever exposure they can in the beginning. This site isn't exactly getting traffic like the first page of Google search results, anyhow.

Once the project ends, if usage/interest is dwindling and the project is not going to be supported anymore, you can (please) delete the tile or link.

The P&M clause does not supersede "It's for Oliners": I currently do not see the utility for users of including surveys or sales forms on the site.


**Thank you for contributing!**

## Steps to create a clean pull request

Adapted from: https://gist.github.com/MarcDiethelm/7303312 

- Create a personal fork of the project on Github.
- Clone the fork on your local machine:

`git clone git@github.com:{your_username}/olininfo.github.io.git`
- Your remote repo on Github is called `origin`.
- From the project folder, add the original repository as a remote called `upstream`: 

`git remote add upstream https://github.com/olininfo/olininfo.github.io.git`

- If you created your fork a while ago be sure to pull upstream changes into your local repository.

`git pull upstream master`

- Optionally create a new branch to work on. Branch from `master`.
- Implement your feature. Remember to comment your code.
- Follow the code style of the project, including indentation.
- Add or change the documentation as needed.
- Push your branch to your fork on Github, the remote `origin`:

`git push origin {branch_name}`
- [Open a pull request](https://github.com/olininfo/olininfo.github.io/compare), "compare across forks" and be sure to select the correct branch from your fork. Target the project's `master` branch.
- Once the pull request is approved and merged you can pull the changes from `upstream` (as shown previously) to your local repo and delete
your extra branch(es).

## How to add a tile

### 1)  Create an image for the tile

Card images should be:
- Saved in .JPG format
- Around 2.5:1 aspect ratio (landscape orientation)
- 1024-2048px wide
- Dark enough to show white text clearly
- Free of text in the center of the image

If you are using Adobe Photoshop, you can export your image as jpg using the **Save for Web (Legacy)** feature (i.e. `File > Export > Save For Web (Legacy)`). To save space, make sure the image width is between 1024 and 2048. Remember to keep the original image.

### 2)  Add images

- Add the modified image to the `/images` directory.
- Add the original image to the `/images/images_original` directory.

### 3) Make a tile:

First, open the `index.html` file, adding code under the `<!-- Tiles container -->` section (~line 44)

**There are two ways to add a tile:**

#### *Option 1:*
To add a raw hyperlink, add the following code, editing the following parameters as you go:

* TILE NAME (in the comment)
* YOURID (unique keyword identifying your tile)
* YOURURL
* YOURFILENAME.jpg
* TILE NAME (under the alt attribute)

```html
<!-- TILE NAME -->
<a class="tile col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mb-4" id="YOURID" href="YOURURL" target="_blank" rel="noopener">
    <div class="tile-wrapper hoverable flex-center img-fluid z-depth-1"
        style="background: url('images/YOURFILENAME.jpg') center; background-size: cover">
        <div class="tile-title flex-center">
			<h2>TILE NAME</h2>
		</div>
    </div>
</a>
```
#### *Option 2:*
To open a set of options (a bootstrap modal object) add the following code, editing the parameters as you go:

**Step one:** Add the tile card under the `<!-- Tiles container -->` section 

* TILE NAME (in the comment)
* YOURID (unique keyword identifying your tile)
* YOURIDModal (literally, your keyword with "Modal" appended onto the end)
* YOURFILENAME.jpg
* TILE NAME (under the alt attribute)
```html
<!-- TILE NAME -->
<a class="tile col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mb-4" id="YOURID" data-toggle="modal" data-target="#YOURIDModal">
	<div class="tile-wrapper hoverable flex-center img-fluid z-depth-1"
        style="background: url('images/YOURFILENAME.jpg') center; background-size: cover">
        <div class="tile-title flex-center">
			<h2>TILE NAME</h2>
		</div>
    </div>
</a>
```

**Step two:** Below the code above, add a popup [modal](https://mdbootstrap.com/javascript/modals/) for the tile
* TILE NAME MODAL
* YOURIDModal
* YOURIDModalLabel (literally, your keyword with "ModalLabel" appended onto the end)
* YOURIDModalLabel (again)
* TITLE
* YOURURL1
* URLTITLE1
* YOURURL2
* URLTITLE2 (etc.)

```html
<!-- TILE NAME MODAL -->
<div class="modal fade" id="YOURIDModal" tabindex="-1" role="dialog" aria-labelledby="YOURIDModalLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title" id="YOURIDModalLabel">TITLE</h5>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
				<div class="list-group">
					<a class="list-group-item list-group-item-action waves-effect" href="YOURURL1" target="_blank" rel="noopener">URLTITLE1</a>
					<a class="list-group-item list-group-item-action waves-effect" href="YOURURL2" target="_blank" rel="noopener">URLTITLE2</a>
					<!-- Add as many items as you want -->
				</div>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-olin-blue" data-dismiss="modal">Close</button>
			</div>
		</div>
	</div>
</div>
```
### 4)  Add search keywords for the new tile

Edit the `~/js/info.js` file, adding an attribute to the keywords JSON (see `let keywords` ~line 20).  
This attribute should consist of **YOURID**, which matches the **ID** set in `index.html`, and a list of keywords which will bring up your tile when one is typed into the search tool
```html
"YOURID": "KEYWORD1 KEYWORD2",
```

## The P&M archive & suggestions form
All the files related to the design & creation of this site live [here](https://drive.google.com/drive/folders/16EcBV1B2tCupr0TdoDJzYvmCNRK8D5cw?usp=sharing). You'll need to request access to see it, but we'll be happy that you asked.

The feedback and suggestions form linked at the bottom of the site saves responses in [this folder](https://drive.google.com/drive/folders/1bM7ecg8Y9MawuHC73b0SvMs32eZfxFJq). If you're the current primary maintainer, you should check this occasionally. If the primary maintainer is AWOL, feel free to email them, request access to these files, and start updating things yourself.