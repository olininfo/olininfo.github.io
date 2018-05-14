# Info Olin
This is the source code for [info.olin.build](https://info.olin.build)

**Note:**  The open source framework [MDBootstrap](https://mdbootstrap.com) was used for parts of the web page.

## To add a tile:
1)  Create an image for the tile
	- Aspect ratio:  1:2.6
	- Resolution:  256ppi
	- Font: DIN OT;  Size: 24
	- Opaque black overlay:  30%
	- Export to .jpg

2)  Add the image to the `/images` directory

3)  Edit the `index.html` file, adding code under the `<!-- Tiles container -->` section (~line 44)

4) There are two ways to make a tile:

a)  To add a raw hyperlink, add the following code, editing the following parameters as you go:

* TILE NAME (in the comment)
* YOURID (unique keyword identifying your tile)
* YOURURL
* YOURFILENAME.jpg
* TILE NAME (under the alt attribute)

```html
<!-- TILE NAME -->
<a class="tile col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mb-4 flex-center" id="YOURID" href="YOURURL" target="_blank">
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
					<a class="list-group-item list-group-item-action waves-effect" href="YOURURL1" target="_blank">URLTITLE1</a>
					<a class="list-group-item list-group-item-action waves-effect" href="YOURURL2" target="_blank">URLTITLE2</a>
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
5)  Edit the `~/js/info.js` file, adding an attribute to the keywords JSON (see `let keywords` ~line 20).  
This attribute should consist of **YOURID**, which matches the **ID** set in `index.html`, and a list of keywords which will bring up your tile when one is typed into the search tool
```html
"YOURID": "KEYWORD1 KEYWORD2",
```

