function clicBouton () {
    if (message.value==""||lastName.value==""||firstName.value=="") {
        let error = document.getElementById("error-message");
        error.style.display = "block";
    }else{
        let error = document.getElementById("error-message");
        error.style.display = "none";
        let commentList = document.getElementById("comment-list");
        let comment = document.createElement("div").className = "flex space-x-4 text-sm text-gray-500";
        let comment1 = document.createElement("div").className = "flex-1 py-10 border-t border-gray-200";
        let titre = document.createElement("h3").className = "font-medium text-gray-900";
        let titreTexte = document.createTextNode(document.getElementById("firstName").value + " " + document.getElementById("lastName").value);
        let comment2 = document.createElement("div").className = "prose prose-sm mt-4 max-w-none text-gray-500";
        let commentary = document.createElement("p");
        let commentaryTexte = document.createTextNode(message.value);

        titre.appendChild(titreTexte);
        commentary.appendChild(commentaryTexte);
        comment2.appendChild(commentary);
        comment1.appendChild(titre);
        comment1.appendChild(comment2);
        comment.appendChild(comment1);
        commentList.appendChild(comment);

        message.value="";
        lastName.value="";
        firstName.value="";
    }
}