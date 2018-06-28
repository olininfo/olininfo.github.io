# How to contribute


## Steps to create a clean pull request

Adapted from: https://gist.github.com/MarcDiethelm/7303312 

- Create a personal fork of the project on Github.
- Clone the fork on your local machine. Your remote repo on Github is called `origin`.
- Add the original repository as a remote called `upstream`: 

`git remote add upstream https://github.com/olininfo/olininfo.github.io.git`

- If you created your fork a while ago be sure to pull upstream changes into your local repository.

`git pull upstream master`

- Create a new branch to work on! Branch from `develop` if it exists, else from `master`.
- Implement your feature. Remember to comment your code.
- Follow the code style of the project, including indentation.
- If the project has tests run them!
- Write or adapt tests as needed.
- Add or change the documentation as needed.
- If you have more than one commit, squash all your commits into a single commit with git's [interactive rebase](https://help.github.com/articles/interactive-rebase). A pull request should make one or a few changes. Create a new branch for a different change/feature if necessary.
- Push your branch to your fork on Github, the remote `origin`.
- From your fork open a pull request in the correct branch. Target the project's `develop` branch if there is one, else go for `master`!
- Once the pull request is approved and merged you can pull the changes from `upstream` to your local repo and delete
your extra branch(es).

## How to add a tile:

### 1)  Create an image for the tile

Create an image with text/title overlayed on the top:

	- Aspect ratio:  1:2.6
	- Resolution:  256ppi
	- Font: DIN OT;  Size: 24
	- Opaque black overlay:  30%
	- Export to .jpg

Remember to keep the original image.

### 2)  Add images

- Add the modified image to the `/images` directory.
- Add the original image to the `/images/images_notext` directory.

### 3) Make a tile:

First, open the `index.html` file, adding code under the `<!-- Tiles container -->` section (~line 44)

**There are two ways to add a tile:**

a)  To add a raw hyperlink, add the following code, editing the following parameters as you go:

* TILE NAME (in the comment)
* YOURID (unique keyword identifying your tile)
* YOURURL
* YOURFILENAME.jpg
* TILE NAME (under the alt attribute)

```html
<!-- TILE NAME -->
<a class="tile col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mb-4 flex-center" id="YOURID" href="YOURURL" target="_blank" rel="noopener">
	<img src="images/YOURFILENAME.jpg" class="hoverable img-fluid z-depth-1 tile-image" alt="TILE NAME">
</a>
```
b)  To open a set of options (a bootstrap modal object) add the following code, editing the parameters as you go:

**Step one:** Add the tile card under the `<!-- Tiles container -->` section 

* TILE NAME (in the comment)
* YOURID (unique keyword identifying your tile)
* YOURIDModal (literally, your keyword with "Modal" appended onto the end)
* YOURFILENAME.jpg
* TILE NAME (under the alt attribute)
```html
<!-- TILE NAME -->
<a class="tile col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mb-4 flex-center" id="YOURID" data-toggle="modal" data-target="#YOURIDModal">
	<img src="images/YOURFILENAME.jpg" class="hoverable img-fluid z-depth-1 tile-image" alt="TILE NAME">
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
				<button type="button" class="btn btn-outline-light-blue" data-dismiss="modal">Close</button>
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
