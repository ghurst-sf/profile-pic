function handleFileSelect(e) {
    e.stopPropagation();
    e.preventDefault();
    var profilePic = document.getElementById("profilePic");
    var file = e.dataTransfer.files[0];
    if (file.type.match("image.*")) {
        var reader = new FileReader();
        reader.onload = function(e) {
            profilePic.src = e.target.result;
            resizeableImage($(profilePic));
            $('.upload-row').addClass('hidden');
            $('.image-editor').removeClass('hidden');
        };
        reader.readAsDataURL(file);
    }
}

function handleDragOver(e) {
    e.stopPropagation();
    e.preventDefault();
    this.classList.add("is-hovered");
    e.dataTransfer.dropEffect = "copy";
}

var e = document.querySelector("[data-overlay-dropzone]");
e.addEventListener("dragover", handleDragOver, !1);
e.addEventListener("dragleave", function() {
    this.classList.remove("is-hovered");
}, !1);
e.addEventListener("drop", handleFileSelect, !1);
