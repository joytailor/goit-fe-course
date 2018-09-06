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
    createPostCard(post);

}

createPost('https://placeimg.com/400/150/any', 'Article 1','content our Article 1');

// 2. Создайте функцию createCards(posts), которая принимает массив
//     объектов-карточек, вызывает функцию createPostCard(post) столько
//     раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
//     массив DOM-элементов всех постов.
    
//   3. Повесьте все посты в какой-то уже существующий DOM-узел.
// */

function createCards(posts){
    posts.forEach(el => {createPost(el.img, el.title, el.text)});
}

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];