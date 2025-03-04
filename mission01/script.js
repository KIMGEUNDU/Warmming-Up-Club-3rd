//아이템 화면 표시
window.addEventListener('load', () => {
  displayMenuItems(menuItems);
});

//데이터 불러오기
let menuItems = [];

fetch('data.json')
  .then((response) => response.json())
  .then((data) => {
    menuItems = data.menuItems;
    displayMenuItems(menuItems);
  });

//아이템 나열
function displayMenuItems(items) {
  const menuContainer = document.querySelector('.menu-container');
  menuContainer.innerHTML = '';

  items.forEach((item) => {
    const menuItem = document.createElement('div');
    menuItem.className = 'menu-item';
    menuItem.innerHTML = `
            <img class="menu-img" src="${item.img}" alt="${item.title}">
            <div class="menu-info">
                <div class="menu-title-price">
                  <h3 class="menu-title">${item.title}</h3>
                  <p class="menu-price">${item.price}</p>
                </div>
                <p class="menu-desc">${item.desc}</p>
            </div>
        `;
    menuContainer.appendChild(menuItem);
  });
}

//버튼 이벤트
const buttons = document.querySelectorAll('.category-btn');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-id');

    if (category === 'all') {
      displayMenuItems(menuItems);
    } else {
      const filteredItems = menuItems.filter(
        (item) => item.category === category
      );
      displayMenuItems(filteredItems);
    }
  });
});
