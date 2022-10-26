const element = document.querySelector('#categories')
const items = element.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);
for (let i = 0; i < items.length; i += 1) {
    console.log("Category: " + items[i].querySelector('h2').textContent);
    console.log("Elements: " + items[i].querySelectorAll('ul li').length);
}