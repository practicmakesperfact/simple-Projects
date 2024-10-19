
  document.addEventListener("DOMContentLoaded", function() {  //This ensures that the JavaScript runs after the HTML has fully loaded, preventing any errors related to querying elements that aren't yet present in the DOM.
    const cartList = document.querySelector('.cart-list');
    const clearCartButton = document.querySelector('.clear-cart button');

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function() {
            const courseElement = this.closest('.courses');
            const courseTitle = courseElement.querySelector('#title').textContent;
            const coursePrice = courseElement.querySelector('#discountPrice').textContent;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <span>${courseTitle} - ${coursePrice}</span>
                <button class="remove">X</button>
            `;

            // Insert the new cart item before the clear cart button
            cartList.insertBefore(cartItem, clearCartButton.parentElement);

            // Remove item from cart
            cartItem.querySelector('.remove').addEventListener('click', function() {
                cartList.removeChild(cartItem);
            });
        });
    });

    // Clear cart
    clearCartButton.addEventListener('click', function() {
        cartList.innerHTML = '';
        // Reinsert the Clear Cart button after clearing
        cartList.appendChild(clearCartButton.parentElement);
    });
});
// access courses by searching


  document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('course-search');
    const courses = document.querySelectorAll('.courses');

    // Search functionality
    searchInput.addEventListener('input', function() {
      const searchTerm = searchInput.value.toLowerCase(); // Get the search term in lowercase

      courses.forEach(course => {
        const courseTitle = course.querySelector('#title').textContent.toLowerCase(); // Get the course title
        if (courseTitle.includes(searchTerm)) {
          course.style.display = ''; // Show the course if it matches
        } else {
          course.style.display = 'none'; // Hide the course if it doesn't match
        }
      });
    });
  });
  const str="hay, gays!";
  const rev =
   str.split('').reverse().join('');
  console.log(rev);