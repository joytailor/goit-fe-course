'use: strict';


const page = document.querySelector('body');


function createPost(source, titleText, content){
     const post = {
     post:source = source,
     post:titleText = titleText,
     post:content = content, };

         function createPostCard(post) {
            const itemDom = document.createElement("div");
            itemDom.classList.add('post');
            const logoType = document.createElement("img");
            logoType.classList.add('post__image');
            logoType.src = source;
            logoType.alt = 'this is img'
            const title = document.createElement("h2");
            title.classList.add('post__title')
            title.textContent = titleText;
            const text = document.createElement("p");
            text.textContent = content;
            const link = document.createElement("a");
            link.classList.add('button');
            link.href = '#';
            link.textContent = 'Read More';
            itemDom.append(logoType, title, text, link);
            page.append(itemDom)  
}


}

createPost('https://placeimg.com/400/150/any', 'Article 1','content our Article 1');